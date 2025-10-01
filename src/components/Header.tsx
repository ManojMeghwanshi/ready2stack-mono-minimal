import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
          Ready 2 Stack
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <a href="#technical" className="text-sm lg:text-base text-foreground hover:opacity-60 transition-opacity font-medium">Home</a>
          <a href="#about" className="text-sm lg:text-base text-foreground hover:opacity-60 transition-opacity font-medium">
            About
          </a>
          <a href="#resources" className="text-sm lg:text-base text-foreground hover:opacity-60 transition-opacity font-medium">Contact Us</a>
        </div>

        {/* Contact Button */}
        <Button variant="default" className="px-4 sm:px-6 md:px-8 text-sm sm:text-base rounded-3xl">Case Studies</Button>
      </nav>
    </header>;
};
export default Header;