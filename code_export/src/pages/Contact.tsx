import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { PhoneCall, Mail, MapPin, ClockIcon, Facebook, Twitter, Linkedin } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: 'Please select a subject.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us - Barkat Bio Fuels";
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly by phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Hero */}
      <div className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Reach out to learn more about our products and services
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-lightest">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-heading font-bold text-2xl mb-6 text-primary-dark">Get In Touch</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject *</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="farmer-inquiry">Farmer Collaboration</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your message" 
                            {...field} 
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-primary p-8 rounded-lg shadow-md text-white mb-8">
                <h2 className="font-heading font-bold text-2xl mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <PhoneCall className="h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h3 className="font-heading font-medium text-lg mb-1">Phone Numbers</h3>
                      <p className="mb-1">Sukhtaran Singh Bath: <a href="tel:+918699995913" className="hover:underline">+91 8699995913</a></p>
                      <p className="mb-1">Vaibhav Nagori: <a href="tel:+919888886635" className="hover:underline">+91 9888886635</a></p>
                      <p>Pujeet Ahuja: <a href="tel:+919888171175" className="hover:underline">+91 9888171175</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h3 className="font-heading font-medium text-lg mb-1">Email</h3>
                      <p><a href="mailto:info@barkatbiofuels.com" className="hover:underline">info@barkatbiofuels.com</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mt-1 mr-4" />
                    <div>
                      <h3 className="font-heading font-medium text-lg mb-1">Address</h3>
                      <p className="mb-0">North India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="font-heading font-bold text-2xl mb-6 text-primary-dark">Business Hours</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span className="text-muted-foreground">9:00 AM - 1:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-heading font-medium text-lg mb-4 text-primary-dark">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-neutral-lightest hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center text-primary-dark">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-neutral-lightest hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center text-primary-dark">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-neutral-lightest hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center text-primary-dark">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Find answers to common questions about our products and services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-medium text-lg text-primary-dark mb-2">What are biomass pellets?</h3>
                <p className="text-muted-foreground">
                  Biomass pellets are compressed organic matter made from agricultural residues like rice husk and paddy straw. 
                  They serve as a renewable fuel source for power generation and heating applications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-medium text-lg text-primary-dark mb-2">How can farmers benefit from your operations?</h3>
                <p className="text-muted-foreground">
                  Farmers can earn additional income by selling their agricultural residues to us instead of burning them in open fields. 
                  This creates a new revenue stream while helping reduce air pollution.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-medium text-lg text-primary-dark mb-2">What is the calorific value of your biomass pellets?</h3>
                <p className="text-muted-foreground">
                  Our biomass pellets have a calorific value ranging from 3,200 to 3,800 kcal/kg, making them suitable for various energy applications, 
                  particularly co-firing in thermal power plants.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-medium text-lg text-primary-dark mb-2">Do you provide transportation services for your products?</h3>
                <p className="text-muted-foreground">
                  Yes, we can arrange transportation of our biomass pellets to your facility. Please contact us for specific logistics arrangements 
                  and delivery options based on your location and requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading font-medium text-lg text-primary-dark mb-2">How do biomass pellets help reduce carbon emissions?</h3>
                <p className="text-muted-foreground">
                  Biomass pellets are carbon-neutral when sourced sustainably. The carbon released during combustion is offset by the carbon absorbed 
                  during plant growth. Additionally, they prevent emissions from open field burning of agricultural waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
