import { Instagram, MessageSquare, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-3 pb-3">
      <div className="bg-foreground text-background py-12 rounded-3xl">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold">Ultimate Survival Campsite</h3>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-background/70">
              <a href="#experiences" className="hover:text-background transition-colors">
                Experiences
              </a>
              <a href="#skills" className="hover:text-background transition-colors">
                Skills
              </a>
              <a href="#about" className="hover:text-background transition-colors">
                About
              </a>
              <a href="#events" className="hover:text-background transition-colors">
                Events
              </a>
              <a href="#contact" className="hover:text-background transition-colors">
                Contact
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com/usc.dailylife"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/918265892437"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href="https://youtube.com/@ultimatesurvivalcampsite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-background/10 text-center text-background/50 text-xs">
            <p>© 2025 Ultimate Survival Campsite. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
