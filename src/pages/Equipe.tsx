import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const Equipe = () => {
  // Removendo a / do início de cada caminho de foto, agora já sei que funciona
  const gestao = [
    {
      nome: "João Pedro Souza",
      cargo: "Presidente",
      foto: "lovable-uploads/065173d1-c0be-410e-a451-2b4c4be920b1.png",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-oliveira-de-souza/"
    },
    {
      nome: "Felipe Dib",
      cargo: "Vice-Presidente",
      foto: "lovable-uploads/374c2ec2-b7fb-443f-b622-c430b39e485a.png",
      linkedin: "https://www.linkedin.com/in/felipe-dib-020bba32a/"
    }
  ];

  const associadosSeniors = [
    {
      nome: "Artur Daher",
      cargo: "Diretor de Competições",
      foto: "lovable-uploads/6c36358f-4854-4c6e-b921-9afc07a151b7.png",
      linkedin: "https://www.linkedin.com/in/artur-daher-moura-284a67306/"
    },
    {
      nome: "Francisco Brito",
      cargo: "Diretor de Competições",
      foto: "lovable-uploads/3a1cd365-94d5-4e94-9516-deea28696c98.png",
      linkedin: "https://www.linkedin.com/in/francisco-de-filippo-brito-455b352b5/"
    },
    {
      nome: "Gabriel Stanger",
      cargo: "Diretor de Produção de Conteúdo",
      foto: "lovable-uploads/c33f87b9-0bf6-46f2-9ced-39bd8d6774ec.png",
      linkedin: "https://www.linkedin.com/in/gabriel-stanger/"
    },
    {
      nome: "Gabriela Sigelmann",
      cargo: "Diretora de Eventos",
      foto: "lovable-uploads/b74296b3-6e91-4b1e-8514-e535073fb52e.png",
      linkedin: "https://www.linkedin.com/in/gabriela-sigelmann-8a29bb309/"
    },
    {
      nome: "Lucca Mothe",
      cargo: "Diretor de Eventos",
      foto: "lovable-uploads/8f46895b-3dd7-4e4c-bd48-a7da06f4cfb2.png",
      linkedin: "https://www.linkedin.com/in/lucca-emery-mothe-bb2b242b1/"
    },
    {
      nome: "Paulo Rebouças",
      cargo: "Diretor de Pessoas",
      foto: "lovable-uploads/7b057e43-ce30-4eb7-9514-8a6cf14d2706.png",
      linkedin: "https://www.linkedin.com/in/paulo-rebou%C3%A7as-69b682345/"
    }
  ];

  const associadosJuniors = [
    {
      nome: "Bruna Almeida",
      cargo: "Pessoas",
      foto: "lovable-uploads/fb838500-0d65-44cc-9880-998821329c95.png",
      linkedin: "https://www.linkedin.com/in/bruna-almeida-a18806349/"
    },
    {
      nome: "Carlos Eduardo Fragozo",
      cargo: "Competições",
      foto: "lovable-uploads/6f94c149-4b92-49db-899c-8ef632309cf8.png",
      linkedin: "https://www.linkedin.com/in/carlos-eduardo-fragozo-6606362b6/"
    },
    {
      nome: "Carolina Freitas",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/d6262ba1-9e62-4f76-b4e3-d14170f36824.png",
      linkedin: "https://www.linkedin.com/in/carolina-lorena-freitas-423863364/"
    },
    {
      nome: "Felipe Pires",
      cargo: "Pessoas",
      foto: "lovable-uploads/564215d7-ea2c-4d6f-b216-33580c0d090b.png",
      linkedin: "https://www.linkedin.com/in/felipe-pires-595a11329/"
    },
    {
      nome: "Gabriela Musa",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/737a2244-61e5-4ec5-b165-48bf245f30aa.png",
      linkedin: "https://www.linkedin.com/in/gabriela-musa-367174368/"
    },
    {
      nome: "Guilherme Caruso",
      cargo: "Pessoas",
      foto: "lovable-uploads/ab9ff390-7468-4e32-8d85-276c19adf060.png",
      linkedin: "https://www.linkedin.com/in/guilherme-rh-caruso/"
    },
    {
      nome: "Gustavo Nigri",
      cargo: "Eventos",
      foto: "lovable-uploads/2419f932-f36a-4656-8f56-f879a134088c.png",
      linkedin: "https://www.linkedin.com/in/gustavo-camhaji-nigri-5086902a9/"
    },
    {
      nome: "Gustavo Geller",
      cargo: "Eventos",
      foto: "lovable-uploads/a55f8812-8aa2-4fa0-a1eb-83e21c4fad18.png",
      linkedin: "https://www.linkedin.com/in/gustavo-kallmann-geller-861a70226/"
    },
    {
      nome: "Gustavo Levy",
      cargo: "Pessoas",
      foto: "lovable-uploads/46cc0fae-64e6-4c84-9dc1-96fa3d454d3b.png",
      linkedin: "https://www.linkedin.com/in/gustavo-levy-00366035b/"
    },
    {
      nome: "Iann Soffried",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/cb4d6776-313a-4c15-9473-2b66fee20c7f.png",
      linkedin: "https://www.linkedin.com/in/iann-soffried-ab5679332/"
    },
    {
      nome: "Pedro Cafasso",
      cargo: "Competições",
      foto: "lovable-uploads/149bfcea-4272-4837-9483-4a38f6e1ed59.png",
      linkedin: "https://www.linkedin.com/in/pedro-antonio-cafasso-a0b7391bb/"
    },
    {
      nome: "Pedro Kottler",
      cargo: "Competições",
      foto: "lovable-uploads/14c9ca73-b9bd-464b-8fe5-b9a7899170f6.png",
      linkedin: "https://www.linkedin.com/in/pedro-kottler-909589369/"
    },
    {
      nome: "Pedro Svartman",
      cargo: "Prod. de Conteúdo",
      foto: "lovable-uploads/3d7b26ce-fd2a-4d6f-acbc-0fb653e7b314.png",
      linkedin: "https://www.linkedin.com/in/pedro-svartman-62b9b5364/"
    },
    {
      nome: "Thiago Nasseh",
      cargo: "Competições",
      foto: "lovable-uploads/ed1ecb68-0f88-4797-8dc4-e76613e1c0ca.png",
      linkedin: "https://www.linkedin.com/in/thiagonasseh/"
    },
    {
      nome: "Victor Messer",
      cargo: "Pessoas",
      foto: "lovable-uploads/1f5ed056-58fd-45b5-9b65-adb76e2f40dd.png",
      linkedin: "https://www.linkedin.com/in/victor-messer-678463369/"
    }
  ];

  const MembroCard = ({ membro }: { membro: { nome: string; cargo: string; foto: string; linkedin?: string } }) => (
    <Card className="border-0 shadow-none hover-scale text-center bg-transparent">
      <CardContent className="p-4">
        <div className="mb-6">
          {/* Alterando o src da imagem aqui também */}
          <img 
            src={`${import.meta.env.BASE_URL}${membro.foto}`} 
            alt={membro.nome}
            className="w-64 h-64 rounded-full mx-auto object-cover mb-4"
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
