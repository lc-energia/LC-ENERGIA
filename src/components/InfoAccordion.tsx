'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  title: string;
  content: string;
}

interface InfoAccordionProps {
  items: AccordionItem[];
}

const InfoAccordion = ({ items }: InfoAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="col-lg-12">
      <div className="accordion" id="infoAccordion">
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                type="button"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
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
                  <div className="accordion-body">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoAccordion;
