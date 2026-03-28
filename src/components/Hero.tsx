import { ArrowDown } from "lucide-react";

const Hero = () => {
  const inscricoesAbertas = false; {/* Quando estivermos em período de PS, mudar para "true". Quando não estivermos em período de PS, mudar para "false". OBS: Lembrem de atualizar link do forms e período do PS vigente */}

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
      <div className="absolute top-[140px] sm:top-1/2 right-4 sm:right-6 lg:right-[10%] z-30 flex items-start sm:items-center">
        <div className="flex flex-col items-center gap-6">
          <p className="max-w-[32rem] text-center text-white text-xl sm:text-2xl font-bold leading-relaxed drop-shadow-lg">
            There is no elevator to success,<br />
            you have to take the stairs
          </p>

          {inscricoesAbertas && (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPzPGg2Za7n26GFh6zO7vtU3sL3qOdMGkWd6KwnsGEePD1Fw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground font-bold text-sm sm:text-base rounded-md hover:bg-primary/90 transition-colors shadow-lg"
            >
              INSCREVA-SE PARA O PS 2026.1
            </a>
          )}
        </div>
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
