import { useEffect } from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Benefits = () => {
  useEffect(() => {
    document.title = "Benefits - Barkat Bio Fuel";
  }, []);

  return (
    <>
      {/* Benefits Hero */}
      <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Benefits</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Creating value for the environment, farmers, and energy producers
          </p>
        </div>
      </div>

      {/* Environmental Benefits */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Environmental Impact</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              By converting agricultural waste into energy, we help reduce open-field burning, 
              thereby decreasing air pollution and greenhouse gas emissions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Clean environment" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Reduced Air Pollution</h3>
                    <p className="text-muted-foreground">
                      By providing farmers with an alternative to burning crop residues, we help reduce the
                      particulate matter and harmful gases released into the atmosphere, improving air quality
                      across North India.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Lower Carbon Emissions</h3>
                    <p className="text-muted-foreground">
                      Biomass pellets have a significantly lower carbon footprint compared to fossil fuels.
                      When used for power generation, they reduce net carbon dioxide emissions, helping
                      combat climate change.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Resource Conservation</h3>
                    <p className="text-muted-foreground">
                      By utilizing agricultural waste, we help conserve natural resources and reduce the
                      demand for fossil fuels, contributing to more sustainable energy production.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Cleaner Air Quality</h3>
                    <p className="text-muted-foreground">
                      Our operations directly contribute to improved air quality in surrounding regions,
                      reducing the seasonal smog that affects millions of people in North India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Economic Benefits</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Our operations provide farmers with an additional revenue stream for their 
              agricultural residues, fostering economic growth in rural areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Additional Farmer Income</h3>
                    <p className="text-muted-foreground">
                      Farmers receive payment for agricultural residues that would otherwise have no economic
                      value, creating a significant additional income stream without affecting their primary crops.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Rural Employment</h3>
                    <p className="text-muted-foreground">
                      Our operations create jobs in collection, transportation, processing, and distribution,
                      providing employment opportunities in rural areas where they are most needed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Energy Independence</h3>
                    <p className="text-muted-foreground">
                      By producing domestic renewable energy, we help reduce India's dependence on imported
                      fossil fuels, improving energy security and reducing the trade deficit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary rounded-full p-2 mr-4 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Local Economic Development</h3>
                    <p className="text-muted-foreground">
                      Our business model stimulates local economies through direct investment, job creation,
                      and increased economic activity in the agricultural sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Farming community" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Policy Support and Compliance */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Policy Support & Compliance</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Aligning with India's renewable energy targets and environmental regulations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-primary text-white">
                <CardTitle>Government Initiatives</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Our operations align with and support multiple government initiatives aimed at 
                  promoting renewable energy and reducing agricultural waste burning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">5% biomass co-firing mandate for thermal power plants</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">National Clean Air Programme (NCAP)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Promotion of Agricultural Mechanization for In-Situ Management of Crop Residue</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-primary text-white">
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Our products and operations meet all relevant regulatory standards and requirements, 
                  ensuring legal compliance and quality assurance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Industry quality standards for biomass fuel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Environmental clearances and permits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Quality standards for biomass fuels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-primary text-white">
                <CardTitle>Climate Goals</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Our operations contribute directly to India's climate change mitigation goals and 
                  international commitments on emissions reduction.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Support for India's Nationally Determined Contributions (NDCs)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Contribution to renewable energy targets</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Greenhouse gas emission reduction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Industry Benefits</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Advantages for power plants and other industrial consumers
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v8m0 8v4m4-16-1.4 1.4M5.4 5.4 4 4m16 8h-4m-8 0H4m1.4 9.6L5.4 18.6M18.6 18.6l1.4 1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
                  </svg>
                </div>
                <h3 className="font-heading font-medium text-lg mb-2 text-primary-dark">Renewable Alternative</h3>
                <p className="text-muted-foreground">
                  Provides a reliable renewable energy source that can partially replace fossil fuels in existing facilities.
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
                  </svg>
                </div>
                <h3 className="font-heading font-medium text-lg mb-2 text-primary-dark">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  Helps thermal power plants meet the 5% biomass co-firing mandate and other environmental regulations.
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m16.2 7.8-2 6.3-6.4 2.1 2-6.3z"/>
                  </svg>
                </div>
                <h3 className="font-heading font-medium text-lg mb-2 text-primary-dark">Consistent Quality</h3>
                <p className="text-muted-foreground">
                  Our biomass pellets offer consistent quality and specifications, ensuring reliable performance.
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/>
                    <path d="M3 8c2.8 0 5 2.2 5 5s-2.2 5-5 5"/>
                    <path d="M21 8c-2.8 0-5 2.2-5 5s2.2 5 5 5"/>
                  </svg>
                </div>
                <h3 className="font-heading font-medium text-lg mb-2 text-primary-dark">Cost Stability</h3>
                <p className="text-muted-foreground">
                  Less price volatility compared to fossil fuels, offering more predictable long-term energy costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
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

export default Benefits;
