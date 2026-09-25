import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const locations = [
  {
    name: 'Oxford',
    country: 'United Kingdom',
    description: 'Home of John Locke and a collegiate tradition that has shaped philosophy, politics, and reasoned inquiry for centuries.',
    image: 'https://images.unsplash.com/photo-1519120944692-1a548bd70574?w=800&q=80',
    href: 'https://www.johnlockeinstitute.com/courses-oxford',
    color: '#4f8fff'
  },
  {
    name: 'Cambridge',
    country: 'United Kingdom',
    description: 'Home of the University of Cambridge, second-oldest university in the English-speaking world.',
    image: 'https://images.unsplash.com/photo-1536152470836-b943b246224c?w=800&q=80',
    href: 'https://www.johnlockeinstitute.com/courses-cambridge-applied-mathematics',
    color: '#7c5cfc'
  },
  {
    name: 'Princeton',
    country: 'United States',
    description: 'A deliberately small university town associated with seriousness of thought and theoretical depth.',
    image: 'https://images.unsplash.com/photo-1564981797811-7876215bd797?w=800&q=80',
    href: 'https://www.johnlockeinstitute.com/courses-princeton',
    color: '#00d4ff'
  },
  {
    name: 'Boston',
    country: 'United States',
    description: 'Home of two of the world\'s greatest universities, Harvard and M.I.T.',
    image: 'https://images.unsplash.com/photo-1501979376754-1d1971c61466?w=800&q=80',
    href: 'https://www.johnlockeinstitute.com/courses-boston-psychology-and-neuroscience',
    color: '#10b981'
  },
  {
    name: 'Georgetown',
    country: 'United States',
    description: 'A historic seat of law, diplomacy, and political philosophy at the edge of American government.',
    image: 'https://images.unsplash.com/photo-1580058486448-6e820f0a5e0c?w=800&q=80',
    href: 'https://www.johnlockeinstitute.com/courses-georgetown-politics-and-international-relations',
    color: '#c9a96e'
  },
  {
    name: 'Singapore',
    country: 'Singapore',
    description: 'A rule-of-law city-state combining intellectual ambition, administrative competence, and global outlook.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
    href: 'https://www.johnlockeinstitute.com/courses-singapore',
    color: '#f43f5e'
  },
  {
    name: 'Hong Kong',
    country: 'China',
    description: 'A city shaped by common law, free exchange, and a long tradition of intellectual and commercial openness.',
    image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80',
    href: 'https://www.johnlockeinstitute.com/courses-hong-kong-philosophy-and-intellectual-history',
    color: '#4f8fff'
  },
  {
    name: 'Dubai',
    country: 'UAE',
    description: 'A modern commercial republic of ideas linking continents, prized for stability, openness, and global exchange.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    href: 'https://www.johnlockeinstitute.com/courses-dubai-economics-and-finance',
    color: '#c9a96e'
  },
  {
    name: 'Washington D.C.',
    country: 'United States',
    description: 'The institutional centre of American constitutional government and public policy.',
    image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&q=80',
    href: 'https://www.johnlockeinstitute.com/gap-year-washington-dc',
    color: '#7c5cfc'
  }
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="courses" className="relative py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#c9a96e] mb-4 block">
            03 — Explore
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#f5f0e8] mb-6">
            2026 Courses
          </h2>
          <p className="max-w-2xl mx-auto text-[#f5f0e8]/60 text-base sm:text-lg">
            A community of inspiring professors and ambitious students, challenging each other to think differently about history, philosophy, politics, economics and law.
          </p>
        </motion.div>

        {/* Location grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, i) => (
            <motion.a
              key={location.name}
              href={location.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] card-hover"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${location.color}40, transparent)` }}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#f5f0e8]/60" />
                  <span className="text-xs font-medium text-[#f5f0e8]/60 uppercase tracking-wider">
                    {location.country}
                  </span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#f5f0e8] mb-2 group-hover:text-white transition-colors">
                  {location.name}
                </h3>
                <p className="text-sm text-[#f5f0e8]/50 leading-relaxed line-clamp-2 mb-4 group-hover:text-[#f5f0e8]/70 transition-colors">
                  {location.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-[#4f8fff] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Explore Programme
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Border glow on hover */}
              <div 
                className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors duration-300"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.johnlockeinstitute.com/apply-now"
            className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4f8fff] to-[#7c5cfc] text-base font-medium text-white group"
          >
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
