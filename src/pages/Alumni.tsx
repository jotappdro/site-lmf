
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Linkedin } from 'lucide-react';

const Alumni = () => {
  const alumni = [
    {
      nome: "Amanda Gammaro",
      linkedin: "https://www.linkedin.com/in/amanda-gammaro-27b5021ba/"
    },
    {
      nome: "Ana Carolina Barbosa",
      linkedin: "http://linkedin.com/in/annacarolinaottoni"
    },
    {
      nome: "Ana Carolina Prates",
      linkedin: "https://www.linkedin.com/in/ana-carolina-trindade-prates-275489181"
    },
    {
      nome: "Ana Carolina Schneider",
      linkedin: "https://www.linkedin.com/in/ana-carolina-schneider-longo"
    },
    {
      nome: "Ana Maria Varela",
      linkedin: "https://www.linkedin.com/in/ana-maria-varela-a176a51ba/"
    },
    {
      nome: "Antonio Couto",
      linkedin: "https://www.linkedin.com/in/antonio-couto-548223297/"
    },
    {
      nome: "Antonio Cordovil",
      linkedin: "https://www.linkedin.com/in/antonio-cordovil-2ba127114"
    },
    {
      nome: "Antonio Rocha",
      linkedin: ""
    },
    {
      nome: "Alvaro Borges",
      linkedin: "https://www.linkedin.com/in/alvaro-borges-875a68180/"
    },
    {
      nome: "Artur Daher",
      linkedin: "https://www.linkedin.com/in/artur-daher-moura-284a67306/"
    },
    {
      nome: "Beatriz de Paula",
      linkedin: "https://www.linkedin.com/in/beatriz-c-n-de-paula-90b63a196/"
    },
    {
      nome: "Beatriz Ribeiro",
      linkedin: "https://www.linkedin.com/in/beatriz-delecrode-lopes-sut-ribeiro-b90535234/"
    },
    {
      nome: "Bernardo Mendes",
      linkedin: "https://www.linkedin.com/in/bernardo-mendes-811930226/"
    },
    {
      nome: "Bernardo Reis",
      linkedin: "https://www.linkedin.com/in/bernardo-gla-reis/"
    },
    {
      nome: "Bernardo Soares",
      linkedin: "https://www.linkedin.com/in/bernardo-afonso-soares/"
    },
    {
      nome: "Breno França",
      linkedin: "https://www.linkedin.com/in/breno-ben-pivoto-alves-franca-3a07a926b/"
    },
    {
      nome: "Bruno Jardim",
      linkedin: "https://linkedin.com/in/brunojardim"
    },
    {
      nome: "Bruno Ramos",
      linkedin: "https://www.linkedin.com/in/bruno-abtibol-ramos-016503200/"
    },
    {
      nome: "Bruna Machado",
      linkedin: "https://www.linkedin.com/in/bruna-machado-b9401a1b0/"
    },
    {
      nome: "Camila Kneitz",
      linkedin: "https://www.linkedin.com/in/camilakneitz/"
    },
    {
      nome: "Carolina Blank",
      linkedin: "https://www.linkedin.com/in/carolina-blank-93064323b/"
    },
    {
      nome: "Carolina Kircher",
      linkedin: "https://www.linkedin.com/in/carolina-kircher-hersk/"
    },
    {
      nome: "Catarina Lobo",
      linkedin: "https://www.linkedin.com/in/catarina-lobo-602285285/"
    },
    {
      nome: "Chiara Ambram",
      linkedin: "https://www.linkedin.com/in/chiara-matteoni-ambram-29a362273/"
    },
    {
      nome: "Cláudio dos Anjos",
      linkedin: ""
    },
    {
      nome: "Conrado van Erven",
      linkedin: "https://linkedin.com/in/conrado-van-erven-8aa086182"
    },
    {
      nome: "Daniel Kaczelnik",
      linkedin: "https://www.linkedin.com/in/danielkaczelnik/"
    },
    {
      nome: "Daniel Pulitini",
      linkedin: "https://www.linkedin.com/in/daniel-pulitini/"
    },
    {
      nome: "David Medeiros",
      linkedin: "https://www.linkedin.com/in/davidmedeirosecon/"
    },
    {
      nome: "Davi Gusmão",
      linkedin: "https://linkedin.com/in/davigusmao"
    },
    {
      nome: "Eduardo Aché",
      linkedin: "https://www.linkedin.com/in/eduardo-ach%C3%A9-864164217/"
    },
    {
      nome: "Eduardo Alcofra",
      linkedin: "https://www.linkedin.com/in/eduardo-alcofra-tocantins-a22a53253/"
    },
    {
      nome: "Eduardo Berardo",
      linkedin: "https://www.linkedin.com/in/eduardo-berardo-a91856234/"
    },
    {
      nome: "Erick Werneck",
      linkedin: "https://www.linkedin.com/in/erick-werneck-91a573235/"
    },
    {
      nome: "Felipe Dalcomuni",
      linkedin: "https://www.linkedin.com/in/felipe-dalcomuni-302075272/"
    },
    {
      nome: "Felipe Dib",
      linkedin: "https://www.linkedin.com/in/felipe-dib-020bba32a/"
    },
    {
      nome: "Felipe Elgarten",
      linkedin: "https://www.linkedin.com/in/felipe-elgarten/"
    },
    {
      nome: "Felipe Estima",
      linkedin: "https://www.linkedin.com/in/felipe-estima-3b82b8231/"
    },
    {
      nome: "Felipe Jatahy",
      linkedin: "https://www.linkedin.com/in/felipe-jatahy-1b22421a8/"
    },
    {
      nome: "Felipe Nolasco",
      linkedin: "https://www.linkedin.com/in/felipe-nolasco-637712295/"
    },
    {
      nome: "Felipe Pires",
      linkedin: "https://www.linkedin.com/in/felipe-pires-595a11329/"
    },
    {
      nome: "Felipe Queiroz",
      linkedin: "https://www.linkedin.com/in/felipequeirozc/"
    },
    {
      nome: "Felipe Rocha",
      linkedin: "https://www.linkedin.com/in/felipe-rocha-4bb96520a/"
    },
    {
      nome: "Fernanda Nogueira",
      linkedin: "https://www.linkedin.com/in/fernandalopesnogueira/"
    },
    {
      nome: "Francisco Brito",
      linkedin: "https://www.linkedin.com/in/francisco-de-filippo-brito-455b352b5/"
    },
    {
      nome: "Francisco Siqueira",
      linkedin: "https://www.linkedin.com/in/franciscosiq/"
    },
    {
      nome: "Frederico Coelho",
      linkedin: "https://www.linkedin.com/in/frederico-morgado-coelho-79a603141/"
    },
    {
      nome: "Frederico Perlott",
      linkedin: "https://www.linkedin.com/in/frederico-perlott-ramos-509415186"
    },
    {
      nome: "Gabriel Ambram",
      linkedin: "https://www.linkedin.com/in/gabriel-ambram-185424252/"
    },
    {
      nome: "Gabriel Arcalji",
      linkedin: "https://www.linkedin.com/in/gabriel-arcalji-ab35402a6/"
    },
    {
      nome: "Gabriel Chebar",
      linkedin: "https://www.linkedin.com/in/gabriel-moretta-5b7486201/"
    },
    {
      nome: "Gabriel Correa",
      linkedin: ""
    },
    {
      nome: "Gabriel da Cunha",
      linkedin: ""
    },
    {
      nome: "Gabriel Dalbone",
      linkedin: "https://www.linkedin.com/in/gabriel-dalbone-115b77181"
    },
    {
      nome: "Gabriel Drubi",
      linkedin: "https://www.linkedin.com/in/gabrieldrubi/"
    },
    {
      nome: "Gabriel Franco",
      linkedin: "https://www.linkedin.com/in/gabriel-franco-59bb20292/"
    },
    {
      nome: "Gabriel Marques",
      linkedin: "https://www.linkedin.com/in/gabriel-marques-554a802aa/"
    },
    {
      nome: "Gabriel Stanger",
      linkedin: "https://www.linkedin.com/in/gabriel-stanger/"
    },
    {
      nome: "Gabriela Bentolila",
      linkedin: "https://www.linkedin.com/in/gabriela-bentolila-de-andrade-24b88a2a2/"
    },
    {
      nome: "Gabriela Geller",
      linkedin: "https://www.linkedin.com/in/gabrielageller/"
    },
    {
      nome: "Gabriela Sigelmann",
      linkedin: "https://www.linkedin.com/in/gabriela-sigelmann-8a29bb309/"
    },
    {
      nome: "Giovanni Jobim",
      linkedin: "https://www.linkedin.com/in/giovanni-jobim-798528207/"
    },
    {
      nome: "Giullia Borilo",
      linkedin: "https://www.linkedin.com/in/giullia-borilo-5143a8251/"
    },
    {
      nome: "Guilherme Gruzman",
      linkedin: "https://www.linkedin.com/in/guilherme-gruzman-3b2188320/"
    },
    {
      nome: "Gustavo Cherman",
      linkedin: "https://www.linkedin.com/in/gustavo-cherman-725927216/"
    },
    {
      nome: "Gustavo Saramago",
      linkedin: ""
    },
    {
      nome: "Gustavo Telles",
      linkedin: "https://www.linkedin.com/in/gustavo-telles-demenezes/"
    },
    {
      nome: "Igor Burchardt",
      linkedin: "https://www.linkedin.com/in/igor-burchardt/"
    },
    {
      nome: "Isadora Valle",
      linkedin: "https://www.linkedin.com/mwlite/in/isadora-valle-8847471a4"
    },
    {
      nome: "João Bernardo Oliveira",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-bernardo-oliveira-083552218/"
    },
    {
      nome: "João Cottas",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-cottas-teixeira-036b81223/"
    },
    {
      nome: "João Eduardo Tupinambá",
      linkedin: "https://www.linkedin.com/in/joao-eduardo-negri-tupinamba/"
    },
    {
      nome: "João Felipe Siqueira",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-felipe-l-siqueira/"
    },
    {
      nome: "João Henrique Raimundo",
      linkedin: ""
    },
    {
      nome: "João Paulo Carvalho",
      linkedin: "https://linkedin.com/in/joaopaulocarvalho"
    },
    {
      nome: "João Pedro Aquino",
      linkedin: "https://linkedin.com/in/joaopedroaquino"
    },
    {
      nome: "João Pedro Botelho",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-botelho-a8018b283/"
    },
    {
      nome: "João Pedro Cunha",
      linkedin: "https://www.linkedin.com/in/joao-pedro-khair-cunha/"
    },
    {
      nome: "João Pedro Goes",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-goes-365b18182/"
    },
    {
      nome: "João Pedro Souza",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-oliveira-de-souza/"
    },
    {
      nome: "João Pedro Tesserolli",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-tesserolli-9423a1204/"
    },
    {
      nome: "João Pedro van Erven",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-van-erven-b15a171b9/"
    },
    {
      nome: "João Pedro Veiga",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-veiga-b6020821a/"
    },
    {
      nome: "João Rafael Santillo",
      linkedin: "https://linkedin.com/in/joaorafaelsantillo"
    },
    {
      nome: "João Vitor Faveret",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-vitor-faveret-cavalcanti-28183822a/"
    },
    {
      nome: "João Vitor Moura",
      linkedin: "https://www.linkedin.com/in/joaovitormouragoncalves/"
    },
    {
      nome: "Jonathas Ferreira",
      linkedin: "https://www.linkedin.com/in/jonathas-ferreira-931667220/"
    },
    {
      nome: "José Carlos Bolonhez",
      linkedin: "https://www.linkedin.com/in/jos%C3%A9-carlos-bolonhez-223072182"
    },
    {
      nome: "Julia Abreu",
      linkedin: "https://www.linkedin.com/in/juliaabreu12/"
    },
    {
      nome: "Julia Camargo",
      linkedin: "https://www.linkedin.com/in/julia-camargo-7186b121b/"
    },
    {
      nome: "Julia Pareto",
      linkedin: "https://www.linkedin.com/in/julia-pareto/"
    },
    {
      nome: "Julia Toledano",
      linkedin: "https://www.linkedin.com/in/julia-toledano-59a440248/"
    },
    {
      nome: "Juliana Soska",
      linkedin: "https://www.linkedin.com/in/juliana-costa-soska-2327021b2/"
    },
    {
      nome: "Larissa Rubio",
      linkedin: "https://www.linkedin.com/in/larissa-rubio-74aa23174"
    },
    {
      nome: "Leonardo Fonseca",
      linkedin: "https://www.linkedin.com/in/leonardo-fonseca-62010a175/"
    },
    {
      nome: "Linda de Cás",
      linkedin: "https://www.linkedin.com/in/linda-bruno-da-c%C3%A1s-a1429420b/"
    },
    {
      nome: "Lucas Bacellar",
      linkedin: "https://www.linkedin.com/in/lucas-bacellar/"
    },
    {
      nome: "Lucas Caúla",
      linkedin: "https://www.linkedin.com/in/lucas-ca%C3%BAla-b17169215/"
    },
    {
      nome: "Lucas Esch",
      linkedin: "https://www.linkedin.com/in/lucas-esch-87672a300/"
    },
    {
      nome: "Lucas Falcomato",
      linkedin: "https://www.linkedin.com/in/lucas-falcomato-b558b5224/"
    },
    {
      nome: "Lucas Machado",
      linkedin: "https://www.linkedin.com/in/lucasmachadocr/"
    },
    {
      nome: "Lucas Mendes",
      linkedin: "https://www.linkedin.com/in/lucas-azevedo-mendes-486335320/"
    },
    {
      nome: "Lucas Molter",
      linkedin: "https://www.linkedin.com/in/lucas-matos-molter/"
    },
    {
      nome: "Lucca Mothe",
      linkedin: "https://www.linkedin.com/in/lucca-emery-mothe-bb2b242b1/"
    },
    {
      nome: "Lucca Sanchez",
      linkedin: "https://linkedin.com/in/luccasanchez"
    },
    {
      nome: "Luciana Freitas",
      linkedin: "https://www.linkedin.com/in/luciana-freitas-b42285248/"
    },
    {
      nome: "Luisa Brandão",
      linkedin: "https://linkedin.com/in/luisabrandao"
    },
    {
      nome: "Luiz Felipe Bolonhez",
      linkedin: "https://linkedin.com/in/luizfelipebolonhez"
    },
    {
      nome: "Luiz Leonardos",
      linkedin: "https://linkedin.com/in/luizleonardos"
    },
    {
      nome: "Manuela Baggio",
      linkedin: "https://www.linkedin.com/in/manuela-lobato-5287b823b/"
    },
    {
      nome: "Manuela Fróes",
      linkedin: "https://www.linkedin.com/in/manuela-fr%C3%B3es-859949211/"
    },
    {
      nome: "Manuella Tuffani",
      linkedin: "https://www.linkedin.com/in/manuella-tuffani-11199720b/"
    },
    {
      nome: "Marcos Antonio Filho",
      linkedin: ""
    },
    {
      nome: "Maria Beatriz Pedrosa",
      linkedin: "https://www.linkedin.com/in/maria-beatriz-pedrosa-a93367149"
    },
    {
      nome: "Maria Clara Mano",
      linkedin: "https://www.linkedin.com/in/maria-clara-mano-599a64213/"
    },
    {
      nome: "Maria Clara Werneck",
      linkedin: "https://www.linkedin.com/in/maria-clara-werneck-138030176/"
    },
    {
      nome: "Maria Eduarda Lima",
      linkedin: "https://www.linkedin.com/in/maria-eduarda-lima-a40b6614b/"
    },
    {
      nome: "Maria Fernanda Leuzinger",
      linkedin: "https://www.linkedin.com/in/maria-fernanda-leuzinger-4a5319249/"
    },
    {
      nome: "Maria Paula Abbade",
      linkedin: "https://www.linkedin.com/in/maria-paula-abbade-684376262/"
    },
    {
      nome: "Mariana Finkelsztain",
      linkedin: "https://www.linkedin.com/in/mariana-nigri-finkelsztain-8b859a238/"
    },
    {
      nome: "Mariana Martins",
      linkedin: "https://www.linkedin.com/in/mariana-nascimento-martins-212880234/"
    },
    {
      nome: "Marina Göbel",
      linkedin: "https://www.linkedin.com/in/marinagobeldallocchio-2208b2146/"
    },
    {
      nome: "Mateus Soares",
      linkedin: "https://www.linkedin.com/in/mateus-soares-7565621a8/"
    },
    {
      nome: "Matheus Liberato",
      linkedin: "https://www.linkedin.com/in/matheus-liberato-1705"
    },
    {
      nome: "Matheus Machado",
      linkedin: "https://www.linkedin.com/in/matheus-machado01/"
    },
    {
      nome: "Matheus Salim",
      linkedin: "https://www.linkedin.com/in/matheus-salim-tavares-02645516a"
    },
    {
      nome: "Michel Said Nigri",
      linkedin: "https://www.linkedin.com/in/michelsaidnigri/"
    },
    {
      nome: "Miguel Cordeiro",
      linkedin: "https://www.linkedin.com/in/miguel-cordeiro-8bb664196/"
    },
    {
      nome: "Nicholas Gontijo",
      linkedin: "https://www.linkedin.com/in/nicholas-gontijo-alexander-574888210/"
    },
    {
      nome: "Nicola Martins",
      linkedin: "https://www.linkedin.com/in/nicola-martins/"
    },
    {
      nome: "Paula Alheira",
      linkedin: "https://www.linkedin.com/in/paula-alheira-9381ba256/"
    },
    {
      nome: "Paulo Rebouças",
      linkedin: "https://www.linkedin.com/in/paulo-rebou%C3%A7as/"
    },
    {
      nome: "Pedro Acioli",
      linkedin: "https://www.linkedin.com/in/pedro-acioli-8b6b72225/"
    },
    {
      nome: "Pedro Alves",
      linkedin: "https://www.linkedin.com/in/pedro-alves747/"
    },
    {
      nome: "Pedro Arthur Bevilaqua",
      linkedin: "https://www.linkedin.com/in/pedro-arthur-bevilaqua/"
    },
    {
      nome: "Pedro Bustamante",
      linkedin: "https://linkedin.com/in/pedrobustamante"
    },
    {
      nome: "Pedro Frossard",
      linkedin: "https://www.linkedin.com/in/pedro-frossard/"
    },
    {
      nome: "Pedro Guedes",
      linkedin: "https://www.linkedin.com/in/pedro-guedes-6b3189156/"
    },
    {
      nome: "Pedro Henrique Santana",
      linkedin: "https://www.linkedin.com/in/pedro-henrique-santana-5189171a1/"
    },
    {
      nome: "Pedro Land",
      linkedin: "https://www.linkedin.com/in/pedro-land-231b07186"
    },
    {
      nome: "Pedro Mansur",
      linkedin: ""
    },
    {
      nome: "Pedro Moreira",
      linkedin: "https://br.linkedin.com/in/moreiracpedro"
    },
    {
      nome: "Pedro Muricy",
      linkedin: "https://www.linkedin.com/in/pedro-leal-muricy-3a3839217/"
    },
    {
      nome: "Pedro Rocha",
      linkedin: "https://www.linkedin.com/in/pedro-rocha-2856211b4/"
    },
    {
      nome: "Pedro Salles",
      linkedin: "https://www.linkedin.com/in/pedro-salles1/"
    },
    {
      nome: "Pedro Tabach",
      linkedin: "https://www.linkedin.com/in/pedro-tabach-a1b437245/"
    },
    {
      nome: "Philip Medley",
      linkedin: "https://www.linkedin.com/in/philip-medley-b0a682245/"
    },
    {
      nome: "Rafael Alcure",
      linkedin: "https://www.linkedin.com/in/rafael-alcure-b64180210/"
    },
    {
      nome: "Rafael Assed",
      linkedin: "https://www.linkedin.com/in/rafael-assed-de-carvalho-640056208/"
    },
    {
      nome: "Rafael Maia",
      linkedin: "https://www.linkedin.com/in/rafael-maia-273a7920b"
    },
    {
      nome: "Rafael Queiroz",
      linkedin: "https://www.linkedin.com/in/rafael-queiroz-222a6b1ba/"
    },
    {
      nome: "Rafael Werneck",
      linkedin: "https://www.linkedin.com/in/rafael-werneck-957081244/"
    },
    {
      nome: "Ragnar Chaves",
      linkedin: "https://www.linkedin.com/in/ragnar-chaves-4bbb16174/"
    },
    {
      nome: "Ramiro Monarcha",
      linkedin: "https://www.linkedin.com/in/ramiro-monarcha-59488b1b4/"
    },
    {
      nome: "Raylla Aquino",
      linkedin: "https://www.linkedin.com/in/raylla-aquino-353557134"
    },
    {
      nome: "Renan Holanda",
      linkedin: "https://www.linkedin.com/in/renan-holanda-411589133/"
    },
    {
      nome: "Rodrigo Borges",
      linkedin: ""
    },
    {
      nome: "Rodrigo Dale",
      linkedin: "https://www.linkedin.com/in/rodrigo-dale-526628321"
    },
    {
      nome: "Rodrigo Freitas",
      linkedin: "https://www.linkedin.com/in/rodrigo-dvfreitas-puc-rio-economia/"
    },
    {
      nome: "Rodrigo Maximiliano",
      linkedin: ""
    },
    {
      nome: "Rodrigo Rocha",
      linkedin: "https://linkedin.com/in/rodrigorocha"
    },
    {
      nome: "Rodrigo Tavares",
      linkedin: "https://www.linkedin.com/in/rodrigo-tavares-382759231"
    },
    {
      nome: "Sofia Rocha",
      linkedin: "https://www.linkedin.com/in/sofia-rocha-83028028a/"
    },
    {
      nome: "Stefano Vinci",
      linkedin: "https://www.linkedin.com/in/stefano-vinci-b7b557280/"
    },
    {
      nome: "Thiago Nasseh",
      linkedin: "https://www.linkedin.com/in/thiagonasseh/"
    },
    {
      nome: "Thomas Campos",
      linkedin: "https://www.linkedin.com/in/thomas-campos-/"
    },
    {
      nome: "Thomas Mosley",
      linkedin: "https://www.linkedin.com/in/thomas-viana-mosley-4655b0212/"
    },
    {
      nome: "Thomaz Hadba",
      linkedin: "https://www.linkedin.com/in/thomaz-hadba-25724618a/"
    },
    {
      nome: "Vanessa Rocha",
      linkedin: "https://www.linkedin.com/in/vanessa-rocha-ba61a0164"
    },
    {
      nome: "Vinícius Abreu",
      linkedin: "https://www.linkedin.com/in/vinicius-abreuu/"
    },
    {
      nome: "Vitor Schmidt",
      linkedin: "https://linkedin.com/in/vitorschmidt"
    },
    {
      nome: "Vivian Balthazar",
      linkedin: ""
    }
  ].sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PageHeader 
          title="Alumni"
          subtitle="Conheça os ex-membros da Liga de Mercado Financeiro PUC-Rio e suas trajetórias profissionais"
        />
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {alumni.map((person, index) => (
                  <div key={index} className="bg-transparent p-4 flex items-center justify-between">
                    <h3 className="font-semibold text-financial-primary text-base whitespace-nowrap overflow-hidden text-ellipsis flex-1 mr-3">
                      {person.nome}
                    </h3>
                    {person.linkedin && (
                      <a 
                        href={person.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0"
                        aria-label={`LinkedIn de ${person.nome}`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
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

export default Alumni;
