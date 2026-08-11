
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const SMF = () => {
  const timeline = [
    {
      edition: "1ª SMF – 2018",
      panels: "Mais de 16 painéis.",
      sponsors: "Patrocinado pela Genial Investimentos, Ipanema Ventures e JGP."
    },
    {
      edition: "2ª SMF – 2019", 
      panels: "9 painéis.",
      sponsors: "Patrocinado pela Brasil Plural, Genial Investimentos, H.I.G, Icatu Vanguarda e JGP."
    },
    {
      edition: "3ª SMF – 2020",
      panels: "18 painéis realizados 100% online.",
      sponsors: "Patrocinado pela Giant Steps, Icatu Vanguarda e JGP."
    },
    {
      edition: "4ª SMF – 2021",
      panels: "13 painéis realizados 100% online.",
      sponsors: "Patrocinado pela Icatu Vanguarda, JGP e Opportunity."
    },
    {
      edition: "5ª SMF – 2022",
      panels: "11 painéis realizados presencialmente e online.",
      sponsors: "Patrocinado pela Bahia Asset, Icatu Vanguarda, JGP, Opportunity e Vinci Partners."
    },
    {
      edition: "6ª SMF – 2023",
      panels: "13 painéis realizados.",
      sponsors: "Patrocinado pela B3, BTG Pactual, JGP, Opportunity, TRUXT e Vinci Partners."
    },
    {
      edition: "7ª SMF – 2024",
      panels: "12 painéis realizados.",
      sponsors: "Patrocinado pela Icatu Vanguarda, JGP, Opportunity, Sharp, TRUXT e Vinci Partners."
    },
    {
      edition: "8ª SMF – 2025",
      panels: "18 painéis realizados.",
      sponsors: "Patrocinado pela Icatu Vanguarda, Sharp, TRUXT e Vinci Compass."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PageHeader 
          title="Semana de Mercado Financeiro"
          subtitle="O maior evento de mercado financeiro da PUC-Rio, reunindo estudantes, profissionais e empresas para discussões sobre o futuro do setor"
        />
        <section className="py-16   bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo SMF 2026 */}
              <div className="mb-10">
                <img 
                  src="lovable-uploads/logoSMF26oficial.png"
                  alt="SMF 2026 Logo"
                  className="mx-auto block w-full max-w-md h-auto"
                />
              </div>

              {/* Texto descritivo */}
              <div className="mb-12">
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
                  A <span className="font-bold text-primary">Semana de Mercado Financeiro PUC-Rio</span> é um evento totalmente gratuito que reúne renomados profissionais da área. 
                  Sua grande missão é imergir os alunos universitários no mundo das finanças, promovendo, assim, a democratização deste conhecimento.
                </p>
              </div>

             {/* Patrocinadores */}
<div className="flex flex-col items-center justify-center py-8">
  <h3 className="text-2xl font-semibold text-financial-primary mb-12">Patrocinadores</h3>

  <div className="flex-grow flex items-center mb-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-center">
      <div className="flex items-center justify-center h-24">
        <img 
          src={`${import.meta.env.BASE_URL}lovable-uploads/icatu2.png`}
          alt="Icatu Vanguarda"
          className="object-contain"
          style={{ height: "80px", width: "auto" }}
        />
      </div>
      <div className="flex items-center justify-center h-24">
        <img 
          src={`${import.meta.env.BASE_URL}lovable-uploads/fbb57043-4d30-470d-8971-bc6e5cffb5b1.png`}
          alt="Sharp Capital"
          className="object-contain"
          style={{ height: "70px", width: "auto" }}
        />
      </div>
      <div className="flex items-center justify-center h-24">
        <img 
          src={`${import.meta.env.BASE_URL}lovable-uploads/44bc199c-a18d-4d2e-9a57-1880d16425e9.png`}
          alt="TRUXT"
          className="object-contain"
          style={{ height: "60px", width: "auto" }}
        />
      </div>
      <div className="flex items-center justify-center h-24">
        <img 
          src={`${import.meta.env.BASE_URL}lovable-uploads/1f41757c-add6-49ae-9dd8-1c1a211dcdf9.png`}
          alt="Vinci Compass"
          className="object-contain"
          style={{ height: "70px", width: "auto" }}
        />
      </div>
      <div className="flex items-center justify-center h-24">
        <img 
          src={`${import.meta.env.BASE_URL}lovable-uploads/logoopp.png`}
          alt="Opportunity"
          className="object-contain"
          style={{ height: "70px", width: "auto" }}
        />
      </div>
      <div className="flex items-center justify-center h-24">
        <img 
          src={`${import.meta.env.BASE_URL}lovable-uploads/logoaware.png`}
          alt="Aware Investments"
          className="object-contain"
          style={{ height: "70px", width: "auto" }}
        />
      </div>
    </div>
  </div>
</div>


              {/* Lista de Painéis para Inscrição */}
              <div className="mb-20">
                <h3 className="text-2xl font-semibold text-financial-primary mb-8">Inscreva-se nos Painéis da SMF 2026</h3>
                
                {/* Caixa de inscrição */}
                <div className="max-w-4xl mx-auto mb-10">
                  <div className="bg-primary rounded-xl p-6 md:p-8 shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
                    <div>
                      <p className="text-white text-lg font-semibold mb-1">
                        As inscrições estão abertas!
                      </p>
                      <p className="text-white/80 text-sm">
                        Garanta sua vaga nos painéis pelo formulário. Entrada gratuita e vagas limitadas.
                     </p>
                   </div>
                    <a
                      href="https://forms.gle/vbXnphbKnomTA8wd8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                    >
                      Inscreva-se
                    </a>
                  </div>
                </div>
              
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Segunda-feira (17/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-financial-primary mb-4">Segunda-feira (17/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          11h00
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Navegando a Gestão Patrimonial e o Empreendedorismo no Brasil
                          </h5>
                          <p className="text-gray-600 mb-1">Alex Silva (Sócio Aware Investments)</p>
                          <p className="text-gray-600 mb-1">Armando Ahmed (Fundador e presidente Drogaria Venancio)</p>
                        </div>
                        </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          13h30
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            O Mercado de Ações Brasileiro
                          </h5>
                          <p className="text-gray-600 mb-4 md:mb-1">Guilherme Aché (Sócio-fundador Squadra)</p>
                          <p className="text-gray-600">Florian Bartunek (Sócio-fundador e CIO Constellation)</p>
                        </div>
                        </div>
                    </div>
                  </div>

                  {/* Terça-feira (18/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-financial-primary mb-4">Terça-feira (18/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          11h00
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Como Pensam Gestores de Ações
                          </h5>
                          <p className="text-gray-600 mb-4 md:mb-1">Marcelo Clark (Sócio e Gestor da Sharp Capital)</p>
                          <p className="text-gray-600 mb-1">Philippe Perdigão (Sócio-fundador Atta Partners)</p>
                        </div>
                        </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          14h00
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            O Cenário Macroeconômico Global e Local
                          </h5>
                          <p className="text-gray-600 mb-1">Bruno Coutinho (Sócio-fundador e gestor Mar Asset)</p>
                          <p className="text-gray-600 mb-1">João Landau (Sócio-fundador e gestor Vista Capital)</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          17h00
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Perspectivas e Cenário de Private Equity no Brasil
                          </h5>
                          <p className="text-gray-600 mb-4 md:mb-1">Rodrigo Marvão (Sócio de Private Equity Opportunity)</p>
                        </div>
                        </div>
                    </div>
                  </div>

                  {/* Quarta-feira (19/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-financial-primary mb-4">Quarta-feira (19/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          11h00
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Investimento em Infraestrutura no Brasil
                          </h5>
                          <p className="text-gray-600 mb-4 md:mb-1">Rodrigo Rocha (Partner Vinci Compass)</p>
                          <p className="text-gray-600 mb-1">Larissa Lima (Associate Vinci Compass)</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-center gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="self-start md:self-center text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px]">
                          14h00
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Filosofias de Investimento no Brasil
                          </h5>
                          <p className="text-gray-600 mb-4 md:mb-1">Bruno Garcia (Sócio-fundador e CIO Truxt Investimentos)</p>
                          <p className="text-gray-600 mb-1">Jander Medeiros (Sócio Truxt Investimentos)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quinta-feira (20/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-financial-primary mb-4">Quinta-feira (20/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          11h00
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Futuro do Crédito Privado no Brasil
                          </h5>
                          <p className="text-gray-600 mb-4 md:mb-1">Antonio Corrêa (Gestor de Crédito da Icatu Vanguarda)</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          14h00
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Value Investing: Investindo no Longo Prazo
                          </h5>
                          <p className="text-gray-600 mb-1">Bruno Rapparini (Sócio Dynamo)</p>
                          <p className="text-gray-600 mb-1">Fernando Pires (Sócio Dynamo)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sexta-feira (21/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-financial-primary mb-4">Sexta-feira (21/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          11h30
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Estratégias de Crédito: do High Grade ao Special Situations
                          </h5>
                          <p className="text-gray-600 mb-4 md:mb-1">Rafael Fritsch (CIO Root Capital)</p>
                          <p className="text-gray-600 mb-1">Luan Reis (Sócio Root Capital)</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          15h00
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Os Rumos da Economia Brasileira e o Fluxo Global de Capitais
                          </h5>
                          <p className="text-gray-600 mb-1">Daniel Bassan (Country Head Brazil e Regional Head Latin America UBS)</p>
                          <p className="text-gray-600 mb-1">Solange Srour (Head of Brazil Macroeconomics UBS)</p>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          18h30
                          <div className="block md:hidden h-0.5 bg-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-primary mb-2">
                            Trajetória de Carreira: Como Comandar as Maiores Empresas do Brasil
                          </h5>
                          <p className="text-gray-600 mb-4 md:mb-1">Luis Guimarães (Sócio Globo Ventures)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline das Edições Anteriores */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-financial-primary mb-12 text-center">Edições Anteriores</h3>
              
              <div className="relative">
                {/* Linha vertical */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-financial-accent"></div>
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      {/* Marcador circular */}
                      <div className="relative z-10 w-8 h-8 bg-financial-accent rounded-full border-4 border-white shadow-lg flex-shrink-0 mt-1"></div>
                      
                      {/* Conteúdo */}
                      <div className="ml-8 pb-8">
                        <div className="bg-transparent p-6">
                          <h4 className="text-xl font-semibold text-financial-primary mb-3">
                            {item.edition}
                          </h4>
                          <p className="text-gray-600 leading-relaxed mb-2">
                            {item.panels}
                          </p>
                          <p className="text-gray-600 leading-relaxed">
                            {item.sponsors}
                          </p>
                        </div>
                      </div>
                    </div>
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

export default SMF;
