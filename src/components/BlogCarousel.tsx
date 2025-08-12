import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // PASSO 1: Removendo a barra "/" do início de cada caminho de imagem
  const blogPosts = [
    {
      id: 1,
      image: 'lovable-uploads/f39535ac-9200-4fc3-bcbf-deb0ae4e9953.png',
      title: 'Semana de Mercado Financeiro (SMF)',
      description: 'A Semana de Mercado Financeiro é o principal evento da LMF PUC-Rio, reunindo grandes nomes do setor para palestras presenciais nos auditórios da PUC-Rio. Na última edição, contamos com 12 encontros e o apoio de patrocinadores como Icatu Vanguarda, Opportunity, TRUXT, Vinci Compass, Sharp Capital e JGP. Já participaram nomes de destaque como Diogo Guillen, Florian Bartunek, Bruno Coutinho, Guilherme Aché, entre outros, oferecendo aos alunos uma imersão direta com líderes do mercado.'
    },
    {
      id: 2,
      image: 'lovable-uploads/3ec5a593-269c-4b9b-a1a8-5f9fbd7dfb2f.png',
      title: 'Visitas a casas do mercado financeiro',
      description: 'Como parte de nossa iniciativa de aproximação com o mercado financeiro, realizamos visitas às principais casas de investimento do país. Já estivemos na BB Asset, Vinci Compass, Polo Capital, SPX, JGP, Squadra, Turim e Leblon Equities, proporcionando aos nossos membros a oportunidade de conhecer de perto o funcionamento dessas instituições, interagir com profissionais da área e aprofundar seus conhecimentos sobre o setor.'
    },
    {
      id: 3,
      image: 'lovable-uploads/14719a58-7918-4855-a311-0bfd13f5b2bb.png',
      title: 'Aulas mensais para os associados',
      description: 'Nossas aulas mensais são uma iniciativa que promove a troca direta com o mercado. Recebemos profissionais de diferentes instituições na PUC-Rio para ministrar aulas sobre temas técnicos, desenvolvimento de soft skills ou debates sobre carreira. Já abordamos temas como M&A e PMI (com a Visagio), macroeconomia (RPS Capital), perspectivas econômicas (Vinci Compass) e crédito (BOCOM BBM), sempre conectando teoria à prática com quem vive o dia a dia do mercado.'
    },
    {
      id: 4,
      image: 'lovable-uploads/7290b8e9-2620-4710-907b-2b57b5bbdfdc.png',
      title: 'Imersão em São Paulo',
      description: 'Realizamos anualmente uma imersão em São Paulo com o objetivo de fortalecer os laços com importantes instituições do mercado financeiro. Durante a viagem, nossos membros têm a oportunidade de visitar e interagir com grandes players do setor, como BTG Pactual, Santander, Bradesco Asset, Itaú Equity Research, Legacy Capital e LAD Capital, ampliando sua visão sobre o mercado e construindo conexões relevantes para o futuro profissional.'
    },
    {
      id: 5,
      image: 'lovable-uploads/debb0119-17dc-4682-9d5a-f29453fc9310.png',
      title: 'Curso de capacitação',
      description: 'O Curso de Capacitação é uma etapa fundamental do processo de formação dos nossos trainees. Com mais de 40 horas de aulas ao longo do período, o curso de capacitação oferece uma base sólida em temas essenciais para o mercado financeiro, como Renda Variável, Renda Fixa, Matemática Financeira, Valuation, Fundos Quantitativos, Crédito, Análise Competitiva, entre outros.'
    },
    {
      id: 6,
      image: 'lovable-uploads/f0398e5b-656a-46bd-863f-5b79248100e8.png',
      title: 'LMF Cast',
      description: 'O LMF Cast é o podcast oficial da Liga de Mercado Financeiro da PUC-Rio e mais uma ponte entre universidade e mercado. Com convidados de destaque, como Gustavo Franco (ex-presidente do Banco Central) e Marcos Mollica (Opportunity), o programa compartilha trajetórias, visões de mercado e aprendizados valiosos diretamente com estudantes e entusiastas do setor.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const getVisiblePosts = () => {
    const posts = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentSlide + i) % blogPosts.length;
      posts.push(blogPosts[index]);
    }
    return posts;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">
              Principais Atividades
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {getVisiblePosts().map((post, index) => (
                <div key={`${post.id}-${index}`} className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Image */}
                  <div className="w-full h-[450px] overflow-hidden bg-gray-200">
                    {/* PASSO 2: Alterando o src da imagem */}
                    <img 
                      src={`${import.meta.env.BASE_URL}${post.image}`} 
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onLoad={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      style={{ opacity: '0', transition: 'opacity 0.3s ease-in-out' }}
                    />
                  </div>
                  
                  {/* Overlay with content - appears on hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-3">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-200 text-justify">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Title always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white font-semibold text-lg">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Centered below */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
