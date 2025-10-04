import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { caseStudiesData } from "@/data/caseStudiesData";

const CaseStudies = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.15);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight">
              Case Studies
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2">
              Our clients around the world are achieving enduring change in their capabilities and performance. 
              Leading with technology, we partner with them to see new potential for growth, innovate to net zero, and 
              build capabilities across their entire organization, creating impact that goes beyond financial and 
              operational performance improvements. Here's what that looks like.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section 
          ref={elementRef as React.RefObject<HTMLElement>}
          className={`container mx-auto px-4 sm:px-6 pb-8 sm:pb-12 md:pb-16 lg:pb-20 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {caseStudiesData.map((study) => (
              <Link key={study.id} to={`/case-studies/${study.id}`}>
                <Card 
                  className="group cursor-pointer border border-border hover:border-foreground transition-all duration-300 overflow-hidden hover:shadow-lg"
                >
                  <CardContent className="p-0">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-3 sm:p-4 md:p-5">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1.5 sm:mb-2 md:mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 md:mb-4 line-clamp-3 leading-relaxed">
                      {study.summary}
                    </p>
                    <div className="flex flex-col gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-muted-foreground">
                      <span>{study.date}</span>
                      <span className="font-medium">{study.industry}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
