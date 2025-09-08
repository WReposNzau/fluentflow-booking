import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Video, BookOpen, Landmark } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Group Classes",
      description: "Interactive group sessions with 4-6 students for collaborative learning",
      features: ["Weekly 90-minute sessions", "Structured curriculum", "Peer interaction", "Affordable pricing"],
      // price: "From $45/session",
      highlight: false
    },
    {
      icon: Video,
      title: "1-on-1 Training",
      description: "Personalized language coaching tailored to your specific goals and pace",
      features: ["Customized lesson plans", "Flexible scheduling", "Focused attention", "Rapid progress"],
      // price: "From $85/hour",
      highlight: true
    },
    {
      icon: Landmark,
      title: "Corporate Training",
      description: "Accelerated programs for those who need to learn quickly",
      features: ["Daily sessions available", "Immersive approach", "Quick results", "Professional goals"],
      // price: "From $120/hour",
      highlight: false
    }
    // {
    //   icon: BookOpen,
    //   title: "Consultation Call",
    //   description: "Free 30-minute session to assess your needs and create a learning plan",
    //   features: ["Skill assessment", "Goal setting", "Learning plan", "Method recommendation"],
    //   price: "Free",
    //   highlight: false
    // }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Choose Your Learning Path</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you prefer group dynamics or personalized attention, I have the perfect program for your language learning journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-soft ${
                service.highlight ? 'ring-2 ring-primary shadow-soft' : ''
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-4">
                  {/* <div className="text-center">
                    <span className="text-2xl font-bold text-foreground">{service.price}</span>
                  </div> */}
                  
                  <Button 
                    variant={service.highlight ? "hero" : "outline"} 
                    className="w-full"
                  >
                    Schedule Free Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};