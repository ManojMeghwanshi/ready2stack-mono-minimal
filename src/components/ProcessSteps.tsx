import { Search, TrendingUp, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProcessSteps = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.15);
  
  // Edit content directly here
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Research",
      description: "Gathering insights and understanding the challenge"
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Analyze",
      description: "Identifying patterns and opportunities"
    },
    {
      number: "03",
      icon: FileText,
      title: "Case Study",
      description: "Showcasing outcomes and measurable success"
    }
  ];

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 tracking-tight text-center">
        Our Process
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="text-center group">
              <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 border-2 border-foreground rounded-full group-hover:bg-foreground transition-colors duration-300">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 group-hover:text-background transition-colors duration-300" />
              </div>
              <div className="text-xs sm:text-sm font-mono mb-2 sm:mb-3 text-muted-foreground">
                {step.number}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSteps;
