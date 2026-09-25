import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/d58b5aac-1f30-4b08-b8ea-99656fcbb82f/_result.png" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
      </div>
      
      {/* Background layers */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4f8fff]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7c5cfc]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/[0.03] rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
        >
          <span className="status-dot bg-[#10b981]" />
          <span className="text-xs font-medium text-[#f5f0e8]/70 tracking-wider uppercase font-mono">
            2026 Programmes Now Open
          </span>
          <span className="w-px h-3 bg-[#f5f0e8]/20" />
          <span className="text-xs text-[#f5f0e8]/50 font-mono">
            Essay Prize Active
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-8"
        >
          <span className="block text-[#f5f0e8]">Nurturing the</span>
          <span className="block mt-2">
            <span className="text-gradient">intellectual humility</span>
          </span>
          <span className="block mt-2 text-[#f5f0e8]">and the courage to</span>
          <span className="block mt-2 text-gradient-gold italic">think differently.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#f5f0e8]/60 leading-relaxed mb-12"
        >
          A growing community of professors, students and alumni, encouraging each other to listen generously, think critically, and argue persuasively.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.johnlockeinstitute.com/about"
            className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4f8fff] to-[#7c5cfc] text-base font-medium text-white group"
          >
            Think Differently
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="https://www.johnlockeinstitute.com/essay-competition"
            className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#f5f0e8]/20 text-base font-medium text-[#f5f0e8] hover:border-[#c9a96e]/40 group"
          >
            Essay Prize 2026
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          <div className="text-center">
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[#f5f0e8]">150+</div>
            <div className="text-xs text-[#f5f0e8]/40 uppercase tracking-wider mt-1">Countries</div>
          </div>
          <div className="w-px h-8 bg-[#f5f0e8]/10" />
          <div className="text-center">
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[#f5f0e8]">9</div>
            <div className="text-xs text-[#f5f0e8]/40 uppercase tracking-wider mt-1">Locations</div>
          </div>
          <div className="w-px h-8 bg-[#f5f0e8]/10" />
          <div className="text-center">
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[#f5f0e8]">10</div>
            <div className="text-xs text-[#f5f0e8]/40 uppercase tracking-wider mt-1">Categories</div>
          </div>
          <div className="w-px h-8 bg-[#f5f0e8]/10" />
          <div className="text-center">
            <div className="font-mono text-2xl sm:text-3xl font-bold text-gradient-gold">$10K</div>
            <div className="text-xs text-[#f5f0e8]/40 uppercase tracking-wider mt-1">Grand Prize</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#f5f0e8]/30">Scroll</span>
          <ChevronDown className="w-5 h-5 text-[#f5f0e8]/30" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
