import { Linkedin, Instagram, Youtube } from 'lucide-react';
import Map from './Map';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/lmfpucrio/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/liga-de-mercado-financeiro-puc-rio/posts/?feedView=all", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@ligademercadofinanceiropuc9171", label: "YouTube" },
    { 
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.6 0-.36.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.78.24 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.421-1.02.599-1.56.3z"/>
        </svg>
      ), 
      href: "https://open.spotify.com/show/2PyAm8MYxUzX4snUoroP2X", 
      label: "Spotify" 
    }
  ];

  return (
    <footer className="bg-financial-primary text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Map Section - 35% width */}
            <div className="lg:w-[35%]">
              <h4 className="text-xl font-semibold mb-4">Nossa Localização</h4>
              <Map />
              <p className="text-white/80 text-sm mt-2">
                Rua Marquês de São Vicente, 225 – Gávea, Rio de Janeiro – RJ
              </p>
            </div>

            {/* Content Section - 65% width */}
            <div className="lg:w-[65%] flex flex-col justify-center items-center text-center">
              {/* Brand Section */}
              <div className="mb-8">
                <div className="flex items-center justify-center mb-6">
                  {/* IMAGEM CORRIGIDA */}
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/bf0ea220-04d5-4166-beb4-3944bc12069f.png`}
                    alt="LMF PUC-Rio" 
                     className="h-[200px] w-auto"
                  />
                </div>
              </div>

              {/* Contact Email */}
              <div className="mb-8">
                <p className="text-white text-lg">
                  Fale conosco - lmfpucrio@gmail.com
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white hover:text-financial-accent transition-colors group"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="text-center">
            <div className="text-white/60 text-sm">
              Copyright © 2025 LMF PUC-Rio · Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
