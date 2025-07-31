
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projetos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-financial-primary mb-4">
                  Nossos Projetos
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Conheça as iniciativas da Liga de Mercado Financeiro da PUC-Rio
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* LMF Cast Card */}
                <Link to="/lmf-cast" className="group">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                      <Youtube className="w-16 h-16 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                      <h2 className="text-2xl font-bold text-financial-primary mb-4">
                        LMF Cast
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Nosso podcast oficial com grandes nomes do mercado financeiro
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* Artigos Card */}
                <Link to="/artigos" className="group">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                      <FileText className="w-16 h-16 text-financial-primary mb-6 group-hover:scale-110 transition-transform" />
                      <h2 className="text-2xl font-bold text-financial-primary mb-4">
                        Artigos
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Análises e insights sobre o mercado financeiro
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* LMF Journal Card */}
                <Link to="/lmf-journal" className="group">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                      <Mail className="w-16 h-16 text-financial-primary mb-6 group-hover:scale-110 transition-transform" />
                      <h2 className="text-2xl font-bold text-financial-primary mb-4">
                        LMF Journal
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Nossa newsletter semanal com análises do mercado
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projetos;
