const Partners = () => {
  // PASSO 1: Removendo a barra do início de cada caminho de logo, olá programador!
  const partners = [
    { name: 'B3', logo: 'lovable-uploads/ad360d8a-8887-427f-b117-35e3b61be608.png' },
    { name: 'BTG Pactual', logo: 'lovable-uploads/9c6534dc-caa4-4f45-9bb5-33ef621ae316.png' },
    { name: 'Charles River', logo: 'lovable-uploads/8f7202ae-7cad-4cae-800e-37315706e548.png', isWide: true },
    { name: 'Constellation Asset Management', logo: 'lovable-uploads/86d740f3-2ffb-4c26-909e-e8fe28a6f7cc.png', isWide: true },
    { name: 'Icatu Vanguarda', logo: 'lovable-uploads/734c39fb-ee22-49d8-98e1-f580172facd6.png', isWide: true },
    { name: 'JGP Asset Management', logo: 'lovable-uploads/a7fc8abc-a9b1-453f-a42d-fab1f740de0d.png', isWide: true },
    { name: 'Opportunity', logo: 'lovable-uploads/38ec2bf8-971f-4080-8b7e-d5a38a773b17.png', isWide: true },
    { name: 'Sharp Capital', logo: 'lovable-uploads/fbb57043-4d30-470d-8971-bc6e5cffb5b1.png' },
    { name: 'Squadra Investimentos', logo: 'lovable-uploads/39b64c59-1843-47d9-9bab-366f8cb102a8.png', isWide: true },
    { name: 'Tenax Capital', logo: 'lovable-uploads/e9ac7891-be29-44a7-babd-a967c81ce21b.png' },
    { name: 'Truxt Investimentos', logo: 'lovable-uploads/44bc199c-a18d-4d2e-9a57-1880d16425e9.png' },
    { name: 'Vinci Compass', logo: 'lovable-uploads/1f41757c-add6-49ae-9dd8-1c1a211dcdf9.png' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-financial-primary mb-8">
              Parceiros
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-24 hover-scale">
                {/* Alterando o src da imagem */}
                <img 
                  src={`${import.meta.env.BASE_URL}${partner.logo}`}
                  alt={partner.name}
                  className={partner.isWide ? "h-8 max-w-full object-contain" : "h-12 max-w-full object-contain"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;