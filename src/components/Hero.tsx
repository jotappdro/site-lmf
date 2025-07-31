import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    // Altura ajustada para mobile e desktop
    <section id="home" className="h-screen lg:h-[115vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Image - Nenhuma mudança necessária aqui */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}lovable-uploads/9ca7c56e-b50b-4fec-a89a-be7ddf646991.png)`
        }}
      ></div>
      
      {/* Content */}
      {/* Layout ajustado para ser centralizado no mobile e à direita no desktop */}
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center lg:justify-end h-full">
        {/* Frase Motivacional */}
        <div className="flex-1 flex justify-center lg:justify-end lg:pr-16">
          {/* Alinhamento de texto e padding ajustados */}
          <div className="max-w-md text-center lg:text-right">
            {/* Tamanho da fonte ajustado */}
            <p className="text-white text-xl lg:text-2xl font-medium leading-relaxed drop-shadow-lg">
              "There is no elevator to success, you have to take the stairs"
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Nenhuma mudança necessária aqui */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
      
      {/* Detalhe arredondado - Nenhuma mudança necessária aqui */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[40px] z-20"></div>
    </section>
  );
};

export default Hero;