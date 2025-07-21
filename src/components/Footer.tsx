import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-8 px-4 mt-16">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Cape Farms, Cape Town, South Africa</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@swift-response.co.za</span>
          </div>
        </div>
        
        <div className="border-t border-border pt-4">
          <p className="text-sm text-muted-foreground">
            Proudly protecting lives since 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;