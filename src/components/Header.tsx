import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'INÍCIO', href: '/' },
    { name: 'EQUIPE', href: '/equipe' },
    { name: 'SMF', href: '/smf' },
    { 
      name: 'PROJETOS', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'LMF CAST', href: '/lmf-cast' },
        { name: 'LMF JOURNAL', href: '/lmf-journal' },
      ]
    },
    { name: 'COMPETIÇÕES', href: '/competicoes' },
    { name: 'ALUMNI', href: '/alumni' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              {/* IMAGEM CORRIGIDA */}
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/35102ad3-160b-4b0a-ad07-6107490689ec.png`}
                alt="Liga LMF PUC-Rio" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centralized */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                >
                  {item.hasDropdown ? (
                    <span className="transition-colors duration-200 font-medium text-gray-700 hover:text-financial-accent cursor-pointer">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      to={item.href}
                      className={`transition-colors duration-200 font-medium flex items-center space-x-1 ${
                        isActive(item.href) 
                          ? 'text-financial-accent border-b-2 border-financial-accent' 
                          : 'text-gray-700 hover:text-financial-accent'
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-financial-accent transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Empty div to balance the layout */}
          <div className="hidden md:block w-20"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <div className={`h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <span className="text-gray-700 font-medium">{item.name}</span>
                  ) : (
                    <Link
                      to={item.href}
                      className={`transition-colors duration-200 font-medium ${
                        isActive(item.href) 
                          ? 'text-financial-accent' 
                          : 'text-gray-700 hover:text-financial-accent'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block text-gray-600 hover:text-financial-accent transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;