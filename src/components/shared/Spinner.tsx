'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="spinner"
          className="bg-white fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <Image src="/img/favicon.png" alt="Logo" width={150} height={150} priority />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Spinner;
