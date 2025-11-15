import loadingGif from "@/assets/loading.gif";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show loading screen for minimum duration (e.g., 2 seconds)
    const minLoadingTime = 2000;
    // Maximum loading time (30 seconds)
    const maxLoadingTime = 30000;

    const startTime = Date.now();

    const minTimeout = setTimeout(() => {
      // After minimum time, check if page is loaded
      if (document.readyState === 'complete') {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
          if (onLoadingComplete) {
            onLoadingComplete();
          }
        }, 500);
      }
    }, minLoadingTime);

    // Fallback: ensure loading screen disappears after max time
    const maxTimeout = setTimeout(() => {
      if (isLoading) {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
          if (onLoadingComplete) {
            onLoadingComplete();
          }
        }, 500);
      }
    }, maxLoadingTime);

    // Also listen for page load event
    const handleLoad = () => {
      if (isLoading) {
        const elapsed = Date.now() - startTime;
        // Wait for minimum time even if page loads quickly
        const remainingTime = Math.max(0, minLoadingTime - elapsed);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500);
        }, remainingTime);
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(minTimeout);
      clearTimeout(maxTimeout);
      window.removeEventListener('load', handleLoad);
    };
  }, [isLoading, onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        pointerEvents: isFadingOut ? "none" : "auto",
      }}
    >
      {/* Loading GIF container */}
      <div className="relative z-10 max-w-4xl w-full px-6">
        <div className="relative w-full flex items-center justify-center">
          <img
            src={loadingGif}
            alt="Loading..."
            className="w-full h-auto max-w-2xl object-contain"
          />
        </div>
      </div>

      {/* Optional loading text or spinner below GIF */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 text-gray-600">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

