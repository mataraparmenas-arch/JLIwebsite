import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, GraduationCap, Users, FileCheck } from 'lucide-react';

export default function Admissions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#f43f5e] mb-4 block">
            07 — Act
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#f5f0e8] mb-6">
            Will You <span className="text-gradient">Join Us?</span>
          </h2>
        </motion.div>

        {/* Admissions content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#f5f0e8] mb-6">
              Admissions
            </h3>
            <p className="text-[#f5f0e8]/60 leading-relaxed mb-6">
              We welcome applications from motivated, high-ability students who would benefit from a demanding curriculum, rigorous intellectual engagement with other bright students, and close attention from leading academics. We particularly encourage applications from those who would make a meaningful contribution to the experience of other participants, both inside and outside the classroom.
            </p>
            <p className="text-[#f5f0e8]/60 leading-relaxed mb-8">
              Admission is competitive. Candidates are selected following careful consideration of a written application and an online interview. We typically receive six applications for each available place. Last year, applications were submitted from 130 countries.
            </p>
            <a
              href="https://www.johnlockeinstitute.com/admissions"
              className="btn-magnetic inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#f5f0e8]/20 text-sm font-medium text-[#f5f0e8] hover:border-[#4f8fff]/40 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Right - Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#4f8fff]/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-[#4f8fff]" />
              </div>
              <div>
                <h4 className="font-medium text-[#f5f0e8] mb-1">Competitive Selection</h4>
                <p className="text-sm text-[#f5f0e8]/50">Six applications for each available place, selected through written application and online interview.</p>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#7c5cfc]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#7c5cfc]" />
              </div>
              <div>
                <h4 className="font-medium text-[#f5f0e8] mb-1">Global Applicants</h4>
                <p className="text-sm text-[#f5f0e8]/50">Applications submitted from 130 countries for our summer programmes last year.</p>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-5 h-5 text-[#c9a96e]" />
              </div>
              <div>
                <h4 className="font-medium text-[#f5f0e8] mb-1">Rigorous Assessment</h4>
                <p className="text-sm text-[#f5f0e8]/50">Careful consideration of written applications and online interviews by our faculty team.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Apply CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-light rounded-3xl p-8 sm:p-12 text-center"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#f5f0e8] mb-4">
            Will You Join Us?
          </h3>
          <p className="text-[#f5f0e8]/60 max-w-xl mx-auto mb-8">
            Be ambitious. Compete with students from over one hundred countries for prizes in philosophy, politics, economics, history, psychology, theology and law. Entry is free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.johnlockeinstitute.com/apply-now"
              className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4f8fff] to-[#7c5cfc] text-base font-medium text-white group"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://www.johnlockeinstitute.com/essay-competition"
              className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#c9a96e]/30 text-base font-medium text-[#c9a96e] hover:border-[#c9a96e]/60 group"
            >
              Be Ambitious
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
