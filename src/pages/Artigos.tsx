import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, User, Calendar } from 'lucide-react';

// Mock data for articles - replace with real data
const artigos = [
  {
    id: 1,
    titulo: "I.A.: Entre Otimismo e Volatilidade",
    autor: "João Pedro Souza",
    data: "2024-10-13",
    capa: "/lovable-uploads/468e86_4d5efc992f4740b4a5b2b371a250f53d~mv2.jpg",
    pdfUrl: "/pdfs/ia-entre-otimismo-e-volatilidade.pdf"
  },
  {
    id: 2,
    titulo: "Mulheres no Mercado Financeiro",
    autor: "Ana Carolina Prates & Isadora Valle",
    data: "2020-06-07",
    capa: "/lovable-uploads/Logo-Principal-TST-FundoAzulMédio-PNG.png",
    pdfUrl: "/pdfs/MulheresNoMercadoFinanceiro.pdf"
  },
  {
    id: 3,
    titulo: "1929: A Grande Depressão",
    autor: "Gabriel Marques da Silva",
    data: "2024-09-02",
    capa: "/lovable-uploads/Franklin D. Roosevelt.jpg",
    pdfUrl: "/pdfs/1929AGrandeDepressão.pdf"
  },
  {
    id: 4,
    titulo: "Recessão na China?",
    autor: "Gabriel Corrêa",
    data: "2024-04-04",
    capa: "/lovable-uploads/bolsachina.jpeg",
    pdfUrl: "/pdfs/RecessãonaChina.pdf"
  },
   {
    id: 5,
    titulo: "A Grande Recessão Brasileira",
    autor: "Mariana Martins",
    data: "2024-03-14",
    capa: "/lovable-uploads/fotodilma.png",
    pdfUrl: "/pdfs/AGrandeRecessãoBrasileira.pdf"
   },
   {
    id: 6,
    titulo: "A Crise e o Futuro do Varejo",
    autor: "Gabriel Marques da Silva",
    data: "2024-01-14",
    capa: "/lovable-uploads/Casas bahia.webp",
    pdfUrl: "/pdfs/ACriseeoFuturodoVarejo.pdf"
   },
   {
   id: 7,
   titulo: "O Mercado de Carbono",
   autor: "Felipe Dalcomuni e Pedro Arthur Bevilaqua",
   data: "2023-09-01",
   capa: "/lovable-uploads/image2.png",
   pdfUrl: "/pdfs/OMercadoDeCarbono.pdf"
  },
  {
   id: 8,
   titulo: "Wal-Mart: A extraordinariedade do simples",
   autor: "Felipe Elgarten",
   data: "2023-07-10",
   capa: "/lovable-uploads/468e86_53232a69611d416ca18905cd85d76aeb~mv2.jpg",
   pdfUrl: "/pdfs/WalMartAExtraordinariedadeDoSimples.pdf"
 },
  {
  id: 9,
  titulo: 'O "Efeito Zoom"',
  autor: "Beatriz Sut",
  data: "2023-03-23",
  capa: "/lovable-uploads/468e86_540a5fd859f54d9980acfcb7be5b0c63~mv2.png",
  pdfUrl: "/pdfs/O_Efeito_Zoom.pdf"
},
  {
  id: 10,
  titulo: "A implosão da FTX",
  autor: "Carolina Blank, Giovanni Jobim e João Vitor Moura",
  data: "2023-02-24",
  capa: "/lovable-uploads/468e86_72d23ed5cfe84df083e164bc1a2a487d~mv2.jpg",
  pdfUrl: "/pdfs/A_implosao_da_FTX.pdf"
  },
  {
  id: 11,
  titulo: "Das Stablecoins ao Real digital: a evolução das moedas digitais",
  autor: "Carolina Blank",
  data: "2022-10-19",
  capa: "/lovable-uploads/468e86_d2a5d3de258948a7bf0bf42dcf4fe102~mv2 (1).jpg",
  pdfUrl: "/pdfs/Das_Stablecoins_ao_Real_digital.pdf"
},
  {
  id: 12,
  titulo: "Recessão nos EUA?",
  autor: "João Pedro Veiga",
  data: "2022-08-28",
  capa: "/lovable-uploads/468e86_b79d161545de4776ad61f5e24f8df49a~mv2.png",
  pdfUrl: "/pdfs/Recessao_nos_EUA.pdf"
},
  {
  id: 13,
  titulo: "Biden x Roosevelt: como o novo presidente americano se assemelha ao criador do New Deal?",
  autor: "Fernanda Nogueira e Nicholas Gontijo",
  data: "2021-06-17",
  capa: "/lovable-uploads/imagemartigobidenroosevelt.png",
  pdfUrl: "/pdfs/Biden_x_Roosevelt.pdf"
},
{
  id: 14,
  titulo: "Os gigantes estímulos fiscais americanos e a contradição da curva de Phillips",
  autor: "Felipe Jatahy, Felipe Rocha e Ramiro Monarcha",
  data: "2021-07-01",
  capa: "/lovable-uploads/imagemartigoOs gigantes estímulos fiscais americanos e a contradição da curva de Phillips.jpeg",
  pdfUrl: "/pdfs/Os_gigantes_estimulos_fiscais_americanos.pdf"
},
{
  id: 15,
  titulo: "A transformação no mercado financeiro: um desafio para os value investors",
  autor: "Mateus Soares",
  data: "2021-07-26",
  capa: "/lovable-uploads/valueinvestorsIMAGEMARTIGO.png",
  pdfUrl: "/pdfs/A_transformacao_no_mercado_financeiro.pdf"
},
{
  id: 16,
  titulo: "Plano Real: o fim da hiperinflação no Brasil",
  autor: "Ana Maria Varela, Maria Clara Werneck e Pedro Rocha",
  data: "2022-01-23",
  capa: "/lovable-uploads/imagemartigoplanoreal.jpg",
  pdfUrl: "/pdfs/Plano_Real.pdf"
},
{
  id: 17,
  titulo: "Rússia x Ucrânia: raízes e consequências do conflito",
  autor: "Eduardo Berardo e Pedro Rocha",
  data: "2022-04-01",
  capa: "/lovable-uploads/imagemartigoguerrarussiaucrania.png",
  pdfUrl: "/pdfs/Russia_x_Ucrania.pdf"
}
  
];

const Artigos = () => {
  // Sort articles by date (most recent first)
  const artigosOrdenados = [...artigos].sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleCardClick = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PageHeader 
          title="Artigos"
          subtitle="Análises e insights sobre o mercado financeiro escritos pelos membros da Liga"
        />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artigosOrdenados.map((artigo) => (
                  <Card 
                    key={artigo.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                    onClick={() => handleCardClick(artigo.pdfUrl)}
                  >
                    <div className="relative">
                      <img 
                        src={artigo.capa} 
                        alt={artigo.titulo}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-background/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {artigo.titulo}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{artigo.autor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(artigo.data)}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Artigos;
