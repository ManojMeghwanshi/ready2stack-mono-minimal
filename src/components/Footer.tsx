const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Let's Talk ↘
          </h2>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left - Navigation Menu */}
          <div className="flex flex-col gap-4">
            <a 
              href="#about" 
              className="text-lg hover:opacity-60 transition-opacity w-fit"
            >
              About
            </a>
            <a 
              href="#work" 
              className="text-lg hover:opacity-60 transition-opacity w-fit"
            >
              Work
            </a>
            <a 
              href="#careers" 
              className="text-lg hover:opacity-60 transition-opacity w-fit"
            >
              Careers
            </a>
            <a 
              href="#contact" 
              className="text-lg hover:opacity-60 transition-opacity w-fit"
            >
              Contact
            </a>
            <a 
              href="#cookies" 
              className="text-lg hover:opacity-60 transition-opacity w-fit"
            >
              Cookie Settings
            </a>
          </div>

          {/* Right - Address */}
          <div className="flex flex-col gap-2 md:text-right">
            <p className="text-lg">Alchemy Digital</p>
            <p className="text-lg">130 Borough High Street</p>
            <p className="text-lg">London, SE1 1LB</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-right">
          <p className="text-sm opacity-60">© 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
