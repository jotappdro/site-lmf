import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    
    // Fallback (sem API key)
    iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.117775167487!2d-43.229934!3d-22.9792386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11c63c0b0c7043!2sRua%20Marqu%C3%AAs%20de%20S%C3%A3o%20Vicente%2C%20225%20-%20G%C3%A1vea%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1000000000000!5m2!1spt-BR!2sbr`;

    mapRef.current.appendChild(iframe);

    return () => {
      if (mapRef.current && iframe.parentNode) {
        mapRef.current.removeChild(iframe);
      }
    };
  }, []);

  return (
    <div className="relative w-full pb-[85%] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default Map;
