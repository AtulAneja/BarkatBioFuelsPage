import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const isActive = (path: string) => {
    return location === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Operations', path: '/operations' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 w-full bg-white ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Company name */}
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <img 
              src="/barkat-logo.jpeg" 
              alt="Barkat Bio Fuel Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="font-heading font-bold text-primary text-xl md:text-2xl">Barkat Bio Fuel</h1>
              <p className="text-xs md:text-sm text-muted-foreground hidden md:block">Empowering Clean Energy</p>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            link.name === 'Contact Us' ? (
              <Link key={index} href={link.path}>
                <a className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  {link.name}
                </a>
              </Link>
            ) : (
              <Link key={index} href={link.path}>
                <a className={`${isActive(link.path) ? 'text-primary font-medium' : 'text-muted-foreground'} hover:text-primary transition-colors`}>
                  {link.name}
                </a>
              </Link>
            )
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-muted-foreground hover:text-primary focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white mobile-menu-transition`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {navLinks.map((link, index) => (
            link.name === 'Contact Us' ? (
              <Link key={index} href={link.path}>
                <a 
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              </Link>
            ) : (
              <Link key={index} href={link.path}>
                <a 
                  className={`${isActive(link.path) ? 'text-primary font-medium' : 'text-muted-foreground'} hover:text-primary py-2 transition-colors`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              </Link>
            )
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
