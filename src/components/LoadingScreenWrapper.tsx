'use client';

import { useState } from 'react';
import LoadingScreen from './LoadingScreen';

interface LoadingScreenWrapperProps {
  children: React.ReactNode;
}

const LoadingScreenWrapper: React.FC<LoadingScreenWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      {children}
    </>
  );
};

export default LoadingScreenWrapper;