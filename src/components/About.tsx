import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Users, Award, Globe } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: BookOpen,
      title: 'Intellectual Excellence',
      description: 'University-level courses in philosophy, politics, economics, history, law, and related subjects designed to reflect the rigour of leading undergraduate programmes.'
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Students from over 130 countries connecting with inspiring professors drawn from leading universities around the world.'
    },
    {
      icon: Award,
      title: 'Competitive Admissions',
      description: 'We typically receive six applications for each available place. Candidates are selected following careful consideration of a written application and an online interview.'
    },
    {
      icon: Globe,
      title: 'Worldwide Reach',
      description: 'Programmes across Boston, Cambridge, Dubai, Georgetown, Hong Kong, Oxford, Princeton, Singapore, and Washington D.C.'
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#4f8fff] mb-4 block">
            02 — Discover
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#f5f0e8] mb-6">
            An exceptional opportunity to experience
            <br className="hidden sm:block" />
            <span className="text-gradient"> university life abroad</span>
          </h2>
          <p className="max-w-3xl mx-auto text-[#f5f0e8]/60 text-base sm:text-lg leading-relaxed">
            Our summer schools introduce students aged 12–19 to university-level courses in philosophy, politics, economics, history, law, and related subjects. They offer an exceptional opportunity to experience university life abroad and to connect with students who share your academic interests.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="category-card rounded-2xl p-8 lg:p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4f8fff]/20 to-[#7c5cfc]/20 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-[#4f8fff]" />
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-[#f5f0e8] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#f5f0e8]/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass-light rounded-3xl p-8 sm:p-12 lg:p-16">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#f5f0e8] mb-6">
              Skills, Habits & Character
            </h3>
            <p className="max-w-3xl mx-auto text-[#f5f0e8]/60 leading-relaxed mb-8">
              Our courses are not chiefly concerned with communicating facts; instead we seek to nurture intellectual skills and help our students cultivate habits of mind to make you a better philosopher, political scientist, economist, legal scholar, or historian, and a better thinker, writer, and speaker.
            </p>
            <p className="max-w-3xl mx-auto text-[#f5f0e8]/50 leading-relaxed">
              After attending one of our John Locke Institute courses we expect that you will be a more subtle and sophisticated thinker, more flexible and open-minded, and — in what might appear to be paradoxical (but isn't) — we hope you will acquire not only more intellectual confidence but also more intellectual humility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
