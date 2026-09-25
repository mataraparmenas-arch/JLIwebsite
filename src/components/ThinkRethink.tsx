import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const words = ['THINK', 'QUESTION', 'LISTEN', 'REASON', 'ARGUE', 'RETHINK'];

export default function ThinkRethink() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const index = Math.min(Math.floor(v * words.length), words.length - 1);
      setActiveWord(Math.max(0, index));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Large background word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          key={words[activeWord]}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.03, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[20vw] sm:text-[15vw] lg:text-[12vw] font-bold leading-none tracking-tighter text-[#f5f0e8] select-none"
        >
          {words[activeWord]}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Word sequence */}
        <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
            >
              <span className="text-xs font-mono tracking-wider uppercase text-[#f5f0e8]/50">
                The Intellectual Journey
              </span>
            </motion.div>

            {/* Active word display */}
            <div className="relative h-24 sm:h-32 lg:h-40 flex items-center justify-center overflow-hidden">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  animate={{
                    opacity: i === activeWord ? 1 : 0,
                    y: i === activeWord ? 0 : 30,
                    scale: i === activeWord ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`absolute font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight ${
                    i === 0 ? 'text-[#f5f0e8]' :
                    i === words.length - 1 ? 'text-gradient-gold' :
                    'text-gradient'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Progress dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {words.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeWord 
                      ? 'bg-[#4f8fff] w-6' 
                      : i < activeWord 
                        ? 'bg-[#4f8fff]/40' 
                        : 'bg-[#f5f0e8]/10'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#f5f0e8] mb-6">
            Think. Rethink.
          </h2>
          <p className="text-[#f5f0e8]/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            We bring together the very best students from all over the world and invite inspiring professors to challenge them to listen generously, to think critically, and to develop and deliver robust responses with clarity, precision and persuasive force.
          </p>

          {/* Testimonial */}
          <div className="glass-light rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto">
            <div className="text-3xl text-[#c9a96e]/30 font-serif mb-4">"</div>
            <p className="font-serif text-lg sm:text-xl italic text-[#f5f0e8]/80 mb-6 leading-relaxed">
              I was able to truly contest some of the long-standing 'givens' I had been living my life just simply believing. This has developed in me a deep intellectual curiosity.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4f8fff]/30 to-[#7c5cfc]/30 flex items-center justify-center">
                <span className="text-xs font-medium text-[#f5f0e8]">SA</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-[#c9a96e]">Saahithya Aroori</p>
                <p className="text-xs text-[#f5f0e8]/40">2020</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
