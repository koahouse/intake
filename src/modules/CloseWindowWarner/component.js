import { useEffect } from 'react';

export const Component = ({ step }) => {
  const handleUnload = (event) => {
    if ([0, 5].includes(step)) return;

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
