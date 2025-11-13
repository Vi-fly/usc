import loadingVideo from "@/assets/loading.mp4";
import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    let hasEnded = false;
    let isPausedAtEnd = false;

    // Handle timeupdate - pause just before video ends to prevent black frame
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.1 && !isPausedAtEnd) {
        isPausedAtEnd = true;
        hasEnded = true;
        // Pause video just before it ends to keep last frame visible
        video.pause();
        
        // Ensure we're at the last frame
        if (video.duration) {
          video.currentTime = video.duration - 0.05; // Very close to end but not at end
        }
        
        // Small delay before starting fade-out
        setTimeout(() => {
          setIsFadingOut(true);
          
          // Wait for fade-out animation to complete
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500); // Match fade-out duration
        }, 200);
      }
    };

    // Fallback: Handle video end event (in case timeupdate doesn't fire)
    const handleVideoEnd = () => {
      if (!isPausedAtEnd) {
        hasEnded = true;
        isPausedAtEnd = true;
        // Seek back to last frame
        if (video.duration) {
          video.currentTime = video.duration - 0.05;
          video.pause();
        }
        
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500);
        }, 200);
      }
    };

    // Handle video loaded and ready to play
    const handleCanPlay = () => {
      // Ensure video plays
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    };

    // Add event listeners
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleVideoEnd, { once: true });
    video.addEventListener("canplay", handleCanPlay, { once: true });

    // Start playing the video
    if (video.readyState >= 3) {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }

    // Fallback: ensure loading screen disappears after max time (30 seconds)
    const maxLoadingTime = 30000; // 30 seconds max
    const fallbackTimeout = setTimeout(() => {
      if (isLoading && !hasEnded) {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
          if (onLoadingComplete) {
            onLoadingComplete();
          }
        }, 500);
      }
    }, maxLoadingTime);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleVideoEnd);
      video.removeEventListener("canplay", handleCanPlay);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      clearTimeout(fallbackTimeout);
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
      {/* Loading video container */}
      <div className="relative z-10 max-w-4xl w-full px-6">
        <div className="relative w-full bg-white" style={{ paddingBottom: "56.25%" }}> {/* 16:9 aspect ratio */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-contain"
          >
            <source src={loadingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Optional loading text or spinner below video */}
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

