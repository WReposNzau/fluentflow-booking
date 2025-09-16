import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import serviceIcon1 from "@/assets/service-icon-1.jpg";
import serviceIcon2 from "@/assets/service-icon-2.jpg"; 
import serviceIcon3 from "@/assets/service-icon-3.jpg";

export const Services = () => {
  const services = [
    {
      title: "Cross-Cultural Communication Training",
      description: "Comprehensive programs designed to bridge cultural gaps and enhance international business communication.",
      features: ["Cultural Intelligence Development", "Business Etiquette Training", "Intercultural Negotiation Skills", "Global Team Collaboration"],
      price: "Starting from $200/session",
      image: serviceIcon1,
      popular: false
    },
    {
      title: "Corporate Language Training",
      description: "Tailored language programs for organizations looking to enhance their team's communication capabilities.",
      features: ["Customized Curriculum", "Group & Individual Sessions", "Industry-Specific Vocabulary", "Progress Tracking & Assessment"],
      price: "Starting from $150/session",
      image: serviceIcon2,
      popular: true
    },
    {
      title: "Personal Language Coaching",
      description: "One-on-one personalized language coaching sessions focused on your specific goals and learning style.",
      features: ["Personalized Learning Plan", "Flexible Scheduling", "Conversation Practice", "Cultural Context Learning"],
      price: "Starting from $80/session",
      image: serviceIcon3,
      popular: false
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-accent">Professional Services</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary">
            Discover Our Training Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore comprehensive language and cross-cultural training solutions designed to meet your specific needs and goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative hover:shadow-accent transition-all duration-300 hover:-translate-y-2 ${service.popular ? 'ring-2 ring-accent shadow-accent' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-accent px-4 py-2 rounded-full text-sm font-semibold text-primary">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 rounded-2xl overflow-hidden shadow-soft">
                  <img 
                    src={service.image} 
                    alt={`${service.title} service illustration`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-12 py-3 text-primary border-primary hover:bg-primary hover:text-white">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};