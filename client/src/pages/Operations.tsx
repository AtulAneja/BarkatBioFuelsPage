import { useEffect } from 'react';
import { MapPin, Plus, Zap, HardDriveDownload } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Operations = () => {
  useEffect(() => {
    document.title = "Operations - Barkat Bio Fuels";
  }, []);

  return (
    <>
      {/* Operations Hero */}
      <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Operations</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            State-of-the-art facilities strategically located in North India's rice-producing regions
          </p>
        </div>
      </div>

      {/* Facility Highlights */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1589998035296-a09123f79adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Biomass processing facility" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6 text-primary">Facility Highlights</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Strategic Location</h3>
                    <p className="text-muted-foreground">
                      Our facilities are situated in North India's rice-producing regions, minimizing transportation costs and carbon footprint.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <Plus className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Production Capacity</h3>
                    <p className="text-muted-foreground">
                      Designed to meet the growing demand for biomass pellets, our facilities can process large volumes of agricultural residues efficiently.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Advanced Technology</h3>
                    <p className="text-muted-foreground">
                      Equipped with advanced machinery from Yulong Machineries for efficient processing, ensuring high-quality biomass pellets.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-light rounded-full p-2 mr-4 text-white h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <HardDriveDownload className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-lg text-primary-dark">Quality Control</h3>
                    <p className="text-muted-foreground">
                      Rigorous quality control measures ensure our biomass pellets meet industry standards and specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Production Process</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              From agricultural waste to high-quality biomass pellets in four efficient steps
            </p>
          </div>
          
          <Card className="bg-white p-8 shadow-md">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Step 1 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
                    <h3 className="font-heading font-medium text-lg mb-2 text-center text-primary-dark">Collection</h3>
                    <p className="text-muted-foreground text-center">
                      Agricultural residues are collected from local farmers, providing them with additional income.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-primary-light transform -translate-x-4"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
                    <h3 className="font-heading font-medium text-lg mb-2 text-center text-primary-dark">Processing</h3>
                    <p className="text-muted-foreground text-center">
                      Raw materials are cleaned, dried, and prepared for pelletization.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-primary-light transform -translate-x-4"></div>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
                    <h3 className="font-heading font-medium text-lg mb-2 text-center text-primary-dark">Pelletization</h3>
                    <p className="text-muted-foreground text-center">
                      Processed materials are compressed into high-density biomass pellets.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-primary-light transform -translate-x-4"></div>
                </div>
                
                {/* Step 4 */}
                <div>
                  <div className="flex flex-col items-center">
                    <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mb-4">4</div>
                    <h3 className="font-heading font-medium text-lg mb-2 text-center text-primary-dark">Distribution</h3>
                    <p className="text-muted-foreground text-center">
                      Quality-checked pellets are packaged and distributed to thermal power plants and other clients.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Process Details</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              A closer look at our state-of-the-art production process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary-dark">Collection & Preparation</h3>
              <img 
                src="https://images.unsplash.com/photo-1527847263472-aa5338d178b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Agriculture residue collection" 
                className="rounded-lg shadow-md w-full h-64 object-cover mb-6"
              />
              <p className="text-muted-foreground mb-4">
                The production process begins with the collection of agricultural residues like rice husk and paddy straw from local farmers. 
                This provides farmers with additional income while preventing harmful field burning practices.
              </p>
              <p className="text-muted-foreground mb-4">
                Once collected, the raw materials undergo initial processing:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Separation of impurities and foreign materials</li>
                <li>Drying to achieve optimal moisture content</li>
                <li>Size reduction to ensure uniform processing</li>
                <li>Storage in climate-controlled facilities until pelletization</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-primary-dark">Pelletization & Quality Control</h3>
              <img 
                src="https://images.unsplash.com/photo-1563422156298-c778a278f9a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Biomass pellet production" 
                className="rounded-lg shadow-md w-full h-64 object-cover mb-6"
              />
              <p className="text-muted-foreground mb-4">
                The prepared biomass material enters our advanced pelletizing machines, where it undergoes high-pressure compression 
                without the use of artificial binders or additives. The natural lignin in the biomass acts as a binder when heated.
              </p>
              <p className="text-muted-foreground mb-4">
                Our quality control process ensures consistent pellet quality:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Automated monitoring throughout the production cycle</li>
                <li>Regular sampling and laboratory testing</li>
                <li>Verification of calorific value, moisture, and ash content</li>
                <li>Packaging in moisture-resistant materials for long-term stability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Our Infrastructure</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Advanced facilities designed for efficient and sustainable production
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Raw material storage" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-heading font-medium text-lg mb-3 text-primary-dark">Storage Facilities</h3>
                <p className="text-muted-foreground">
                  Climate-controlled warehouses for both raw materials and finished products, ensuring 
                  quality preservation throughout the production cycle and seasonal availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Production line" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-heading font-medium text-lg mb-3 text-primary-dark">Production Units</h3>
                <p className="text-muted-foreground">
                  Advanced processing lines with Yulong machinery that handle everything from raw material 
                  preparation to final pelletization with optimal energy efficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Quality control lab" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-heading font-medium text-lg mb-3 text-primary-dark">Quality Control Lab</h3>
                <p className="text-muted-foreground">
                  On-site laboratory for continuous testing and quality assurance, equipped with modern 
                  instruments to verify product specifications and consistency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Our Supply Chain</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground mb-6 text-center">
                At Barkat Bio Fuels, we've developed an efficient and sustainable supply chain that maximizes value 
                for all stakeholders while minimizing environmental impact.
              </p>
              
              <div className="space-y-8 mt-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="bg-primary rounded-full min-w-12 h-12 flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="bg-neutral-lightest p-4 rounded-lg flex-grow">
                    <h3 className="font-heading font-medium text-lg text-primary-dark mb-2">Farmer Partnerships</h3>
                    <p className="text-muted-foreground">
                      We work directly with farmers to source agricultural residues, providing them fair compensation 
                      and creating a sustainable alternative to field burning.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="bg-primary rounded-full min-w-12 h-12 flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="bg-neutral-lightest p-4 rounded-lg flex-grow">
                    <h3 className="font-heading font-medium text-lg text-primary-dark mb-2">Local Processing</h3>
                    <p className="text-muted-foreground">
                      Our strategically located facilities minimize transportation distances, reducing both costs and 
                      carbon emissions while supporting local economies.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="bg-primary rounded-full min-w-12 h-12 flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="bg-neutral-lightest p-4 rounded-lg flex-grow">
                    <h3 className="font-heading font-medium text-lg text-primary-dark mb-2">Efficient Distribution</h3>
                    <p className="text-muted-foreground">
                      We've optimized our distribution network to deliver biomass pellets to power plants and other clients 
                      efficiently, ensuring timely supply and minimal environmental impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="bg-primary rounded-full min-w-12 h-12 flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div className="bg-neutral-lightest p-4 rounded-lg flex-grow">
                    <h3 className="font-heading font-medium text-lg text-primary-dark mb-2">Circular Economy</h3>
                    <p className="text-muted-foreground">
                      Our business model creates a circular economy where agricultural waste becomes valuable energy, 
                      creating economic opportunities while solving environmental challenges.
                    </p>
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

export default Operations;
