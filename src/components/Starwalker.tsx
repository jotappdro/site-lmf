

import { useEffect } from 'react';


interface StarwalkerProps {
  isActive: boolean;
  onComplete: () => void;
}

const Starwalker = ({ isActive, onComplete }: StarwalkerProps) => {
  
  if (!isActive) {
    return null;
  }

  
  useEffect(() => {
    
    const audio = new Audio(`${import.meta.env.BASE_URL}starwalker-sound.mp3`);
    audio.play().catch(error => {
      
      console.log("Autoplay do áudio foi bloqueado pelo navegador:", error);
    });

    
    const timer = setTimeout(() => {
      onComplete(); 
    }, 5000); // 

    
    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);


  return (
    
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999, 
    }}>
      <img 
        src={`${import.meta.env.BASE_URL}starwalker.gif`} 
        alt="The original Starwalker" 
      />
    </div>
  );
};

export default Starwalker;