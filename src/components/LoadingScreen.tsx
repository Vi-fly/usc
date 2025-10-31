import loadingVideo from "@/assets/loading_scr.mp4";
import { useEffect, useRef, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Play video completely every time
    const handleVideoEnd = () => {
      // Start fade out after video completes
      setIsFading(true);
      // Remove from DOM after fade animation completes
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    };

    // Handle video errors
    const handleVideoError = () => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    };

    video.addEventListener("ended", handleVideoEnd);
    video.addEventListener("error", handleVideoError);

    // Play video
    video.play().catch((error) => {
      console.error("Error playing loading video:", error);
      handleVideoError();
    });

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
      video.removeEventListener("error", handleVideoError);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: isFading ? "none" : "auto" }}
    >
      <div className="max-w-4xl w-full px-4">
        <video
          ref={videoRef}
          className="w-[80%] h-auto mx-auto"
          muted
          playsInline
          autoPlay
        >
          <source src={loadingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default LoadingScreen;

