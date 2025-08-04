
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
          title="SMF - Semana do Mercado Financeiro"
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
                  A <span className="font-bold text-financial-primary">Semana de Mercado Financeiro PUC-Rio</span> é um evento totalmente gratuito que reúne renomados profissionais da área. 
                  Sua grande missão é imergir os alunos universitários no mundo das finanças, promovendo, assim, a democratização deste conhecimento.
                </p>
              </div>

              {/* Patrocinadores */}
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-financial-primary mb-6">Patrocinadores</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="flex items-center justify-center h-24">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/734c39fb-ee22-49d8-98e1-f580172facd6.png`}
                      alt="Icatu Vanguarda"
                      className="h-12 max-w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center h-24">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/fbb57043-4d30-470d-8971-bc6e5cffb5b1.png`}
                      alt="Sharp Capital"
                      className="h-12 max-w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center h-24">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/44bc199c-a18d-4d2e-9a57-1880d16425e9.png`}
                      alt="TRUXT"
                      className="h-12 max-w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center h-24">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/1f41757c-add6-49ae-9dd8-1c1a211dcdf9.png`}
                      alt="Vinci Compass"
                      className="h-12 max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Lista de Painéis para Inscrição */}
              <div className="mb-20">
                <h3 className="text-2xl font-semibold text-financial-primary mb-8">Inscreva-se nos Painéis da SMF 2025</h3>
                <div className="max-w-4xl mx-auto space-y-4">
                  {[
                    {
                      title: "Trajetória de Carreira no Mercado Financeiro",
                      guest: "Bruno Rudge - Sócio-Fundador da Dynamo",
                      guest2: "Marcelo Mesquita - Sócio-Fundador da Leblon Equities",
                      date: "25.08",
                      time: "11:30",
                      link: "https://forms.gle/exemplo1"
                    },
                    {
                      title: "Como Identificar Boas Oportunidades na Bolsa",
                      guest: "Marcel Guetta - Sócio-Fundador da Magnus Capital",
                      guest2: "Phillippe Perdigão - Investidor",
                      date: "25.08", 
                      time: "14:00",
                      link: "https://forms.gle/exemplo2"
                    },
                    {
                      title: "Tendências Para a Economia Global",
                      guest: "Ruy Alves - Sócio da Kinea Investimentos",
                      date: "25.08",
                      time: "17:00", 
                      link: "https://forms.gle/exemplo3"
                    },
                    {
                      title: "Filosofias de Investimento no Cenário Brasileiro",
                      guest: "Marcelo Clark - Sócio e Gestor da Sharp Capital",
                      guest2: "Pedro Rosset - Analista da Sharp Capital",
                      date: "26.08",
                      time: "10:30",
                      link: "https://forms.gle/exemplo4"
                    },
                    {
                      title: "Gestão de Fundos Multimercado",
                      guest: "Fernando Monteiro - Gestor de Multimercado do Bradesco Asset",
                      guest2: "XXXXXX - Gestor de Multimercado da SPX Capital",
                      date: "26.08",
                      time: "13:00",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "O Macro e Micro nos Cases de Investimentos",
                      guest: "Alexandre Silverio - Sócio-Fundador e CEO da Tenax Capital",
                      guest2: "Camilo Marcantonio - Sócio-Fundador e CIO da Charles River Capital",
                      date: "26.08",
                      time: "16:00",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "Painel BTG",
                      guest: "XXXXX",
                      date: "26.08",
                      time: "18:30",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "Perspectivas de Investimentos em Ações e Trajetória",
                      guest: "Bruno Garcia - Sócio-Fundador e CIO da TRUXT Investimentos",
                      guest2: "Jander Medeiros - Sócio da TRUXT Investimentos",
                      date: "27.08",
                      time: "11:00",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "Estratégias em Crédito e Special Situations",
                      guest: "Rafael Fritsch - Sócio-Fundador e CIO da Root Capital",
                      guest2: "Sérgio Pessoa - Gestor de Crédito da Root Capital",
                      date: "27.08",
                      time: "13:30",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "Carreira em Bancos de Investimentos",
                      guest: "André Juaçaba - Vice-Presidente Executivo do Banco Santander",
                      date: "27.08",
                      time: "16:00",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "O Mercado de Ações Brasileiro",
                      guest: "Florian Bartunek - Sócio-Fundador da Constellation Asset",
                      guest2: "Guilherme Aché - Sócio-Fundador da Squadra Investimentos",
                      date: "27.08",
                      time: "18:00",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "Cenário Atual do Mercado de Private Equity",
                      guest: "Sócio Opportunity",
                      guest2: "Sócio HIG",
                      date: "28.08",
                      time: "10:00",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "Desafios Para o Sistema Financeiro Nacional",
                      guest: "Renato Gomes - Diretor de Organização do Sistema Financeiro e de Resolução do Banco Central",
                      date: "28.08",
                      time: "12:30",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "Oportunidades e Riscos Para o Crédito Privado",
                      guest: "Sócio e Gestor de Crédito da Vinci Compass",
                      date: "28.08",
                      time: "15:00",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "Perspectivas Macroeconômicas no Brasil e no Mundo",
                      guest: "Bruno Coutinho - Sócio-Fundador e Gestor da Mar Asset",
                      guest2: "João Landau - Sócio-Fundador e Gestor da Vista Capital",
                      date: "28.08",
                      time: "18:00",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "O Futuro da Renda Fixa no Brasil",
                      guest: "Alan Corrêa - Gestor de Crédito da Icatu Vanguarda",
                      guest2: "Antonio Corrêa - Gestor de Crédito da Icatu Vanguarda",
                      date: "29.08",
                      time: "13:30",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "O Papel dos Multi-Family Offices na Gestão Patrimonial",
                      guest: "Eduardo Gomes - Sócio da Turim Investimentos",
                      guest2: "Flávio Stanger - Sócio da Galapagos Capital",
                      date: "29.08",
                      time: "16:00",
                      link: "https://forms.gle/exemplo4"
                    },
                    { 
                    title: "O Panorama Fiscal Brasileiro",
                      guest: "José Márcio Camargo - Economista-Chefe da Genial Investimentos",
                      guest2: "Paulo Val - Economista-Chefe da Occam Brasil",
                      date: "29.08",
                      time: "18:30",
                      link: "https://forms.gle/exemplo4"
                    }
                  ].map((panel, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-financial-primary mb-2">
                              {panel.title}
                            </h4>
                            <p className="text-gray-600 mb-1">{panel.guest}</p>
                            {panel.guest2 && <p className="text-gray-600 mb-1">{panel.guest2}</p>}
                            <p className="text-sm text-gray-500">
                              {panel.date} • {panel.time}
                            </p>
                          </div>
                          <div className="ml-6">
                            <a 
                              href={panel.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-financial-primary text-white px-6 py-2 rounded-lg hover:bg-financial-primary/90 transition-colors font-medium"
                            >
                              Inscrever-se
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
