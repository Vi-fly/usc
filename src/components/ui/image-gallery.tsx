import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center gap-2 md:gap-2 w-full md:h-[400px] h-auto", className)}>
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative group flex-grow transition-all rounded-lg overflow-hidden md:h-[400px] h-[200px] sm:h-[250px] duration-500 md:hover:w-full md:w-56 w-full"
        >
          <img
            className="h-full w-full object-cover object-center"
            src={src}
            alt={`Gallery image ${idx + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
