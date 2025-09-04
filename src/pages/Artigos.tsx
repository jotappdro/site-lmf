import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, User, Calendar } from 'lucide-react';

// Mock data for articles - replace with real data
const artigos = [
  {
    id: 1,
    titulo: "Análise do Mercado de Renda Fixa em 2024",
    autor: "João Silva",
    data: "2024-12-01",
    capa: "/lovable-uploads/065173d1-c0be-410e-a451-2b4c4be920b1.png",
    pdfUrl: "#"
  },
  {
    id: 2,
    titulo: "O Futuro das Criptomoedas no Brasil",
    autor: "Maria Santos",
    data: "2024-11-15",
    capa: "/lovable-uploads/10bee1e7-4332-49ea-8c05-13f15293d65b.png",
    pdfUrl: "#"
  },
  {
    id: 3,
    titulo: "Estratégias de Investimento em Ações",
    autor: "Pedro Costa",
    data: "2024-11-01",
    capa: "/lovable-uploads/14719a58-7918-4855-a311-0bfd13f5b2bb.png",
    pdfUrl: "#"
  },
  {
    id: 4,
    titulo: "Mercado Imobiliário: Tendências 2025",
    autor: "Ana Oliveira",
    data: "2024-10-20",
    capa: "/lovable-uploads/149bfcea-4272-4837-9483-4a38f6e1ed59.png",
    pdfUrl: "#"
  },
  {
    id: 5,
    titulo: "Fundos de Investimento: Guia Completo",
    autor: "Carlos Mendes",
    data: "2024-10-05",
    capa: "/lovable-uploads/15250259-5fc9-4837-8c62-5147286b4b7c.png",
    pdfUrl: "#"
  },
  {
    id: 6,
    titulo: "ESG: Investimentos Sustentáveis",
    autor: "Luciana Ferreira",
    data: "2024-09-18",
    capa: "/lovable-uploads/18e09f74-1090-483f-af8d-211ba0bbb315.png",
    pdfUrl: "#"
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