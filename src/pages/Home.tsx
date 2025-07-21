import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Shield, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-seniors.jpg";
import ev04Image from "@/assets/ev04-device.jpg";
import ev05Image from "@/assets/ev05-device.jpg";

const Home = () => {
  const testimonials = [
    {
      text: "Thanks to Swift Response, I feel safe walking in my garden again.",
      author: "Mrs. Daniels",
      rating: 5
    },
    {
      text: "My dad wears his EV-05 every day. It gives us peace of mind.",
      author: "T. Mokoena",
      rating: 5
    },
    {
      text: "The team was kind, fast, and helpful. Highly recommend.",
      author: "Mr. Arendse",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Stay Safe. Stay Independent.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Empowering South Africa's elderly with reliable emergency response devices
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="text-lg">
              Make an Enquiry
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Emergency Devices</h2>
            <p className="text-xl text-muted-foreground">
              Trusted technology for peace of mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <img 
                  src={ev04Image} 
                  alt="EV-04 Emergency Device" 
                  className="w-48 h-48 object-cover mx-auto rounded-lg mb-4"
                />
                <CardTitle className="text-2xl">EV-04 Home Unit</CardTitle>
                <CardDescription className="text-base">
                  Reliable emergency alert system for your home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 24/7 monitoring service</li>
                  <li>• Easy one-button activation</li>
                  <li>• Long-range coverage</li>
                  <li>• Battery backup included</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <img 
                  src={ev05Image} 
                  alt="EV-05 Wearable Device" 
                  className="w-48 h-48 object-cover mx-auto rounded-lg mb-4"
                />
                <CardTitle className="text-2xl">EV-05 Wearable</CardTitle>
                <CardDescription className="text-base">
                  Portable emergency pendant for on-the-go safety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Waterproof design</li>
                  <li>• Comfortable to wear</li>
                  <li>• GPS tracking capability</li>
                  <li>• Long battery life</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="cta" size="lg">
                Get Your Device Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-primary rounded-full p-4 mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Protection</h3>
              <p className="text-muted-foreground text-sm">Round-the-clock monitoring and support</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-primary rounded-full p-4 mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Peace of Mind</h3>
              <p className="text-muted-foreground text-sm">Confidence for you and your family</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-primary rounded-full p-4 mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Expert Care</h3>
              <p className="text-muted-foreground text-sm">Professional emergency response team</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-primary rounded-full p-4 mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Trusted Service</h3>
              <p className="text-muted-foreground text-sm">Proven track record since 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real stories from real people
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-secondary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Feel Safer?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families who trust Swift Response for their safety
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              Enquire Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;