import { Link } from 'wouter';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Barkat Bio Fuels - Empowering Clean Energy from Agriculture";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Biomass pellets production" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white p-4 max-w-4xl">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-shadow">
            Empowering Clean Energy from Agriculture
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow">
            Converting agricultural residues into sustainable biomass pellets for a greener future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-6 rounded-md transition-colors text-base h-auto">
                Our Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="bg-white hover:bg-gray-100 text-primary font-medium px-6 py-6 rounded-md transition-colors text-base h-auto">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-neutral-medium text-lg">
              Barkat Bio Fuels is a pioneering bioenergy company based in North India, dedicated to converting agricultural 
              residues—primarily rice husk and paddy straw—into high-quality biomass pellets.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/about">
              <Button variant="outline" className="group">
                Learn More About Us 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Products</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-neutral-medium text-lg">
              We transform agricultural waste into high-quality biomass pellets for sustainable energy production
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1611281386223-21def14fc3a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Biomass pellets" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary-dark">Biomass Pellets</h3>
              <p className="mb-6 text-muted-foreground">
                Our state-of-the-art facilities process rice husk and paddy straw into biomass pellets ideal for co-firing 
                in thermal power plants, aligning with India's mandate for 5% biomass blending in coal-based power generation.
              </p>
              <Link href="/products">
                <Button className="group">
                  View Specifications <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Benefits</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-neutral-medium text-lg">
              Our solutions create value for the environment, farmers, and energy producers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-heading font-medium text-lg mb-2 text-primary-dark">Environmental Impact</h4>
              <p className="text-neutral-medium">
                Reduces air pollution from crop residue burning and lowers greenhouse gas emissions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-heading font-medium text-lg mb-2 text-primary-dark">Economic Benefits</h4>
              <p className="text-neutral-medium">
                Creates additional income for farmers and generates employment opportunities in rural areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-heading font-medium text-lg mb-2 text-primary-dark">Energy Innovation</h4>
              <p className="text-neutral-medium">
                Contributes to India's renewable energy targets and reduces dependence on imported fossil fuels.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/benefits">
              <Button variant="outline" className="group">
                Explore All Benefits
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-dark mb-6">Ready to Make a Difference?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Join us in our mission to create sustainable energy solutions and contribute to a cleaner environment.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
