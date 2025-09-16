import { Button } from "@/components/ui/button";
import dadlogo from "@/assets/dadlogo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
       
        <div className="flex items-center space-x-3">
            <img 
                src={dadlogo} 
                alt="Julius Wambua Language and Cross-Cultural Trainers logo" 
                className="w-12 h-12"
              />
          <span className="text-xl font-bold text-primary">Julius Wambua</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">Services</a>
          <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">About</a>
          <a href="#testimonials" className="text-foreground hover:text-accent transition-colors font-medium">Reviews</a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">Contact</a>
        </nav>
        
        
        <Button variant="booking" size="sm" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
          Discover Services
        </Button>
      </div>
    </header>
  );
};