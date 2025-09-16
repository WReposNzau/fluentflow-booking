import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-service-discovery.jpg";

export const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-medium text-accent">Julius Wambua Language & Cross-Cultural Trainers</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight"> 
                Discover Expert
                <span className="bg-gradient-accent bg-clip-text text-transparent block"> Language Training </span> 
                Services
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Connect with professional language and cross-cultural training services. Build bridges across cultures, enhance communication skills, and unlock global opportunities with expert guidance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-semibold">
                Explore Services
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Book Consultation
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">1000+</div>
                <div className="text-sm text-white/70">Clients Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-sm text-white/70">Countries Served</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <img 
                src={heroImage} 
                alt="Professional cross-cultural training session with diverse team" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating achievement cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-accent">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">98% Success</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-accent">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Expert Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};