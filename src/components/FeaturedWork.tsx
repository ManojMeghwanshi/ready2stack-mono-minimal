import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    description: "Modernizing the digital shopping experience",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Financial Dashboard Application",
    description: "Real-time analytics and insights",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Healthcare Mobile App",
    description: "Patient-first digital healthcare",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "SaaS Product Launch",
    description: "Scaling from MVP to enterprise",
    image: "/placeholder.svg"
  }
];

const FeaturedWork = () => {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
        Featured Work ↘
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study) => (
          <Card 
            key={study.id} 
            className="group cursor-pointer border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <CardContent className="p-0">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground group-hover:text-background/70">
                    {study.description}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 flex-shrink-0 ml-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
