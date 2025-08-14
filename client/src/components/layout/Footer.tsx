import { Link } from 'wouter';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/subscribe', { email });
      setEmail('');
      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter!",
      });
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/">
              <div className="flex items-center space-x-2 mb-6 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold text-xl">
                  B
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">Barkat Bio Fuel</h3>
                </div>
              </div>
            </Link>
            <p className="text-white/80 mb-6">
              Pioneering bioenergy solutions through sustainable agricultural waste management.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-white/80 hover:text-white transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="text-white/80 hover:text-white transition-colors">About Us</a></Link></li>
              <li><Link href="/products"><a className="text-white/80 hover:text-white transition-colors">Products</a></Link></li>
              <li><Link href="/operations"><a className="text-white/80 hover:text-white transition-colors">Operations</a></Link></li>
              <li><Link href="/benefits"><a className="text-white/80 hover:text-white transition-colors">Benefits</a></Link></li>
              <li><Link href="/contact"><a className="text-white/80 hover:text-white transition-colors">Contact</a></Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-white/60" />
                <a href="tel:+918699995913" className="text-white/80 hover:text-white transition-colors">+91 8699995913</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-white/60" />
                <a href="mailto:info@barkatbiofuels.com" className="text-white/80 hover:text-white transition-colors">info@barkatbiofuels.com</a>
              </li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Subscribe</h4>
            <p className="text-white/80 mb-4">
              Stay updated with our latest news and developments.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                required 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-foreground"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className="bg-secondary hover:bg-secondary-dark transition-colors px-4 rounded-r-md disabled:opacity-50"
                disabled={isSubmitting}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            &copy; {currentYear} Barkat Bio Fuel. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="/privacy-policy"><a className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></Link>
            <Link href="/terms-of-service"><a className="text-white/60 hover:text-white transition-colors">Terms of Service</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
