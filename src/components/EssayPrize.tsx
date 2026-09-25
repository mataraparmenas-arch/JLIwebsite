import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Clock, Trophy, Calendar, Users, FileText } from 'lucide-react';

// Key dates from the website
const keyDates = [
  { date: '2026-02-02', label: 'Registration Opens', status: 'completed' },
  { date: '2026-03-31', label: 'Registration Deadline', status: 'completed' },
  { date: '2026-04-01', label: 'Submissions Open', status: 'active' },
  { date: '2026-04-30', label: 'Late Registration Deadline ($10)', status: 'upcoming' },
  { date: '2026-05-31', label: 'Submission Deadline', status: 'upcoming' },
  { date: '2026-06-07', label: 'Late Entry Deadline (7-day)', status: 'upcoming' },
  { date: '2026-06-21', label: 'Late Entry Deadline (21-day)', status: 'upcoming' },
  { date: '2026-07-07', label: 'Shortlist Notification', status: 'upcoming' },
  { date: '2026-10-02', label: 'Academic Conference', status: 'upcoming' },
  { date: '2026-10-03', label: 'Awards Dinner', status: 'upcoming' },
];

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculate());
    const interval = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl glass-light flex items-center justify-center mb-2">
        <span className="font-mono text-2xl sm:text-3xl font-bold text-[#f5f0e8]">
          {String(value).padStart(2, '0')}
        </span>
        <div className="absolute inset-0 rounded-xl border border-[#4f8fff]/20" />
      </div>
      <span className="text-[10px] sm:text-xs font-medium text-[#f5f0e8]/50 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function EssayPrize() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedTimeline, setExpandedTimeline] = useState(false);

  // Countdown to submission deadline
  const countdown = useCountdown('2026-05-31T23:59:00Z');

  // Determine current status
  const now = new Date().getTime();
  let currentStatus = 'registration';
  let statusLabel = 'REGISTRATION OPEN';
  let statusColor = '#10b981';

  const submissionOpen = new Date('2026-04-01').getTime();
  const submissionDeadline = new Date('2026-05-31').getTime();
  const shortlistDate = new Date('2026-07-07').getTime();
  const conferenceDate = new Date('2026-10-02').getTime();

  if (now >= conferenceDate) {
    currentStatus = 'completed';
    statusLabel = 'COMPLETED';
    statusColor = '#f5f0e8';
  } else if (now >= new Date('2026-10-02').getTime() - 86400000) {
    currentStatus = 'awards';
    statusLabel = 'AWARDS CEREMONY';
    statusColor = '#c9a96e';
  } else if (now >= shortlistDate) {
    currentStatus = 'shortlist';
    statusLabel = 'SHORTLIST ANNOUNCED';
    statusColor = '#7c5cfc';
  } else if (now >= submissionDeadline) {
    currentStatus = 'judging';
    statusLabel = 'JUDGING';
    statusColor = '#f43f5e';
  } else if (now >= submissionOpen) {
    currentStatus = 'submissions';
    statusLabel = 'SUBMISSIONS OPEN';
    statusColor = '#4f8fff';
  }

  const visibleDates = expandedTimeline ? keyDates : keyDates.slice(0, 5);

  return (
    <section id="essay-prize" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4f8fff]/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#7c5cfc] mb-4 block">
            04 — Compete
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#f5f0e8] mb-6">
            2026 Global <span className="text-gradient">Essay Prize</span>
          </h2>
          <p className="max-w-3xl mx-auto text-[#f5f0e8]/60 text-base sm:text-lg leading-relaxed">
            The John Locke Institute encourages young people to cultivate the characteristics that turn good students into great writers: independent thought, depth of knowledge, clear reasoning, critical analysis and persuasive style.
          </p>
        </motion.div>

        {/* Status + Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-light rounded-3xl p-8 sm:p-12 mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Status */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: statusColor }} />
                <div className="absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-30" style={{ backgroundColor: statusColor }} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#f5f0e8]/50 block mb-1">
                  Competition Status
                </span>
                <span className="font-mono text-sm font-bold tracking-wider" style={{ color: statusColor }}>
                  {statusLabel}
                </span>
              </div>
            </div>

            {/* Countdown */}
            <div className="text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-[#f5f0e8]/50 block mb-4">
                Submission Deadline
              </span>
              <div className="flex items-center gap-3 sm:gap-4">
                <CountdownUnit value={countdown.days} label="Days" />
                <span className="text-2xl text-[#f5f0e8]/30 font-light">:</span>
                <CountdownUnit value={countdown.hours} label="Hours" />
                <span className="text-2xl text-[#f5f0e8]/30 font-light">:</span>
                <CountdownUnit value={countdown.minutes} label="Mins" />
                <span className="text-2xl text-[#f5f0e8]/30 font-light">:</span>
                <CountdownUnit value={countdown.seconds} label="Secs" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Dates Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#f5f0e8] mb-8 text-center">
            Key Dates
          </h3>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4f8fff] via-[#7c5cfc] to-[#00d4ff] opacity-30" />

            <div className="space-y-4">
              {visibleDates.map((item, i) => {
                const dateObj = new Date(item.date);
                const isPast = dateObj.getTime() < now;
                const isActive = item.status === 'active';
                
                return (
                  <motion.div
                    key={item.date}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                    className={`relative flex items-center gap-4 sm:gap-8 ${
                      i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                      <div className={`w-3 h-3 rounded-full border-2 ${
                        isPast ? 'border-[#10b981] bg-[#10b981]/30' :
                        isActive ? 'border-[#4f8fff] bg-[#4f8fff] animate-pulse' :
                        'border-[#f5f0e8]/30 bg-transparent'
                      }`} />
                    </div>

                    {/* Content */}
                    <div className={`ml-10 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'
                    }`}>
                      <div className="glass-light rounded-xl p-4 inline-block">
                        <span className="font-mono text-xs text-[#4f8fff] block mb-1">
                          {dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className={`text-sm font-medium ${isPast ? 'text-[#f5f0e8]/40' : 'text-[#f5f0e8]/80'}`}>
                          {item.label}
                        </span>
                      </div>
                    </div>

                    {/* Spacer for other side */}
                    <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>

            {keyDates.length > 5 && (
              <button
                onClick={() => setExpandedTimeline(!expandedTimeline)}
                className="mt-6 mx-auto flex items-center gap-2 text-sm text-[#4f8fff] hover:text-[#7c5cfc] transition-colors"
              >
                {expandedTimeline ? 'Show less' : `Show all ${keyDates.length} dates`}
                <motion.div animate={{ rotate: expandedTimeline ? 180 : 0 }}>
                  <Calendar className="w-4 h-4" />
                </motion.div>
              </button>
            )}
          </div>
        </motion.div>

        {/* Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass-light rounded-2xl p-6 text-center">
            <Trophy className="w-8 h-8 text-[#c9a96e] mx-auto mb-3" />
            <div className="font-mono text-2xl font-bold text-[#c9a96e] mb-1">$10,000</div>
            <div className="text-sm text-[#f5f0e8]/60">Grand Prize Scholarship</div>
          </div>
          <div className="glass-light rounded-2xl p-6 text-center">
            <Trophy className="w-8 h-8 text-[#4f8fff] mx-auto mb-3" />
            <div className="font-mono text-2xl font-bold text-[#4f8fff] mb-1">$5,000</div>
            <div className="text-sm text-[#f5f0e8]/60">First Prize per Category</div>
          </div>
          <div className="glass-light rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 text-[#7c5cfc] mx-auto mb-3" />
            <div className="font-mono text-2xl font-bold text-[#7c5cfc] mb-1">150+</div>
            <div className="text-sm text-[#f5f0e8]/60">Countries Represented</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="https://www.johnlockeinstitute.com/essay-competition"
            className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#7c5cfc] to-[#4f8fff] text-base font-medium text-white group"
          >
            View Competition Questions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Next Event Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="glass-light rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#4f8fff]/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-[#4f8fff]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#4f8fff] block mb-0.5">
                Next Event
              </span>
              <span className="text-sm font-medium text-[#f5f0e8]">
                Academic Conference
              </span>
              <span className="text-xs text-[#f5f0e8]/40 block">
                2–4 October 2026, London
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
