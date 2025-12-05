import { PlayIcon } from "lucide-react";
import Image from "next/image";

interface VideoFile {
  alternativeText?: string | null;
  url: string;
  width?: number | null;
  height?: number | null;
}

interface VideoBlockProps {
  id: string;
  title?: string | null;
  description?: string | null;
  autoplay?: boolean | null;
  loop?: boolean | null;
//   videoFile: VideoFile;
  thumbnail?: VideoFile | null;
}

export default function VideoBlock({
  title,
  description,
  autoplay = false,
  loop = false,
//   videoFile,
  thumbnail,
}: VideoBlockProps) {
  const videoUrl = "";
  const posterUrl = thumbnail
    ? `${thumbnail.url}`
    : undefined;

  return (
    <div className="my-12 max-w-5xl mx-auto px-4">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
      )}

      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
        {thumbnail && !autoplay && (
          <div className="aspect-video relative cursor-pointer group">
            <Image
              src={posterUrl!}
              alt={thumbnail.alternativeText || title || "Video thumbnail"}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 md:p-8 shadow-xl group-hover:scale-110 transition-transform">
                <PlayIcon className="w-12 h-12 md:w-16 md:h-16 text-gray-900" />
              </div>
            </div>
          </div>
        )}

        <video
          className="w-full aspect-video"
          controls={!autoplay} 
          autoPlay={autoplay||true}
          loop={loop || true}
          muted={autoplay || true}
          playsInline
          poster={posterUrl}
          preload={autoplay ? "auto" : "metadata"}
        >
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl.replace(".mp4", ".webm")} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}