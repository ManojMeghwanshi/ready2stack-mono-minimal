import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [{
  id: 1,
  title: "E-Commerce Platform Redesign",
  description: "Modernizing the digital shopping experience",
  image: "/placeholder.svg",
  size: "large" // spans 2 columns
}, {
  id: 2,
  title: "Financial Dashboard Application",
  description: "Real-time analytics and insights",
  image: "/placeholder.svg",
  size: "small"
}, {
  id: 3,
  title: "Healthcare Mobile App",
  description: "Patient-first digital healthcare",
  image: "/placeholder.svg",
  size: "small"
}, {
  id: 4,
  title: "SaaS Product Launch",
  description: "Scaling from MVP to enterprise",
  image: "/placeholder.svg",
  size: "small"
}, {
  id: 5,
  title: "Brand Identity System",
  description: "Complete visual identity overhaul",
  image: "/placeholder.svg",
  size: "small"
}, {
  id: 6,
  title: "AI-Powered Analytics",
  description: "Machine learning insights platform",
  image: "/placeholder.svg",
  size: "large"
}];
const FeaturedWork = () => {
  return <section className="container mx-auto px-6 py-24 md:py-32">
      <h2 className="text-4xl mb-16 tracking-tight font-light md:text-7xl">
        Featured Work ↘
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
        {caseStudies.map(study => <Card 
            key={study.id} 
            className={`group cursor-pointer border border-border hover:border-foreground transition-all duration-300 overflow-hidden ${
              study.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            <CardContent className="p-0 h-full relative">
              <div className="absolute inset-0 bg-muted">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/70 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-background/80 text-sm">
                      {study.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 flex-shrink-0 ml-4 opacity-80" />
                </div>
              </div>
            </CardContent>
          </Card>)}
      </div>
    </section>;
};
export default FeaturedWork;