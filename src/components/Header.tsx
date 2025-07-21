import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className="bg-accent text-accent-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@swift-response.co.za</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+27 67 831 4120</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="bg-background border-b border-border py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Swift Response
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;