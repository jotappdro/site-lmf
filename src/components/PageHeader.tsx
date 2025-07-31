const PageHeader = ({ 
  title, 
  subtitle 
}: { 
  title: string; 
  subtitle: string; 
}) => {
  return (
    <section className="relative h-[420px] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // CAMINHO DA IMAGEM CORRIGIDO
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}lovable-uploads/9ca7c56e-b50b-4fec-a89a-be7ddf646991.png)`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-white/90 text-xl max-w-3xl drop-shadow">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-12" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 Q600,120 1200,60 L1200,120 L0,120 Z" 
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHeader;