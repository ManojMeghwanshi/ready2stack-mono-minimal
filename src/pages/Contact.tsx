import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";
import mapPlaceholder from "@/assets/map-placeholder.jpg";

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  
  // Edit content directly here
  const heading = "We'd love to chat about working together for the future.";
  const email = "palak@studio1to10.com";
  const address = "Alchemy Digital\n130 Borough High Street\nLondon, SE1 1LB\nUnited Kingdom";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section 
          ref={elementRef as React.RefObject<HTMLElement>}
          className={`container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border bg-background">
            {/* Left - Contact Information */}
            <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center border-r-0 lg:border-r border-border">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 sm:mb-12 leading-tight">
                {heading}
              </h1>
              
              <div className="space-y-8 sm:space-y-10">
                <div>
                  <h3 className="text-xs uppercase tracking-wider mb-2 opacity-60">Email</h3>
                  <a 
                    href={`mailto:${email}`}
                    className="text-base sm:text-lg hover:opacity-60 transition-opacity"
                  >
                    {email}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider mb-2 opacity-60">Office Address</h3>
                  <address className="text-base sm:text-lg not-italic leading-relaxed whitespace-pre-line">
                    {address}
                  </address>
                </div>
              </div>
            </div>

            {/* Right - Map */}
            <div className="relative h-[400px] lg:h-auto bg-muted">
              <img 
                src={mapPlaceholder} 
                alt="Location map" 
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <MapPin className="w-12 h-12 text-primary" fill="currentColor" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
