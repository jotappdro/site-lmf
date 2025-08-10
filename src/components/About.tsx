import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Calcular anos desde a fundação (15/09/2015)
  const calculateYearsSinceFoundation = () => {
    const foundationDate = new Date('2015-09-15');
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - foundationDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
  };

  const carouselSlides = [
    {
      id: 'about',
      title: 'NOSSA MISSÃO',
      rightContent: {
        type: 'text',
        content:
          'Imergir totalmente o aluno da PUC-Rio no Mercado Financeiro para que alcance seu máximo potencial, suplementando o ensino fora da sala de aula e preparando-o para o mercado de trabalho.'
      }
    },
    {
      id: 'vision',
      title: 'NOSSA VISÃO',
      rightContent: {
        type: 'text',
        content:
          'Tornar-se uma Organização Estudantil sólida e respeitada no ambiente universitário nacional, e também no mercado de trabalho.'
      }
    },
    {
      id: 'values',
      title: 'NOSSOS VALORES',
      rightContent: {
        type: 'values',
        values: ['Autonomia', 'Excelência', 'Igualdade', 'Meritocracia']
      }
    }
  ];

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const useCountAnimation = (endValue: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * endValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, endValue, duration]);

    return count;
  };

  const animatedYears = useCountAnimation(calculateYearsSinceFoundation(), 1500);
  const animatedAlumni = useCountAnimation(200, 1700);
  const animatedCompanies = useCountAnimation(100, 1900);

  const currentSlideData = carouselSlides[currentSlide];

  return (
    <section id="about" className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Seção Sobre */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-20 text-center lg:text-left">
            {/* Logo da LMF */}
            <div className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/f8313e8f-efbf-4ebe-bfcc-36121516eaf8.png`}
                alt="LMF PUC-Rio Logo"
                className="w-80 lg:w-96 h-auto"
              />
            </div>

            {/* Texto sobre */}
            <div className="flex-1">
              <h3 className="text-xl font-normal text-primary mb-4 tracking-wide">
                A LMF PUC-RIO
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">
                Fundada em 2015, a Liga de Mercado Financeiro PUC-Rio tem como propósito atuar como uma ponte entre o meio acadêmico e o mercado financeiro, aproximando os estudantes da vivência prática dessa carreira. Desde então, temos consolidado uma sólida relação com o mercado, evidenciada por visitas a instituições financeiras, participação em competições e organização de eventos com renomados profissionais da área.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Por meio dessas experiências, buscamos preparar nossos associados para{' '}
                <span className="font-bold text-primary">identificar suas áreas de interesse</span> e{' '}
                <span className="font-bold text-primary">conquistar as melhores oportunidades no mercado</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div ref={sectionRef} className="mb-0 relative">
        <div className="relative w-full overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[700px] md:min-h-[600px] transition-all duration-500 ease-in-out">
            {/* Imagem de fundo */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}lovable-uploads/d4bc2e8f-7a42-46b3-b71e-0fa3a29e1841.png)`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/90 to-black" />

            {/* Coluna Esquerda */}
            <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-center min-h-[250px] md:min-h-[400px]">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-white mb-2">
                    Há {animatedYears} anos
                  </div>
                  <p className="text-gray-300 text-sm uppercase tracking-wide">
                    construindo parcerias com o mercado financeiro
                  </p>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-white mb-2">
                    +{animatedAlumni}
                  </div>
                  <p className="text-gray-300 text-sm uppercase tracking-wide">
                    ex-associados formam nossa Rede Alumni
                  </p>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-white mb-2">
                    +{animatedCompanies}
                  </div>
                  <p className="text-gray-300 text-sm uppercase tracking-wide">
                    gestoras e bancos contam com a representatividade da LMF PUC-Rio
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Direita */}
            <div
              className={`relative z-10 p-8 lg:p-12 lg:pr-20 flex flex-col justify-center min-h-[350px] md:min-h-[400px] transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? 'opacity-0 transform -translate-x-4'
                  : 'opacity-100 transform translate-x-0'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {currentSlideData.title}
              </h3>

              {currentSlideData.rightContent.type === 'text' && (
                <p className="text-white text-lg leading-relaxed text-justify">
                  {currentSlideData.rightContent.content}
                </p>
              )}

              {currentSlideData.rightContent.type === 'values' &&
                Array.isArray(currentSlideData.rightContent.values) && (
                  <div className="flex flex-col items-center space-y-4">
                    {currentSlideData.rightContent.values.map((value, index) => (
                      <div key={index} className="text-white text-lg font-medium text-center">
                        {value}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {carouselSlides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
