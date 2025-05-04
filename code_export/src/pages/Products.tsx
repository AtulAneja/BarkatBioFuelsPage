import { useEffect } from 'react';
import { CheckCircle2, Zap, Factory, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Products = () => {
  useEffect(() => {
    document.title = "Products - Barkat Bio Fuels";
  }, []);

  return (
    <>
      {/* Products Hero */}
      <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Products</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            High-quality biomass pellets made from agricultural residues for sustainable energy production
          </p>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-heading font-bold text-3xl mb-6 text-primary">Biomass Pellets</h2>
              <p className="mb-6 text-muted-foreground">
                Our state-of-the-art facilities process rice husk and paddy straw into biomass pellets 
                ideal for co-firing in thermal power plants, aligning with India's mandate for 5% biomass 
                blending in coal-based power generation.
              </p>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-dark">Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center border-b border-gray-200 pb-3">
                      <div className="w-1/2 font-medium">Calorific Value:</div>
                      <div className="w-1/2">3,200–3,800 kcal/kg</div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-200 pb-3">
                      <div className="w-1/2 font-medium">Moisture Content:</div>
                      <div className="w-1/2">10–14%</div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-200 pb-3">
                      <div className="w-1/2 font-medium">Ash Content:</div>
                      <div className="w-1/2">~10–12%</div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-1/2 font-medium">Density:</div>
                      <div className="w-1/2">~650 kg/m³</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex items-center bg-primary bg-opacity-10 p-4 rounded-lg">
                <CheckCircle2 className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
                <p className="text-foreground">
                  We focus on high-quality biomass fuel production for efficient power generation.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1611281386223-21def14fc3a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Biomass pellets" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Raw Materials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Raw Materials</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We source agricultural residues directly from farmers, providing them with additional income while 
              preventing harmful open-field burning practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="bg-primary text-white">
                <CardTitle>Rice Husk</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1563746924237-f81457e48c2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Rice husk" 
                    className="rounded-md h-48 object-cover mb-4"
                  />
                  <p className="text-muted-foreground">
                    Rice husk is the hard protective covering of rice grains. It is a major agricultural byproduct 
                    in rice-producing regions of North India and an excellent raw material for our biomass pellets due to 
                    its high calorific value and availability.
                  </p>
                  <div className="bg-neutral-lightest p-4 rounded-md">
                    <h4 className="font-medium text-primary-dark mb-2">Key Properties:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>High silica content</li>
                      <li>Low moisture when properly dried</li>
                      <li>Minimal pre-processing required</li>
                      <li>Abundant availability after harvest seasons</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-primary text-white">
                <CardTitle>Paddy Straw</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1588732807335-2165a155b748?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Paddy straw" 
                    className="rounded-md h-48 object-cover mb-4"
                  />
                  <p className="text-muted-foreground">
                    Paddy straw is a significant agricultural residue that is often burned in fields, causing severe 
                    air pollution. By collecting and processing this material, we help reduce air pollution while creating 
                    a valuable energy resource.
                  </p>
                  <div className="bg-neutral-lightest p-4 rounded-md">
                    <h4 className="font-medium text-primary-dark mb-2">Key Properties:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Good energy content when processed</li>
                      <li>Requires more preparation than rice husk</li>
                      <li>Seasonally available in large quantities</li>
                      <li>Processing prevents harmful field burning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Applications</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Our biomass pellets are versatile and can be used across multiple industries and settings
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-medium text-lg mb-2 text-primary-dark">Power Generation</h3>
              <p className="text-muted-foreground">
                Used for co-firing in thermal power plants, reducing coal consumption and greenhouse gas emissions. 
                Supports India's 5% biomass blending mandate for coal-based power generation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-medium text-lg mb-2 text-primary-dark">Industrial Applications</h3>
              <p className="text-muted-foreground">
                Utilized in industrial boilers and furnaces as a clean-burning, sustainable fuel alternative. 
                Provides consistent heat output for various manufacturing processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-medium text-lg mb-2 text-primary-dark">Residential Heating</h3>
              <p className="text-muted-foreground">
                Efficient and eco-friendly option for residential heating systems and small-scale applications. 
                Burns cleaner than traditional wood with higher energy efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Quality Standards</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We maintain strict quality control throughout our production process
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary-dark">Our Quality Commitment</h3>
                <p className="mb-6 text-muted-foreground">
                  At Barkat Bio Fuels, quality is not just a standard but a commitment. Every batch of biomass pellets 
                  undergoes rigorous testing to ensure it meets both regulatory requirements and our own exacting standards.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-2" />
                    <p className="text-muted-foreground">
                      Commitment to industry best practices for biomass fuel production
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-2" />
                    <p className="text-muted-foreground">
                      Regular testing of calorific value, moisture, and ash content
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-2" />
                    <p className="text-muted-foreground">
                      Consistent pellet size and density for optimal burning efficiency
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-2" />
                    <p className="text-muted-foreground">
                      Proper storage and handling to maintain product integrity
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-primary-dark">Testing Parameters</h3>
                
                <div className="bg-neutral-lightest p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary-dark mb-2">Physical Properties</h4>
                      <Separator className="my-2" />
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Length</span>
                          <span className="font-medium">≤ 30mm</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Diameter</span>
                          <span className="font-medium">6-8mm</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Bulk Density</span>
                          <span className="font-medium">~650 kg/m³</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium text-primary-dark mb-2">Chemical Properties</h4>
                      <Separator className="my-2" />
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Calorific Value</span>
                          <span className="font-medium">3,200–3,800 kcal/kg</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Moisture Content</span>
                          <span className="font-medium">10–14%</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Ash Content</span>
                          <span className="font-medium">~10–12%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
