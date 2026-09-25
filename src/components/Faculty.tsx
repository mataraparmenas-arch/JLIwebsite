import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const faculty = [
  {
    name: 'Prof. Terence Kealey',
    title: 'Chairman of Examiners',
    affiliation: 'D. Phil. (Oxon)',
    description: 'Leading the panel of senior academics drawn from Oxford, Cambridge, Harvard, Princeton, and Stanford.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    name: 'Faculty of Philosophy',
    title: 'Philosophy & Ethics',
    affiliation: 'Oxford & Cambridge',
    description: 'Distinguished philosophers guiding students through fundamental questions of human existence.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80'
  },
  {
    name: 'Faculty of Politics',
    title: 'Political Science & IR',
    affiliation: 'Harvard & Princeton',
    description: 'Political scientists and international relations experts from leading global universities.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
  },
  {
    name: 'Faculty of Economics',
    title: 'Economics & Finance',
    affiliation: 'Stanford & LSE',
    description: 'Economists bringing real-world insight to the study of markets, policy, and human behaviour.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  },
  {
    name: 'Faculty of Law',
    title: 'Legal Theory & Practice',
    affiliation: 'Oxford & Georgetown',
    description: 'Legal scholars exploring justice, jurisprudence, and the foundations of legal systems.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
  },
  {
    name: 'Faculty of History',
    title: 'Historical Analysis',
    affiliation: 'Cambridge & Yale',
    description: 'Historians teaching students to interrogate the past and understand the forces that shape our world.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'
  }
];

export default function Faculty() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faculty" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#c9a96e] mb-4 block">
            05 — Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#f5f0e8] mb-6">
            Faculty <span className="text-gradient-gold">& Guests</span>
          </h2>
          <p className="max-w-3xl mx-auto text-[#f5f0e8]/60 text-base sm:text-lg leading-relaxed">
            The John Locke Institute is proud of our inspiring faculty, drawn from leading universities around the world, who return to the Institute year after year. In addition to our regular faculty we are privileged to introduce to our students some very special guests.
          </p>
        </motion.div>

        {/* Faculty grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group category-card rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-[#f5f0e8] mb-1 group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-[#c9a96e] font-medium mb-1">{member.title}</p>
                <p className="text-xs text-[#f5f0e8]/40 font-mono mb-3">{member.affiliation}</p>
                <p className="text-sm text-[#f5f0e8]/50 leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.johnlockeinstitute.com/our-faculty"
            className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#c9a96e]/30 text-base font-medium text-[#c9a96e] hover:border-[#c9a96e]/60 group"
          >
            Meet Our Faculty
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
