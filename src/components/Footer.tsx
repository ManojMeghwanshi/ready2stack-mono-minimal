import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Footer = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);
  const [cta, setCta] = useState("Let's Talk ↘");
  const [companyName, setCompanyName] = useState("Alchemy Digital");
  const [addressLine1, setAddressLine1] = useState("130 Borough High Street");
  const [addressLine2, setAddressLine2] = useState("London, SE1 1LB");

  useEffect(() => {
    const fetchContent = async () => {
      const { data } = await supabase
        .from('site_content')
        .select('*')
        .in('key', ['footer_cta', 'footer_company_name', 'footer_address_line1', 'footer_address_line2']);

      if (data) {
        data.forEach(item => {
          if (item.key === 'footer_cta') setCta(item.content);
          if (item.key === 'footer_company_name') setCompanyName(item.content);
          if (item.key === 'footer_address_line1') setAddressLine1(item.content);
          if (item.key === 'footer_address_line2') setAddressLine2(item.content);
        });
      }
    };
    fetchContent();
  }, []);
  return <footer ref={elementRef as React.RefObject<HTMLElement>} className={`bg-primary text-primary-foreground py-12 sm:py-16 md:py-20 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main CTA */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl mb-4 text-left font-light">
            {cta}
          </h2>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-12 sm:mb-16">
          {/* Left - Navigation Menu */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <a href="/" className="text-base sm:text-lg hover:opacity-60 transition-opacity w-fit">Home</a>
            <a href="/case-studies" className="text-base sm:text-lg hover:opacity-60 transition-opacity w-fit">Case Studies</a>
            <a href="/about" className="text-base sm:text-lg hover:opacity-60 transition-opacity w-fit">About</a>
            <a href="/contact" className="text-base sm:text-lg hover:opacity-60 transition-opacity w-fit">Contact Us</a>
            <Link to="/auth" className="text-sm opacity-60 hover:opacity-100 transition-opacity w-fit mt-4">Admin Login</Link>
          </div>

          {/* Right - Address */}
          <div className="flex flex-col gap-2 md:text-right">
            <p className="text-base sm:text-lg">{companyName}</p>
            <p className="text-base sm:text-lg">{addressLine1}</p>
            <p className="text-base sm:text-lg">{addressLine2}</p>
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