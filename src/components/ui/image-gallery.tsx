import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  return (
    <div className={cn("flex items-center gap-2 h-[400px] w-full", className)}>
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
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
