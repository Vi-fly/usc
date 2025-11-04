import introVideo from "@/assets/intro.MP4?url";
import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll as EventListener);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  // Calculate parallax effect
  const getParallaxOffset = () => {
    if (!sectionRef.current) return 0;
    const rect = sectionRef.current.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollProgress = (scrollY + windowHeight - elementTop) / (windowHeight + rect.height);
    
    // Parallax effect: moves slower than scroll
    return Math.max(0, Math.min(1, scrollProgress)) * 50;
  };

  const parallaxOffset = getParallaxOffset();

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 px-4 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading - Above video */}
        <div className={`mb-8 text-center max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          <h2 
            className={`text-3xl font-bold text-foreground transition-all duration-700 delay-200 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            }`}
          >
            Experience the Adventure
          </h2>
        </div>

        <div 
          className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            transform: `translateY(${parallaxOffset * 0.3}px) scale(${isVisible ? 1 : 0.95})`,
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
          >
            <source
              src={introVideo}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Optional overlay gradient at the bottom for better text readability */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
          
          {/* Animated border glow effect on scroll */}
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-1000"
            style={{
              opacity: isVisible ? 0.3 : 0,
              boxShadow: isVisible 
                ? `0 0 40px hsl(var(--primary) / 0.4), inset 0 0 20px hsl(var(--primary) / 0.1)` 
                : 'none',
            }}
          />
        </div>

        {/* Description - Below video */}
        <div 
          ref={textRef}
          className={`mt-8 text-center max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <p 
            className={`text-lg text-muted-foreground transition-all duration-700 delay-700 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            }`}
          >
            Watch our survival camp in action. See how participants overcome challenges,
            learn essential skills, and transform in the wilderness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

