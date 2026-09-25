import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';

const categories = [
  {
    name: 'Economics',
    icon: '📊',
    color: '#4f8fff',
    questions: [
      'Should we fear a cashless society?',
      'Technology now allows personalised pricing. If this came to be widely used, what effects should we expect?',
      'Did Jeff Bezos get rich at the expense of his customers, his employees, neither or both?'
    ]
  },
  {
    name: 'History',
    icon: '📜',
    color: '#c9a96e',
    questions: [
      '\'The arc of the moral universe is long, but it bends toward justice.\' Is it? Does it?',
      'What might the world look like if the Library of Alexandria hadn\'t burned down?',
      'Does Che deserve his iconic T-shirt?'
    ]
  },
  {
    name: 'International Relations',
    icon: '🌐',
    color: '#00d4ff',
    questions: [
      'Does foreign aid help or hurt poor people?',
      'Is the US economy harmed by cheap imports from China?',
      'Should a coalition of countries (or of billionaires) run an experiment with a libertarian microstate?'
    ]
  },
  {
    name: 'Law',
    icon: '⚖️',
    color: '#7c5cfc',
    questions: [
      'If legislators and judges all accepted the philosophical theory of determinism, what would be the effect on criminal sentencing?',
      'To what extent should criminal sentencing take into account the effect on the perpetrator\'s family?',
      'Is trial by jury obsolete?'
    ]
  },
  {
    name: 'Philosophy',
    icon: '🏛️',
    color: '#e8d5a3',
    questions: [
      'Is it ever wrong to do the right thing for the wrong reasons?',
      'What consolations does philosophy offer?',
      'Why is incest wrong?'
    ]
  },
  {
    name: 'Politics',
    icon: '🗳️',
    color: '#f43f5e',
    questions: [
      'Is the right to self-determination absolute?',
      'Did the pandemic normalise authoritarianism?',
      'Is democracy in crisis?'
    ]
  },
  {
    name: 'Psychology',
    icon: '🧠',
    color: '#10b981',
    questions: [
      'Why do we care what happens to our body after death?',
      'Is mental illness over-diagnosed now, or just better recognised?',
      'Surveys show a widening gender ideological gap in recent years. Why?'
    ]
  },
  {
    name: 'Public Policy',
    icon: '📋',
    color: '#4f8fff',
    questions: [
      'What discount rate should be applied to long-run environmental policies? Why?',
      'Which unintended consequence was most devastating and why did we fail to predict it?',
      'Should vaccination be mandatory in a public health emergency?'
    ]
  },
  {
    name: 'Science & Technology',
    icon: '🔬',
    color: '#00d4ff',
    questions: [
      'Is free speech the enemy of science?',
      'Is space exploration a necessity or an indulgence?',
      'Should we be polite to ChatGPT?'
    ]
  },
  {
    name: 'Theology',
    icon: '✝️',
    color: '#c9a96e',
    questions: [
      'Is religious experience better explained by neuroscience or by theology?',
      'Research shows a strong inverse correlation between religiosity and per-capita spending on education. Does one cause the other?',
      'If you achieve enlightenment, how will you know?'
    ]
  }
];

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#00d4ff] mb-4 block">
            Subject Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#f5f0e8] mb-6">
            Ten Categories. <span className="text-gradient">Infinite Questions.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#f5f0e8]/60 text-base sm:text-lg">
            The judges will select the 1st, 2nd, and 3rd prizewinners from each of the ten subject categories, and then select the winner of the Grand Prize for the best entry in any subject.
          </p>
        </motion.div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="relative"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                className="w-full category-card rounded-2xl p-6 text-left group"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-serif text-lg font-medium text-[#f5f0e8] mb-1 group-hover:text-white transition-colors">
                  {category.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-[#f5f0e8]/40">
                  <span>{category.questions.length} questions</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${expandedCategory === category.name ? 'rotate-180' : ''}`} />
                </div>
                
                {/* Glow border on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 30px ${category.color}15, 0 0 20px ${category.color}10` }}
                />
              </button>

              {/* Expanded questions */}
              <AnimatePresence>
                {expandedCategory === category.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 overflow-hidden"
                  >
                    <div className="glass-light rounded-xl p-4 space-y-3">
                      {category.questions.map((q, qi) => (
                        <div key={qi} className="flex gap-2">
                          <span className="font-mono text-xs font-bold mt-0.5" style={{ color: category.color }}>
                            Q{qi + 1}.
                          </span>
                          <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">{q}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Junior note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#f5f0e8]/50 max-w-2xl mx-auto">
            Junior contestants may answer any question from any category, and will be judged separately, against their age peers, within each category. Entry is free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
