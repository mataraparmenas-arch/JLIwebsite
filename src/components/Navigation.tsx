import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Essay Prize', href: '#essay-prize' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Global Reach', href: '#global-reach' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#c9a96e]/30 flex items-center justify-center group-hover:border-[#c9a96e]/60 transition-colors duration-300">
              <span className="font-serif text-lg font-semibold text-[#c9a96e]">JL</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-lg font-medium tracking-wide text-[#f5f0e8]">
                John Locke Institute
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline text-sm font-medium text-[#f5f0e8]/70 hover:text-[#f5f0e8] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.johnlockeinstitute.com/apply-now"
              className="btn-magnetic inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4f8fff] to-[#7c5cfc] text-sm font-medium text-white"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-[#f5f0e8]"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="font-serif text-3xl font-medium text-[#f5f0e8]/90 hover:text-[#4f8fff] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://www.johnlockeinstitute.com/apply-now"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#4f8fff] to-[#7c5cfc] text-lg font-medium text-white"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
