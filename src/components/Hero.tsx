import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* TEXTO PRINCIPAL — Palestra */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full px-6 flex flex-col items-center justify-center gap-6">
        <h1 className="max-w-4xl text-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed drop-shadow-2xl">
          Lições e História do Fundador do Garantia e Pactual com Luiz Cesar Fernandes
        </h1>
        <Button 
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-xl"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScvdrAb3kqtIQMw7rwHKfIBTYeTZphYvlt_DxZhXZj6-Wv4QQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscreva-se!
          </a>
        </Button>
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
