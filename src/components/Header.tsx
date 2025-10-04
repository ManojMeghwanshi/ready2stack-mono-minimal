import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-base sm:text-lg md:text-xl font-bold tracking-tight hover:opacity-60 transition-opacity">
          Ready 2 Stack
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link to="/" className="text-sm lg:text-base text-foreground hover:opacity-60 transition-opacity font-medium">Home</Link>
          <Link to="/about" className="text-sm lg:text-base text-foreground hover:opacity-60 transition-opacity font-medium">
            About
          </Link>
          <Link to="/contact" className="text-sm lg:text-base text-foreground hover:opacity-60 transition-opacity font-medium">Contact Us</Link>
        </div>

        {/* Contact Button */}
        <Link to="/case-studies">
          <Button variant="default" className="px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm rounded-3xl">Case Studies</Button>
        </Link>
      </nav>
    </header>;
};
export default Header;