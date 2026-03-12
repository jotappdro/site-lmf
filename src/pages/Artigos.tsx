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
