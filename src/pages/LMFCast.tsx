
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Youtube } from 'lucide-react';

const LMFCast = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-financial-primary mb-4">
                  LMF Cast
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  O podcast oficial da Liga de Mercado Financeiro PUC-Rio
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Coluna Esquerda - Vídeo - Aumentado ainda mais */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-video w-full max-w-4xl mx-auto lg:mx-0">
                    <iframe
                      src="https://www.youtube.com/embed/HiX3WzjPdAU?start=1"
                      title="LMF Cast"
                      className="w-full h-full rounded-lg shadow-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* Coluna Direita - Texto e Links */}
                <div className="order-1 lg:order-2">
                  <div className="text-gray-700 text-lg leading-relaxed mb-8">
                    <p className="mb-4">
                      O LMF Cast é o podcast oficial da Liga de Mercado Financeiro PUC-Rio.
                    </p>
                    <p className="mb-4">
                      Abordando os mais variados temas do mercado financeiro, contamos com grandes nomes do mercado como: Gustavo Franco (ex-presidente Banco Central), Marcos Mollica (Opportunity), José Eduardo Araújo (Legacy), entre outros.
                    </p>
                    <p className="mb-8">
                      Para ficar por dentro dos assuntos mais comentados do Mercado, ouça o LMF Cast no Youtube ou Spotify.
                    </p>
                  </div>

                  {/* Ícones das Plataformas - Centralizados */}
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://www.youtube.com/@ligademercadofinanceiropuc9171"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg hover:bg-red-700 transition-colors group"
                      aria-label="YouTube do LMF Cast"
                    >
                      <Youtube className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://open.spotify.com/show/2PyAm8MYxUzX4snUoroP2X"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg hover:bg-green-700 transition-colors group"
                      aria-label="Spotify do LMF Cast"
                    >
                      <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.36.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.78.24 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.421-1.02.599-1.56.3z"/>
                      </svg>
                    </a>
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

export default LMFCast;
