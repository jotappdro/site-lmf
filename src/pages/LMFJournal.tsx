
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const LMFJournal = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-financial-primary mb-4">
                  LMF Journal
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  A newsletter oficial da Liga de Mercado Financeiro PUC-Rio
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Coluna Esquerda - Imagem */}
                <div className="order-2 lg:order-1">
                  <div className="w-full">
                    <img
                      src="lovable-uploads/e20023eb-82cd-4e04-bd81-4f030477c8c2.png"
                      alt="LMF Journal"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Coluna Direita - Texto e Botão */}
                <div className="order-1 lg:order-2">
                  <div className="text-gray-700 text-lg leading-relaxed mb-8">
                    <p className="mb-4">
                      The LMF Journal é a newsletter da Liga, publicada toda segunda-feira às sete da manhã.
                    </p>
                    <p className="mb-4">
                      Nela, os nossos associados trazem notícias sobre os principais acontecimentos no mercado financeiro. A nossa newsletter busca trazer temas diversificados para os nossos leitores além de curiosidades sobre o mercado financeiro e uma agenda com os principais acontecimentos na semana.
                    </p>
                    <p className="mb-6">
                      Clique no botão abaixo para receber a nossa newsletter no seu email e ficar por dentro das últimas notícias do mercado financeiro.
                    </p>
                  </div>

                  {/* Botão Centralizado */}
                  <div className="flex justify-center">
                    <Button 
                      size="lg"
                      className="bg-financial-primary hover:bg-financial-primary/90"
                      onClick={() => window.open('https://lmfpucrio.us20.list-manage.com/subscribe?u=2c13ce50ef1cf447ffdb99d6d&id=da2b46864b&fbclid=PAZXh0bgNhZW0CMTEAAacHPXkPS0fgULY_ZDYn0_8hp0mS0zTPuFF1SANe8RbnYonE96f6gIZfjQ4_8w_aem_csVmTpr4LQ-Ie3nNwR7Phw', '_blank')}
                    >
                      Receber Newsletter
                    </Button>
                  </div>
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

export default LMFJournal;
