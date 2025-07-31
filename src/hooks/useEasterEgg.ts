
// meu easter egg de dev rsrsrs
import { useState, useEffect } from 'react';

export const useEasterEgg = (targetSequence: string) => {
  const [keySequence, setKeySequence] = useState<string>('');
  const [activated, setActivated] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      
      const newSequence = keySequence + event.key.toLowerCase();
      setKeySequence(newSequence);

      
      if (newSequence.endsWith(targetSequence.toLowerCase())) {
        setActivated(true); 
        
        
        setKeySequence(''); 
      }
    };

    
    window.addEventListener('keydown', handleKeyDown);

    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keySequence, targetSequence]);
  
  
  const deactivate = () => setActivated(false);

  return { activated, deactivate };
};