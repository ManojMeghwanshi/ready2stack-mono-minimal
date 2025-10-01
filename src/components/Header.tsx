import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          Ready 2 Stack
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          <a 
            href="#technical" 
            className="text-foreground hover:opacity-60 transition-opacity font-medium"
          >
            Technical Info
          </a>
          <a 
            href="#about" 
            className="text-foreground hover:opacity-60 transition-opacity font-medium"
          >
            About
          </a>
          <a 
            href="#resources" 
            className="text-foreground hover:opacity-60 transition-opacity font-medium"
          >
            Resources
          </a>
        </div>

        {/* Contact Button */}
        <Button 
          variant="default"
          className="px-8"
        >
          Contact
        </Button>
      </nav>
    </header>
  );
};

export default Header;
