import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      language: "Spanish",
      rating: 5,
      text: "In just 6 months, I went from basic Spanish to confidently presenting to our Latin American clients. The personalized approach made all the difference!"
    },
    {
      name: "Marcus Johnson",
      role: "Software Engineer",
      language: "German",
      rating: 5,
      text: "The flexible scheduling and practical focus helped me land my dream job in Berlin. Couldn't have done it without this expert guidance!"
    },
    {
      name: "Emma Rodriguez",
      role: "Travel Blogger",
      language: "Japanese",
      rating: 5,
      text: "Learning Japanese seemed impossible until I found this program. The cultural insights combined with language skills were invaluable for my travels."
    },
    {
      name: "David Kim",
      role: "Business Owner",
      language: "French",
      rating: 5,
      text: "Excellent teaching methodology and genuine care for student progress. Now I can negotiate confidently with French suppliers."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            What My Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real success stories from learners who achieved their language goals through dedicated training.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium mt-1">
                    Learned {testimonial.language}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-6 shadow-soft">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};