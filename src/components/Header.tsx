import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-base sm:text-lg md:text-xl font-bold tracking-tight">
          Ready 2 Stack
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <a href="#technical" className="text-sm lg:text-base text-foreground hover:opacity-60 transition-opacity font-medium">Home</a>
          <a href="#about" className="text-sm lg:text-base text-foreground hover:opacity-60 transition-opacity font-medium">
            About
          </a>
          <a href="#resources" className="text-sm lg:text-base text-foreground hover:opacity-60 transition-opacity font-medium">Contact Us</a>
        </div>

        {/* Contact Button */}
        <Link to="/case-studies">
          <Button variant="default" className="px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm rounded-3xl">Case Studies</Button>
        </Link>
      </nav>
    </header>;
};
export default Header;