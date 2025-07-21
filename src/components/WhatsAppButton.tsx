import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/27678314120" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button variant="whatsapp" size="icon" className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;