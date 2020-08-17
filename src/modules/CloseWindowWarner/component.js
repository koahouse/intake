import { useEffect } from 'react';

export const Component = ({ step }) => {
  const handleUnload = (event) => {
    if (step === 0) return;

    event.preventDefault();
    event.returnValue = 'something';
    return 'something';
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);

    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);

  return null;
};

Component.displayName = 'CloseWindowWarner';
