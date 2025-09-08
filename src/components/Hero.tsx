import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-language-learning.jpg";

export const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight"> 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Swahili </span> made simple with
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Expert </span> guidance
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Unlock the rhythm and beauty of Swahili. More than just words, you’ll gain the skills to connect deeply with people, culture, and traditions, while growing into a confident communicator
                 </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Consult on Email
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Consult on WhatsApp
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>1000+ Students Trained</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Learners from 20+ Nationalities</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-soft">
              <img 
                src={heroImage} 
                alt="Language learning session with diverse students" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-soft">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent">4.9★</div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};