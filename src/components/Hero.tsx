import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen lg:h-[115vh] relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}lovable-uploads/9ca7c56e-b50b-4fec-a89a-be7ddf646991.png)`,
        }}
      />

      {/* FRASE — centralizada verticalmente, na parte direita */}
      <div className="absolute inset-y-0 right-4 sm:right-6 lg:right-[10%] z-30 flex items-center">
        <p className="max-w-[32rem] text-center text-white text-xl sm:text-2xl font-bold leading-relaxed drop-shadow-lg">
          There is no elevator to success,<br />
          you have to take the stairs
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>

      {/* Detalhe arredondado */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[40px] z-20" />
    </section>
  );
};

export default Hero;
