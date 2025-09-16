'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/data/services-data';

interface FaqAccordionProps {
  section: Section;
}

const FaqAccordion = ({ section }: FaqAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="col-lg-12">
      <h2 className="text-center mb-4">{section.title}</h2>
      <div className="accordion" id="faqAccordion">
        {section.questions?.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
              </button>
            </h2>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="accordion-body">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
