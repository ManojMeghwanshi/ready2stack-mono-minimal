import { useState, useEffect } from "react";
import { Search, TrendingUp, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

const ProcessSteps = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.15);
  const [steps, setSteps] = useState([
    {
      number: "01",
      icon: Search,
      title: "Research",
      description: "Related to research."
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Analyze",
      description: "Related to analyze."
    },
    {
      number: "03",
      icon: FileText,
      title: "Case Study",
      description: "Related to case study."
    }
  ]);

  useEffect(() => {
    const fetchContent = async () => {
      const { data } = await supabase
        .from('site_content')
        .select('*')
        .in('key', [
          'process_step1_title', 'process_step1_description',
          'process_step2_title', 'process_step2_description',
          'process_step3_title', 'process_step3_description'
        ]);

      if (data) {
        const contentMap: Record<string, string> = {};
        data.forEach(item => {
          contentMap[item.key] = item.content;
        });

        setSteps([
          {
            number: "01",
            icon: Search,
            title: contentMap.process_step1_title || "Research",
            description: contentMap.process_step1_description || "Related to research."
          },
          {
            number: "02",
            icon: TrendingUp,
            title: contentMap.process_step2_title || "Analyze",
            description: contentMap.process_step2_description || "Related to analyze."
          },
          {
            number: "03",
            icon: FileText,
            title: contentMap.process_step3_title || "Case Study",
            description: contentMap.process_step3_description || "Related to case study."
          }
        ]);
      }
    };
    fetchContent();
  }, []);

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
