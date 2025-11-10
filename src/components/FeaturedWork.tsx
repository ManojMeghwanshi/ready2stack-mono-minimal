import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import CustomCursor from "@/components/CustomCursor";
import { createPortal } from "react-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  title: string;
  image_url: string;
}
const FeaturedWork = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const {
    elementRef,
    isVisible
  } = useScrollAnimation(0.15);
  const {
    isActive,
    position,
    handleMouseEnter,
    handleMouseLeave
  } = useCustomCursor();

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const { data, error } = await supabase
        .from('case_studies')
        .select('id, title, image_url')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) {
        console.error('Error fetching case studies:', error);
      } else {
        setCaseStudies(data || []);
      }
      setLoading(false);
    };

    fetchCaseStudies();
  }, []);
  if (loading) {
    return (
      <>
        {createPortal(<CustomCursor isActive={isActive} x={position.x} y={position.y} />, document.body)}
        <section ref={elementRef as React.RefObject<HTMLElement>} className={`container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-12 md:mb-16 tracking-tight font-light">Case Studies ↘</h2>
          <p className="text-muted-foreground">Loading case studies...</p>
        </section>
      </>
    );
  }

  if (caseStudies.length === 0) {
    return (
      <>
        {createPortal(<CustomCursor isActive={isActive} x={position.x} y={position.y} />, document.body)}
        <section ref={elementRef as React.RefObject<HTMLElement>} className={`container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-12 md:mb-16 tracking-tight font-light">Case Studies ↘</h2>
          <p className="text-muted-foreground">No case studies available yet.</p>
        </section>
      </>
    );
  }

  return <>
      {createPortal(<CustomCursor isActive={isActive} x={position.x} y={position.y} />, document.body)}
      <section ref={elementRef as React.RefObject<HTMLElement>} className={`container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-12 md:mb-16 tracking-tight font-light">Case Studies ↘</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px] md:auto-rows-[280px]">
        {caseStudies.map((study, index) => <Link 
            key={study.id} 
            to={`/case-studies/${study.id}`}
          >
            <Card 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
              className={`group cursor-none border border-border hover:border-foreground transition-all duration-300 overflow-hidden h-full ${index === 0 && caseStudies.length > 1 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <CardContent className="p-0 h-full relative">
                <div className="absolute inset-0 bg-muted">
                  <img src={study.image_url} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/70 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-background">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">{study.title}</h3>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="bg-background/10 text-background border-background/20 hover:bg-background/20 hover:text-background"
                      >
                        Read More
                      </Button>
                    </div>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 opacity-80" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>)}
      </div>
    </section>
    </>;
};
export default FeaturedWork;