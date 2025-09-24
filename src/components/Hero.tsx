import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-language-learning.jpg";
import dadlogo from '@/assets/dadlogo.png'

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
            {/* <div className="relative overflow-hidden rounded-2xl shadow-soft"> */}
              <img 
                src={dadlogo} 
                alt="Language learning session with diverse students" 
                className="w-full h-[500px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
            {/* </div> */}
            
            {/* Floating stats cards */}
            {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-soft">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div> */}
            
            {/* <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent">4.9★</div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};