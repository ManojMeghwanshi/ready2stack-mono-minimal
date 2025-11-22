import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  
  // Edit content directly here
  const heading = "We'd love to chat about working together for the future.";
  const email = "palak@studio1to10.com";
  const address = "Ajmer, Rajasthan, India";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section 
          ref={elementRef as React.RefObject<HTMLElement>}
          className={`container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <div className="grid grid-cols-1 gap-0 border border-border bg-background">
            {/* Contact Information */}
            <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
