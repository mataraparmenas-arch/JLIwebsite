import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  'Programmes': [
    { label: 'Oxford Courses', href: 'https://www.johnlockeinstitute.com/courses-oxford' },
    { label: 'Cambridge', href: 'https://www.johnlockeinstitute.com/courses-cambridge-applied-mathematics' },
    { label: 'Princeton', href: 'https://www.johnlockeinstitute.com/courses-princeton' },
    { label: 'Boston', href: 'https://www.johnlockeinstitute.com/courses-boston-psychology-and-neuroscience' },
    { label: 'Georgetown', href: 'https://www.johnlockeinstitute.com/courses-georgetown-politics-and-international-relations' },
    { label: 'Singapore', href: 'https://www.johnlockeinstitute.com/courses-singapore' },
    { label: 'Hong Kong', href: 'https://www.johnlockeinstitute.com/courses-hong-kong-philosophy-and-intellectual-history' },
    { label: 'Dubai', href: 'https://www.johnlockeinstitute.com/courses-dubai-economics-and-finance' },
    { label: 'Washington D.C.', href: 'https://www.johnlockeinstitute.com/gap-year-washington-dc' },
  ],
  'Competition': [
    { label: 'Essay Prize 2026', href: 'https://www.johnlockeinstitute.com/essay-competition' },
    { label: 'Questions', href: 'https://www.johnlockeinstitute.com/essay-competition' },
    { label: 'Entry Requirements', href: 'https://www.johnlockeinstitute.com/essay-competition' },
    { label: 'Key Dates', href: 'https://www.johnlockeinstitute.com/essay-competition' },
    { label: 'Prize Winners', href: 'https://www.johnlockeinstitute.com/prize-winners' },
    { label: 'Essay Portal', href: 'https://essaycompetition.johnlocke.com/' },
  ],
  'Institute': [
    { label: 'About Us', href: 'https://www.johnlockeinstitute.com/about' },
    { label: 'Our Faculty', href: 'https://www.johnlockeinstitute.com/our-faculty' },
    { label: 'Our Students', href: 'https://www.johnlockeinstitute.com/our-students' },
    { label: 'Admissions', href: 'https://www.johnlockeinstitute.com/admissions' },
    { label: 'Apply Now', href: 'https://www.johnlockeinstitute.com/apply-now' },
    { label: 'Watch Our Video', href: 'https://www.johnlockeinstitute.com/watch-our-video' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#f5f0e8]/5">
      {/* Large institutional statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#f5f0e8] mb-6">
            THE FUTURE OF
            <br />
            <span className="text-gradient-gold">INTELLECTUAL EDUCATION</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#f5f0e8]/50 text-base sm:text-lg">
            Nurturing the intellectual humility and the courage to think differently.
          </p>
        </motion.div>

        {/* Footer links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Contact column */}
          <div>
            <h3 className="font-serif text-lg font-medium text-[#f5f0e8] mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:admissions@johnlocke.com" className="flex items-center gap-2 text-sm text-[#f5f0e8]/50 hover:text-[#4f8fff] transition-colors">
                <Mail className="w-4 h-4" />
                admissions@johnlocke.com
              </a>
              <div className="flex items-center gap-2 text-sm text-[#f5f0e8]/50">
                <Phone className="w-4 h-4" />
                <span>Oxford: +44 (0)1865 566166</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#f5f0e8]/50">
                <Phone className="w-4 h-4" />
                <span>Princeton: +1 (609) 608-0543</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-serif text-lg font-medium text-[#f5f0e8] mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#f5f0e8]/50 hover:text-[#4f8fff] transition-colors link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#f5f0e8]/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#c9a96e]/30 flex items-center justify-center">
              <span className="font-serif text-sm font-semibold text-[#c9a96e]">JL</span>
            </div>
            <span className="text-sm text-[#f5f0e8]/40">
              © {new Date().getFullYear()} John Locke Institute. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.johnlockeinstitute.com/apply-now" className="btn-magnetic inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#4f8fff] to-[#7c5cfc] text-sm font-medium text-white">
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
