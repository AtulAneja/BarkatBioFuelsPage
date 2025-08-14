import { useEffect } from 'react';
import { Check, PhoneCall } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = "About Us - Barkat Bio Fuel";
  }, []);

  return (
    <>
      {/* About Hero */}
      <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">About Us</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Pioneering sustainable bioenergy solutions for a cleaner, greener future
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1526383103106-edad26ae7572?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sustainable farming practices" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6 text-primary">Who We Are</h2>
              <p className="mb-6 text-foreground">
                Barkat Bio Fuel is a pioneering bioenergy company based in North India, dedicated to converting agricultural 
                residues—primarily rice husk and paddy straw—into high-quality biomass pellets. These pellets serve as 
                sustainable fuel for thermal power plants, contributing to cleaner energy production and reducing air pollution.
              </p>
              <p className="mb-6 text-foreground">
                Founded with a vision to address the twin challenges of agricultural waste management and clean energy production, 
                our company has quickly established itself as a reliable supplier of biomass pellets that meet international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              We aim to provide eco-friendly energy solutions by utilizing agricultural waste, thereby supporting 
              India's renewable energy goals and promoting rural economic development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6 text-primary-dark">Our Key Objectives</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-lg text-primary-dark">Environmental Sustainability</h4>
                    <p className="text-muted-foreground">Reducing air pollution and greenhouse gas emissions by eliminating agricultural waste burning</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-lg text-primary-dark">Rural Development</h4>
                    <p className="text-muted-foreground">Creating additional income opportunities for farmers by utilizing agricultural residues</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-lg text-primary-dark">Energy Innovation</h4>
                    <p className="text-muted-foreground">Contributing to India's renewable energy targets through biomass utilization</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sustainable energy production" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Leadership</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Meet the visionaries behind Barkat Bio Fuel who lead our mission for sustainable energy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Director 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="bg-primary-dark h-32 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white opacity-30" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-1">Sukhtaran Singh Bath</h3>
                <p className="text-muted-foreground mb-4">Director</p>
                <div className="flex items-center mb-2">
                  <PhoneCall className="h-5 w-5 text-primary mr-2" />
                  <a href="tel:+918699995913" className="text-muted-foreground hover:text-primary transition-colors">+91 8699995913</a>
                </div>
              </div>
            </div>
            
            {/* Director 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="bg-primary-dark h-32 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white opacity-30" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-1">Vaibhav Nagori</h3>
                <p className="text-muted-foreground mb-4">Director</p>
                <div className="flex items-center mb-2">
                  <PhoneCall className="h-5 w-5 text-primary mr-2" />
                  <a href="tel:+919888886635" className="text-muted-foreground hover:text-primary transition-colors">+91 9888886635</a>
                </div>
              </div>
            </div>
            
            {/* Key Personnel */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="bg-primary-dark h-32 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white opacity-30" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-1">Pujeet Ahuja</h3>
                <p className="text-muted-foreground mb-4">Key Personnel</p>
                <div className="flex items-center mb-2">
                  <PhoneCall className="h-5 w-5 text-primary mr-2" />
                  <a href="tel:+919888171175" className="text-muted-foreground hover:text-primary transition-colors">+91 9888171175</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Vision & Values</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary-dark">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a leading provider of sustainable bioenergy solutions in India, creating 
                a positive impact on the environment and rural communities while contributing to 
                the nation's energy security and climate goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary-dark">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly seek innovative approaches to improve our processes, product quality, 
                and environmental impact, staying at the forefront of bioenergy technology.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary-dark">Sustainability</h3>
              <p className="text-muted-foreground">
                Environmental sustainability is at the heart of everything we do, from sourcing raw 
                materials to production processes and final product usage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary-dark">Community</h3>
              <p className="text-muted-foreground">
                We believe in creating shared value with the communities we operate in, particularly 
                supporting farmers and creating rural employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-foreground text-xl mb-6 font-medium italic">
              "Barkat Bio Fuel represents our commitment to sustainable development, creating value for farmers while contributing to India's clean energy future."
            </p>
            <p className="text-primary font-heading font-medium">- The Directors, Barkat Bio Fuel</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
