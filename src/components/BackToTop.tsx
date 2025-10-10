'use client';
import { useSticky } from '@/hooks/useSticky';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const isSticky = useSticky();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isSticky && (
        <motion.button
          className="fixed bottom-[45px] right-[45px] z-[99] w-12 h-12 flex items-center justify-center rounded-full bg-[#F49918] text-white font-medium shadow-[0_4px_16px_rgba(234,231,228,0.18)] transition-all duration-300 hover:scale-110 hover:rotate-5 hover:shadow-[0_8px_32px_rgba(233,231,229,0.25)] hover:bg-[#e68a16]"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
