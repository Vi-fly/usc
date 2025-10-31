import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "#programs" },
    { name: "Skills", href: "#skills" },
    { name: "Training", href: "#training" },
    { name: "Events", href: "#events" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 pt-3 ${
        isScrolled ? "pb-3" : "pb-0"
      }`}
    >
      <div 
        className={`mx-auto px-6 py-4 rounded-3xl transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className={`text-2xl font-bold tracking-tight transition-colors ${
              isScrolled 
                ? "text-foreground group-hover:text-primary" 
                : "text-white group-hover:text-primary"
            }`}>
              Ultimate Survival Camp
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled 
                    ? "text-foreground/80 hover:text-primary" 
                    : "text-white/90 hover:text-primary"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className={`border-2 transition-all ${
                isScrolled 
                  ? "border-foreground hover:bg-foreground hover:text-background text-foreground bg-background" 
                  : "!border-white !text-white bg-transparent hover:!bg-white hover:!text-background"
              }`}
            >
              Book Camp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-6 pb-6 animate-fade-in ${
            isScrolled ? "" : "bg-background/10 rounded-2xl p-4"
          }`}>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`hover:text-primary transition-colors py-2 ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                className={`border-2 mt-4 ${
                  isScrolled 
                    ? "border-foreground text-foreground bg-background" 
                    : "!border-white !text-white bg-transparent hover:!bg-white hover:!text-background"
                }`}
              >
                Book Camp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
