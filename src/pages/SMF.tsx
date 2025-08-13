
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo SMF 2025 */}
              <div className="mb-12">
                <img 
                  src="lovable-uploads/c4e76c4f-8b72-424a-bc75-e18aa5234fa3.png"
                  alt="SMF 2025 Logo"
                  className="mx-auto h-32 object-contain"
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
              <div className="mb-20">
                <h3 className="text-2xl font-semibold text-financial-primary mb-8">Patrocinadores</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="flex items-center justify-center h-24">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/734c39fb-ee22-49d8-98e1-f580172facd6.png`}
                      alt="Icatu Vanguarda"
                      className="object-contain"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </div>
                  <div className="flex items-center justify-center h-24">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/fbb57043-4d30-470d-8971-bc6e5cffb5b1.png`}
                      alt="Sharp Capital"
                      className="object-contain"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </div>
                  <div className="flex items-center justify-center h-24">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/44bc199c-a18d-4d2e-9a57-1880d16425e9.png`}
                      alt="TRUXT"
                      className="object-contain"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </div>
                  <div className="flex items-center justify-center h-24">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/1f41757c-add6-49ae-9dd8-1c1a211dcdf9.png`}
                      alt="Vinci Compass"
                      className="object-contain"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </div>
                </div>
              </div>

              {/* Lista de Painéis para Inscrição */}
              <div className="mb-20">
                <h3 className="text-2xl font-semibold text-financial-primary mb-8">Inscreva-se nos Painéis da SMF 2025</h3>
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Segunda-feira (25/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-gray-900 mb-4">Segunda-feira (25/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          11h30
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Trajetória de Carreira no Mercado Financeiro
                          </h5>
                          <p className="text-gray-600">Marcelo Mesquita (Sócio-Fundador da Leblon Equities)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-trajetoria-no-mercado-financeiro/3072960"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          14h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Como Pensam os Gestores de Ações
                          </h5>
                          <p className="text-gray-600 mb-1">Marcel Guetta (Sócio-Fundador, CEO e CIO da Magnus Capital)</p>
                          <p className="text-gray-600">Phillippe Perdigão (Investidor)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-como-pensam-os-gestores-de-acoes/3072976"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          17h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Tendências Para a Economia Global
                          </h5>
                          <p className="text-gray-600">Ruy Alves (Sócio e Gestor da Kinea Investimentos)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-tendencias-para-a-economia-global/3072986"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terça-feira (26/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-gray-900 mb-4">Terça-feira (26/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          10h30
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Filosofias de Investimento no Cenário Brasileiro
                          </h5>
                          <p className="text-gray-600 mb-1">Marcelo Clark (Sócio e Gestor da Sharp Capital)</p>
                          <p className="text-gray-600">Pedro Rosset (Sócio da Sharp Capital)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-value-investing-e-estrategias-de-longo-prazo/3073386"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          13h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            O Mercado de Ativos Íliquidos
                          </h5>
                          <p className="text-gray-600 mb-1">Rodrigo Alves (Sócio de Ativos Íliquidos do BTG Pactual)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-o-mercado-de-ativo-iliquidos/3073403"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          16h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Filosofias de Investimento no Brasil
                          </h5>
                          <p className="text-gray-600 mb-1">Alexandre Silverio (Sócio-Fundador e CEO da Tenax Capital)</p>
                          <p className="text-gray-600">Camilo Marcantonio (Sócio-Fundador e CIO da Charles River Capital)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-filosofias-de-investimento-no-brasil/3073409"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          18h30
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Carreira em Bancos de Investimento
                          </h5>
                          <p className="text-gray-600">André Juaçaba (Vice-Presidente Executivo do Banco Santander)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-carreira-em-bancos-de-investimento/3073431"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quarta-feira (27/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-gray-900 mb-4">Quarta-feira (27/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          11h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Perspectivas de Investimentos em Ações e Trajetória
                          </h5>
                          <p className="text-gray-600 mb-1">Bruno Garcia (Sócio-Fundador e CIO da TRUXT Investimentos)</p>
                          <p className="text-gray-600">Jander Medeiros (Sócio da TRUXT Investimentos)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-perspectivas-de-investimentos-em-acoes-e-trajetoria/3072997"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          13h30
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Gestão de Fundos Multimercado
                          </h5>
                          <p className="text-gray-600 mb-1">Fernando Monteiro (Gestor de Multimercado do Bradesco Asset)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-gestao-de-fundos-multimercado/3073007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          16h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Estratégias de Crédito: Do High Grade ao Special Situations
                          </h5>
                          <p className="text-gray-600 mb-1">Rafael Fritsch (CIO da Root Capital)</p>
                          <p className="text-gray-600">Sérgio Pessoa (Gestor de Crédito da Root Capital)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-estrategias-em-credito-e-special-situations/3073017"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          18h00
                          <div className="block md:hidden h-0.5 bg-financial-primary mt-1 w-full rounded-full"></div>
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            O Mercado de Ações Brasileiro
                          </h5>
                          <p className="text-gray-600 mb-1">Florian Bartunek (Sócio-Fundador da Constellation Asset)</p>
                          <p className="text-gray-600">Guilherme Aché (Sócio-Fundador da Squadra Investimentos)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-o-mercado-de-acoes-brasileiro/3073028"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quinta-feira (28/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-gray-900 mb-4">Quinta-feira (28/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          10h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Cenário Atual do Mercado de Private Equity
                          </h5>
                          <p className="text-gray-600 mb-1">Rodrigo Marvão (Sócio de Private Equity do Opportunity)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-cenario-atual-do-mercado-de-private-equity/3073453"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          12h30
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Desafios Para o Sistema Financeiro Nacional
                          </h5>
                          <p className="text-gray-600">Renato Gomes (Diretor de Organização do Sistema Financeiro e de Resolução do Banco Central)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-desafios-para-o-sistema-financeiro-nacional/3073465"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          15h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Oportunidades e Riscos Para o Crédito Privado
                          </h5>
                          <p className="text-gray-600">Bruno Spilberg (Sócio e Gestor de Crédito da Vinci Compass)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-oportunidades-e-riscos-para-o-credito-privado/3073479"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          18h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Cenário Macroeconômico Global e Local
                          </h5>
                          <p className="text-gray-600 mb-1">Bruno Coutinho (Sócio-Fundador e Gestor da Mar Asset)</p>
                          <p className="text-gray-600">João Landau (Sócio-Fundador e Gestor da Vista Capital)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-cenario-macroeconomico-global-e-local/3073492"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sexta-feira (29/08) */}
                  <div>
                    <h4 className="text-[1.375rem] font-semibold text-gray-900 mb-4">Sexta-feira (29/08)</h4>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          13h30
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            O Futuro da Renda Fixa no Brasil
                          </h5>
                          <p className="text-gray-600 mb-1">Alan Corrêa (Gestor de Crédito da Icatu Vanguarda)</p>
                          <p className="text-gray-600">Antonio Corrêa (Gestor de Crédito da Icatu Vanguarda)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-o-futuro-da-renda-fixa-no-brasil/3073047"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          16h00
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            Multi-Family Offices e a Gestão Patrimonial
                          </h5>
                          <p className="text-gray-600 mb-1">Eduardo Gomes de Almeida (Co-Presidente do Conselho e Sócio da Turim)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-multi-family-offices-e-a-gestao-patrimonial/3073055"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="text-lg font-medium text-financial-primary mb-2 md:mb-0 md:min-w-[60px] text-center">
                          18h30
                        </div>
                        <div className="hidden md:block w-1 bg-financial-primary rounded-full self-stretch"></div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-financial-primary mb-2">
                            O Panorama Fiscal Brasileiro
                          </h5>
                          <p className="text-gray-600 mb-1">José Márcio Camargo (Economista-Chefe da Genial Investimentos) e</p>
                          <p className="text-gray-600">Paulo Val (Economista-Chefe da Occam Brasil)</p>
                        </div>
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mt-4 md:mt-0">
                          <a 
                            href="https://www.sympla.com.br/evento/painel-o-panorama-fiscal-brasileiro/3073065"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                          >
                            Inscreva-se
                          </a>
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
