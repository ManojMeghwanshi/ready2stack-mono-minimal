import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Footer = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation(0.1);
  return <footer ref={elementRef as React.RefObject<HTMLElement>} className={`bg-primary text-primary-foreground py-12 sm:py-16 md:py-20 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main CTA */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl mb-4 text-left font-light">
            Let's Talk ↘
          </h2>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-12 sm:mb-16">
          {/* Left - Navigation Menu */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <a href="#about" className="text-base sm:text-lg hover:opacity-60 transition-opacity w-fit"></a>
            <a href="#work" className="text-base sm:text-lg hover:opacity-60 transition-opacity w-fit">Home</a>
            <a href="#careers" className="text-base sm:text-lg hover:opacity-60 transition-opacity w-fit">Case Studies</a>
            <a href="#contact" className="text-base sm:text-lg hover:opacity-60 transition-opacity w-fit">Contact Us
          </a>
            <a href="#cookies" className="text-base sm:text-lg hover:opacity-60 transition-opacity w-fit">About</a>
          </div>

          {/* Right - Address */}
          <div className="flex flex-col gap-2 md:text-right">
            <p className="text-base sm:text-lg">Alchemy Digital</p>
            <p className="text-base sm:text-lg">130 Borough High Street</p>
            <p className="text-base sm:text-lg">London, SE1 1LB</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-right">
          <p className="text-sm opacity-60">© 2025</p>
        </div>
      </div>
    </footer>;
};
export default Footer;