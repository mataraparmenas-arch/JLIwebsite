import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 150, suffix: '+', label: 'Countries', description: 'Students from over 150 countries submit entries to the Global Essay Prize' },
  { value: 130, suffix: '', label: 'Countries', description: 'Applications submitted from 130 countries for our summer programmes' },
  { value: 10, suffix: '', label: 'Subject Categories', description: 'Economics, History, International Relations, Law, Philosophy, Politics, Psychology, Public Policy, Science & Technology, and Theology' },
  { value: 30, suffix: '+', label: 'Prize Winners', description: 'First, Second, and Third Prize winners in each category, plus the Grand Prize' },
  { value: 9, suffix: '', label: 'Global Locations', description: 'Boston, Cambridge, Dubai, Georgetown, Hong Kong, Oxford, Princeton, Singapore, and Washington D.C.' },
  { value: 1, suffix: '', label: 'Grand Prize', description: 'An honorary John Locke Institute Junior Fellowship with a US$10,000 scholarship' },
];

export default function GlobalReach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="global-reach" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c5cfc]/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#10b981] mb-4 block">
            06 — Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#f5f0e8] mb-6">
            A Genuinely <span className="text-gradient">Global</span> Institution
          </h2>
          <p className="max-w-2xl mx-auto text-[#f5f0e8]/60 text-base sm:text-lg">
            The John Locke Institute's Global Essay Prize is acknowledged as the world's most prestigious essay competition, welcoming tens of thousands of submissions from ambitious students worldwide.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label + i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass-light rounded-2xl p-8 text-center group hover:border-[#4f8fff]/20 transition-all duration-300"
            >
              <div className="mb-4">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#f5f0e8] mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-[#f5f0e8]/50 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Global map visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-light rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative flex flex-col items-center text-center">
            <Globe className="w-16 h-16 text-[#4f8fff]/40 mb-6" />
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#f5f0e8] mb-4">
              From the Chairman of Examiners
            </h3>
            <blockquote className="max-w-3xl text-[#f5f0e8]/60 leading-relaxed italic font-serif text-lg mb-6">
              "We welcome tens of thousands of submissions from ambitious students in more than 150 countries, and our examiners — including distinguished philosophers, political scientists, economists, historians, psychologists, theologians, and legal scholars — read and carefully assess every entry."
            </blockquote>
            <div className="text-sm text-[#c9a96e]">
              <p className="font-medium">Professor Terence Kealey, D. Phil. (Oxon)</p>
              <p className="text-[#f5f0e8]/40">Chairman of Examiners</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
