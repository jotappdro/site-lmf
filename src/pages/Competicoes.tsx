import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const Competicoes = () => {
  // Removi a / do início de cada caminho de imagem pra ver se funfa assim
  const competicoes = [
    {
      nome: "Prêmio Turim 2024",
      tipo: "1º Lugar",
      descricao: "Os associados João Pedro de Souza e Maria Paula Abbade conquistaram o primeiro lugar da 7ª edição do Prêmio Turim, desenvolvendo um case baseado na seleção de investimento com base na análise de crédito da Rede D'Or.",
      resultado: "1º Lugar",
      imagem: "lovable-uploads/cdaf841b-d3e0-4b31-83a9-5442bff3e299.png",
      imagePosition: "object-[center_15%]"
    },
    {
      nome: "Constellation Challenge 2024",
      tipo: "Semifinalistas",
      descricao: "Os associados Gabriel Drubi, Julia Pareto, Pedro Bevilaqua foram selecionados entre os 20 semifinalistas do Constellation Challenge, dentre mais de 370 grupos participantes, com uma análise fundamentalista sobre a Mercado Livre.",
      resultado: "Semifinalistas",
      imagem: "lovable-uploads/1c775231-af51-4589-aacd-8d84d041e754.png",
      imagePosition: "object-top"
    },
    {
      nome: "Prêmio Turim 2023",
      tipo: "3º Lugar",
      descricao: "Os associados Antonio Couto e Breno Franca garantiram o 3º lugar da competição ao analisar o impacto da inteligência artificial sobre a Adobe.",
      resultado: "3º Lugar",
      imagem: "lovable-uploads/84167929-90c4-40cd-a88f-53afc7fb83a2.png",
      imagePosition: "object-[center_20%]"
    },
    {
      nome: "Constellation Challenge 2023",
      tipo: "Semifinalistas",
      descricao: "Os associados Giullia Borilo, João Pedro Veiga e Manuela Baggio foram selecionados entre os 20 semifinalistas do desafio dentre mais de 400 equipes participantes, desenvolvendo uma análise fundamentalista da Arezzo&Co.",
      resultado: "Semifinalistas",
      imagem: "lovable-uploads/a04d0fd4-80cc-4002-b814-6ceed75f1415.png",
      imagePosition: "object-center"
    },
    {
      nome: "Desafio JGP 2022",
      tipo: "2º Lugar",
      descricao: "O Fundo formado por Carolina Blank, Eduardo Berardo, Juliana Soska, Pedro Acioli, Rafael Werneck, Rodrigo Tavares obteve a segunda colocação geral do desafio, levando em consideração rendimento, risco e apresentação para sócios da JGP.",
      resultado: "2º Lugar",
      imagem: "lovable-uploads/8dd49eea-9a73-443c-83b8-6632e22961a2.png",
      imagePosition: "object-center"
    },
    {
      nome: "Constellation Challenge 2020",
      tipo: "Semifinalistas",
      descricao: "Os associados Isadora Valle, Luiz Leonardos e Ragnar Chaves foram selecionados entre os 20 semifinalistas do desafio dentre mais de 350 equipes participantes, desenvolvendo uma análise fundamentalista da Stone.",
      resultado: "Semifinalistas",
      imagem: "lovable-uploads/c6f05bfe-3902-4f5d-91fc-1bda4f1b69da.png",
      imagePosition: "object-top"
    },
    {
      nome: "BTG Experience 2017",
      tipo: "1º Lugar",
      descricao: "Os associados Davi Gusmão, João Pedro Aquino, Luisa Brandão e Vitor Schmidt garantiram o primeiro lugar do BTG Experience 2017, dentre mais de 400 participantes.",
      resultado: "1º Lugar",
      imagem: "lovable-uploads/9a9df485-8232-49c3-9dd7-41952ba85361.png",
      imagePosition: "object-center"
    },
    {
      nome: "Desafio JGP 2017",
      tipo: "1º Lugar",
      descricao: "O Fundo PUC, formado pelos membros Frederico Coelho, Ingo Seclkmenn, João Paulo Carvalho, João Rafael Santillo, Lucas Molter, Luiz Felipe Bolonhez, Maria Beatriz Pedrosa, Matheus Liberato, Pedro Bustamante e Rodrigo Rocha, obteve o melhor resultado geral da competição, levando em conta o rendimento durante o período do Desafio, métricas de risco e apresentação final para sócios da JGP.",
      resultado: "1º Lugar",
      imagem: "lovable-uploads/35348bd0-e868-4f30-b1a3-066ae4e2681d.png",
      imagePosition: "object-center"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PageHeader 
          title="Competições"
          subtitle="Nossos membros participam regularmente de competições nacionais e internacionais, demonstrando excelência acadêmica e prática"
        />
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-financial-primary mb-8 text-center">
                  Resultados Anteriores
                </h3>
                <div className="space-y-8">
                  {competicoes.map((comp, index) => (
                    <Card key={index} className="border-0 shadow-lg hover-scale overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row">
                          {/* Image */}
                          <div className="lg:w-1/2">
                            {/* Alterei o src da imagem tbm */}
                            <img 
                              src={`${import.meta.env.BASE_URL}${comp.imagem}`}
                              alt={comp.nome}
                              className={`w-full h-96 object-cover ${comp.imagePosition}`}
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                            <div className="mb-4">
                              <div>
                                <h4 className="font-semibold text-financial-primary text-lg mb-2">{comp.nome}</h4>
                                <span className="text-sm text-financial-accent">{comp.tipo}</span>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed text-justify">{comp.descricao}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Competicoes;