import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const Equipe = () => {
  // Removendo a / do início de cada caminho de foto, agora já sei que funciona
  const gestao = [
    {
      nome: "Pedro Cafasso",
      cargo: "Presidente",
      foto: "lovable-uploads/149bfcea-4272-4837-9483-4a38f6e1ed59.png",
      linkedin: "https://www.linkedin.com/in/pedro-antonio-cafasso-a0b7391bb/"
    },
    {
      nome: "Carolina Freitas",
      cargo: "Vice-Presidente",
      foto: "lovable-uploads/d6262ba1-9e62-4f76-b4e3-d14170f36824.png",
      linkedin: "https://www.linkedin.com/in/carolina-freitas-423863364/"
    }
  ];

  const associadosSeniors = [
    {
      nome: "Bruna Almeida",
      cargo: "Diretora de Pessoas",
      foto: "lovable-uploads/fb838500-0d65-44cc-9880-998821329c95.png",
      linkedin: "https://www.linkedin.com/in/bruna-almeida-a18806349/"
    },
    {
      nome: "Gustavo Fortes",
      cargo: "Diretor de Prod. de Conteúdo e Head Macro",
      foto: "lovable-uploads/gustavo-fortes.jpeg",
      linkedin: "https://www.linkedin.com/in/gustavo-fortes-2b6723268/"
    },
    {
      nome: "Gustavo Nigri",
      cargo: "Diretor de Eventos",
      foto: "lovable-uploads/2419f932-f36a-4656-8f56-f879a134088c.png",
      linkedin: "https://www.linkedin.com/in/gustavo-camhaji-nigri-5086902a9/"
    },
    {
      nome: "Pedro Cunha",
      cargo: "Diretor de Capacitação e Head Equity Global",
      foto: "lovable-uploads/pedro-cunha.jpeg",
      linkedin: "https://www.linkedin.com/in/pedro-menezes-carneiro-da-cunha-826145363/"
    },
    {
      nome: "Pedro Kottler",
      cargo: "Diretor de Capacitação e Head Equity Brasil",
      foto: "lovable-uploads/14c9ca73-b9bd-464b-8fe5-b9a7899170f6.png",
      linkedin: "https://www.linkedin.com/in/pedro-kottler-909589369/"
    },
    {
      nome: "Pedro Svartman",
      cargo: "Diretor de Prod. de Conteúdo",
      foto: "lovable-uploads/3d7b26ce-fd2a-4d6f-acbc-0fb653e7b314.png",
      linkedin: "https://www.linkedin.com/in/pedro-svartman-62b9b5364/"
    }
  ];

  const associadosJuniors = [
    {
      nome: "Ana Beatriz Rosa",
      cargo: "Eventos",
      foto: "lovable-uploads/Ana Beatriz Rosa.jpeg",
      linkedin: ""
    },
    {
      nome: "Antonio Trezzi",
      cargo: "Capacitação",
      foto: "lovable-uploads/Antonio Trezzi.jpg",
      linkedin: "https://www.linkedin.com/in/ant%C3%B4nio-trezzi-barcinski-4975763bb/"
    },
    {
      nome: "Beatriz Toledano",
      cargo: "Pessoas",
      foto: "lovable-uploads/Beatriz Toledano.PNG",
      linkedin: ""
    },
    {
      nome: "Bernardo Barauna",
      cargo: "Capacitação",
      foto: "lovable-uploads/Bernardo Barauna.jpg",
      linkedin: "https://www.linkedin.com/in/bernardo-a-barauna/"
    },
    {
      nome: "Eduardo Hamawy",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/Eduardo Hamawy (1).jpg",
      linkedin: "https://www.linkedin.com/in/eduardo-hamawy-5327693b6/"
    },
    {
      nome: "Eric Bittencourt",
      cargo: "Pessoas",
      foto: "lovable-uploads/eric-bittencourt.jpeg",
      linkedin: "https://www.linkedin.com/in/eric-bittencourt-grillo-0aa1423a6/"
    },
    {
      nome: "Felipe Iglesias",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/Felipe Iglesias Teixeira.jpg",
      linkedin: "https://www.linkedin.com/in/felipe-iglesias-teixeira-2765a1411/"
    },
    {
      nome: "Guilherme Caruso",
      cargo: "Pessoas",
      foto: "lovable-uploads/ab9ff390-7468-4e32-8d85-276c19adf060.png",
      linkedin: "https://www.linkedin.com/in/guilherme-rh-caruso/"
    },
    {
      nome: "Gustavo Geller",
      cargo: "Eventos",
      foto: "lovable-uploads/a55f8812-8aa2-4fa0-a1eb-83e21c4fad18.png",
      linkedin: "https://www.linkedin.com/in/gustavo-kallmann-geller-861a70226/"
    },
    {
      nome: "Henrique Parente",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/henrique-parente.jpeg",
      linkedin: "https://www.linkedin.com/in/henrique-parente-marquez-a71573268/"
    },
    {
      nome: "João Guimarães",
      cargo: "Eventos",
      foto: "lovable-uploads/joao-guimaraes.jpeg",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-guimar%C3%A3es-543bb41aa/"
    },
    {
      nome: "João Pessoa",
      cargo: "Eventos",
      foto: "lovable-uploads/joao-pessoa.jpeg",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-pessoa-a25337385/"
    },
    {
      nome: "Kaike Parcias",
      cargo: "Capacitação",
      foto: "lovable-uploads/kaike-parcias.jpeg",
      linkedin: "https://www.linkedin.com/in/kaike-parcias-43122a38b/"
    },
    {
      nome: "Leonardo Szwarcwald",
      cargo: "Pessoas",
      foto: "lovable-uploads/Leonardo Szwarcwald.jpeg",
      linkedin: "https://www.linkedin.com/in/leonardo-szwarcwald-a09642413/"
    },
    {
      nome: "Leticia Virgini",
      cargo: "Pessoas",
      foto: "lovable-uploads/Letícia Virgini.jpg",
      linkedin: ""
    },
    {
      nome: "Maria Clara Torres",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/Maria Clara Torres.jpg",
      linkedin: ""
    },
    {
      nome: "Miguel Pessoa",
      cargo: "Capacitação",
      foto: "lovable-uploads/Miguel Pessoa.jpg",
      linkedin: "https://www.linkedin.com/in/miguel-de-vincenzi-pessoa-15392a376/"
    },
    {
      nome: "Pedro Rocha",
      cargo: "Capacitação",
      foto: "lovable-uploads/Pedro rocha.jpeg",
      linkedin: ""
    },
    {
      nome: "Pietro Maiolino",
      cargo: "Pessoas",
      foto: "lovable-uploads/pietro-maiolino.jpeg",
      linkedin: "https://www.linkedin.com/in/pietro-maiolino-b84a953a8/"
    },
    {
      nome: "Rodrigo Mambrini",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/rodrigo-mambrini.jpeg",
      linkedin: "https://www.linkedin.com/in/rodrigomambrinif/"
    },
    {
      nome: "Rodrigo Quiroga",
      cargo: "Eventos",
      foto: "lovable-uploads/Rodrigo_Quiroga_IMG_2655.PNG",
      linkedin: ""
    },
    {
      nome: "Rodrigo Valente",
      cargo: "Pessoas",
      foto: "lovable-uploads/rodrigo-valente.jpeg",
      linkedin: "https://www.linkedin.com/in/rodrigo-botelho-junqueira-valente-a22169403/"
    },
    {
      nome: "Sofia Paiva",
      cargo: "Eventos",
      foto: "lovable-uploads/Sofia Paiva.jpg",
      linkedin: ""
    },
    {
      nome: "Thomaz Aguiar",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/Thomaz Aguiar.jpeg",
      linkedin: ""
    },
  ];

  const MembroCard = ({ membro }: { membro: { nome: string; cargo: string; foto: string; linkedin?: string } }) => (
    <Card className="border-0 shadow-none hover-scale text-center bg-transparent">
      <CardContent className="p-4">
        <div className="mb-6">
          {/* Alterando o src da imagem aqui também */}
          <img 
            src={`${import.meta.env.BASE_URL}${membro.foto}`} 
            alt={membro.nome}
            className="w-64 h-64 rounded-full mx-auto object-cover object-center mb-4"
          />
          <h3 className="text-xl font-semibold text-financial-primary mb-2">
            {membro.nome}
          </h3>
          <p className="text-financial-accent font-medium mb-3">
            {membro.cargo}
          </p>
          {membro.linkedin && (
            <a
              href={membro.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              aria-label={`LinkedIn de ${membro.nome}`}
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen font-lato">
      <Header />
      <main className="pt-20">
        <PageHeader 
          title="Nossa Equipe"
          subtitle="Conheça os membros dedicados da Liga de Mercado Financeiro da PUC-Rio"
        />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Gestão */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-financial-primary mb-8 text-center">
                  Gestão
                </h2>
                <div className="grid md:grid-cols-2 gap-4 justify-items-center max-w-3xl mx-auto">
                  {gestao.map((membro, index) => (
                    <MembroCard key={index} membro={membro} />
                  ))}
                </div>
              </div>

              {/* Associados Sêniors */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-financial-primary mb-8 text-center">
                  Associados Sêniors
                </h2>
                <div className="grid md:grid-cols-3 gap-8 justify-items-center">
                  {associadosSeniors.map((membro, index) => (
                    <MembroCard key={index} membro={membro} />
                  ))}
                </div>
              </div>

              {/* Associados Júniors */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-financial-primary mb-8 text-center">
                  Associados Júniors
                </h2>
                <div className="grid md:grid-cols-3 gap-8 justify-items-center">
                  {associadosJuniors.map((membro, index) => (
                    <MembroCard key={index} membro={membro} />
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

export default Equipe;
