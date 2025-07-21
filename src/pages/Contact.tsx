import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your enquiry. We'll be in touch within 24 hours.",
    });
    setFormData({ fullName: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take the first step towards greater safety and independence? 
            We're here to help you find the perfect emergency response solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us an Enquiry</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your needs or ask any questions..."
                    rows={5}
                  />
                </div>
                
                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-secondary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-gradient-primary rounded-full p-2">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Call us directly for immediate assistance
                </p>
                <p className="text-lg font-semibold">+27 67 831 4120</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Available: Monday - Friday, 8AM - 6PM
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-secondary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-gradient-primary rounded-full p-2">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Send us an email for detailed enquiries
                </p>
                <p className="text-lg font-semibold">info@swift-response.co.za</p>
                <p className="text-sm text-muted-foreground mt-2">
                  We respond within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-secondary transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-gradient-primary rounded-full p-2">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Proudly serving Cape Town and surrounding areas
                </p>
                <p className="text-lg font-semibold">Cape Farms, Cape Town</p>
                <p className="text-lg font-semibold">South Africa</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-800">
                  <div className="bg-green-500 rounded-full p-2">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  WhatsApp Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 mb-4">
                  Get instant responses to your questions via WhatsApp
                </p>
                <a 
                  href="https://wa.me/27678314120" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Emergency?</h3>
          <p className="text-muted-foreground mb-6">
            If you're experiencing a medical emergency, please call emergency services immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="destructive" size="lg">
              Emergency: 10177
            </Button>
            <Button variant="outline" size="lg">
              Police: 10111
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;