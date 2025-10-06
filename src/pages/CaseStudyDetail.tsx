import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

interface CaseStudy {
  id: string;
  title: string;
  subtitle?: string | null;
  description: string;
  category: string;
  image_url: string;
  challenge?: string | null;
  solution?: string | null;
  results?: string | null;
  metrics?: any;
  testimonial?: any;
  additional_images?: string[] | null;
  rich_content?: string | null;
  created_at: string;
}

const CaseStudyDetail = () => {
  const { id } = useParams();
  const { elementRef, isVisible } = useScrollAnimation(0.1);
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchCaseStudy();
    }
  }, [id]);

  const fetchCaseStudy = async () => {
    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (!error && data) {
      setCaseStudy(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <p className="text-center">Loading case study...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow page-content pb-96">
        {/* Back Navigation */}
        <section className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10">
          <Link to="/case-studies">
            <Button variant="ghost" className="gap-2 hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
        </section>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
              <span className="font-medium">{caseStudy.category}</span>
              <span>•</span>
              <span>{new Date(caseStudy.created_at).toLocaleDateString()}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight">
              {caseStudy.title}
            </h1>
            
            {/* Subtitle/Summary */}
            {caseStudy.subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 md:mb-12">
                {caseStudy.subtitle}
              </p>
            )}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 md:mb-12">
              {caseStudy.description}
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[16/9] overflow-hidden rounded-lg bg-muted">
              <img 
                src={caseStudy.image_url} 
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section 
          ref={elementRef as React.RefObject<HTMLElement>}
          className={`container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
            {/* Rich Content */}
            {caseStudy.rich_content && (
              <div 
                className="rich-text-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: caseStudy.rich_content }}
              />
            )}

            {/* Legacy content sections (shown if rich_content is not available) */}
            {!caseStudy.rich_content && (
              <>
                {/* Challenge/Problem */}
                {caseStudy.challenge && (
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 tracking-tight">
                      The Challenge
                    </h2>
                    <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
                        {caseStudy.challenge}
                      </p>
                    </div>
                  </div>
                )}

                {/* Solution */}
                {caseStudy.solution && (
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 tracking-tight">
                      Our Solution
                    </h2>
                    <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>
                )}

                {/* Additional Images */}
                {caseStudy.additional_images && caseStudy.additional_images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {caseStudy.additional_images.map((img, index) => (
                      <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                        <img 
                          src={img} 
                          alt={`${caseStudy.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Results */}
                {caseStudy.results && (
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 tracking-tight">
                      The Results
                    </h2>
                    <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
                        {caseStudy.results}
                      </p>
                      {caseStudy.metrics && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                          {Array.isArray(caseStudy.metrics) && caseStudy.metrics.map((metric: any, index: number) => (
                            <div key={index} className="border border-border rounded-lg p-4 sm:p-6">
                              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary">
                                {metric.value}
                              </div>
                              <div className="text-xs sm:text-sm text-muted-foreground">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Client Testimonial */}
                {caseStudy.testimonial && (
                  <div className="border-l-4 border-primary pl-6 sm:pl-8 py-2">
                    <blockquote className="text-base sm:text-lg md:text-xl italic leading-relaxed mb-4 text-foreground">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="text-sm sm:text-base text-muted-foreground">
                      <div className="font-semibold">{caseStudy.testimonial.author}</div>
                      <div>{caseStudy.testimonial.position}</div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
