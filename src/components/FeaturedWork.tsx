import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import CustomCursor from "@/components/CustomCursor";
import { createPortal } from "react-dom";
import ecommerceImg from "@/assets/ecommerce-dark.jpg";
import financialImg from "@/assets/financial-dark.jpg";
import healthcareImg from "@/assets/healthcare-dark.jpg";
import saasImg from "@/assets/saas-dark.jpg";
import brandImg from "@/assets/brand-dark.jpg";

const caseStudies = [{
  id: 1,
  title: "E-Commerce Platform Redesign",
  description: "Modernizing the digital shopping experience",
  image: ecommerceImg,
  size: "large" // spans 2 columns
}, {
  id: 2,
  title: "Financial Dashboard Application",
  description: "Real-time analytics and insights",
  image: financialImg,
  size: "small"
}, {
  id: 3,
  title: "Healthcare Mobile App",
  description: "Patient-first digital healthcare",
  image: healthcareImg,
  size: "small"
}, {
  id: 4,
  title: "SaaS Product Launch",
  description: "Scaling from MVP to enterprise",
  image: saasImg,
  size: "small"
}, {
  id: 5,
  title: "Brand Identity System",
  description: "Complete visual identity overhaul",
  image: brandImg,
  size: "small"
}];
const FeaturedWork = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.15);
  const { isActive, position, handleMouseEnter, handleMouseLeave } = useCustomCursor();

  return (
    <>
      {createPortal(
        <CustomCursor isActive={isActive} x={position.x} y={position.y} />,
        document.body
      )}
      <section
    ref={elementRef as React.RefObject<HTMLElement>}
    className={`container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
  >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-12 sm:mb-16 tracking-tight font-light">
        Featured Work ↘
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[240px] sm:auto-rows-[280px]">
        {caseStudies.map(study => <Card 
            key={study.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`group cursor-none border border-border hover:border-foreground transition-all duration-300 overflow-hidden ${
              study.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            <CardContent className="p-0 h-full relative">
              <div className="absolute inset-0 bg-muted">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/70 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-background">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{study.title}</h3>
                    <p className="text-background/80 text-xs sm:text-sm">
                      {study.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ml-2 sm:ml-4 opacity-80" />
                </div>
              </div>
            </CardContent>
          </Card>)}
      </div>
    </section>
    </>
  );
};
export default FeaturedWork;