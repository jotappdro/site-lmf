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
   pdfUrl: "public/pdfs/O Mercado de Carbono.pdf"
  },
  {
  id: 8,
  titulo: "Wal-Mart: A extraordinariedade do simples",
  autor: "Felipe Elgarten",
  data: "2023-07-10",
  capa: "/lovable-uploads/468e86_53232a69611d416ca18905cd85d76aeb~mv2.jpg",
  pdfUrl: "/pdfs/Wal-Mart: A extraordinariedade do simples.pdf"
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
