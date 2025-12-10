import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageItem {
  url: string;
  alternativeText?: string | null;
  width?: number | null;
  height?: number | null;
}

interface MultiImageLayoutProps {
  images: ImageItem[];
  layout: "default" | "twoLeftFocus" | "twoRightFocus" | "bento";
  className?: string;
}

export function MultiImageLayout({
  images,
  layout,
  className,
}: MultiImageLayoutProps) {
  const safeImages = images.filter((img): img is ImageItem => !!img?.url);

  if (safeImages.length === 0) return null;

  const getImageSrc = (img: ImageItem) => `${img.url}`;

  switch (layout) {
    case "default":
      const singleImage = safeImages[0];
      return (
        <div className={cn("w-full", className)}>
          <div className="relative sm:h-[300px] md:h-[467px] h-[182px]">
            {" "}
            <Image
              unoptimized
              src={getImageSrc(singleImage)}
              alt={singleImage.alternativeText ?? "Image"}
              fill
              className="object-cover rounded-lg"
              sizes="100vw"
            />
          </div>
        </div>
      );

    case "twoLeftFocus":
      if (safeImages.length < 2)
        return (
          <MultiImageLayout
            images={safeImages}
            layout="default"
            {...{ className }}
          />
        );
      return (
        <div className={cn("grid sm:grid-cols-[2fr_1fr] gap-4 w-full", className)}>
          {safeImages.slice(0, 2).map((img, idx) => (
            <div key={idx} className="relative sm:h-[300px] md:h-[467px] h-[182px]">
              <Image
                unoptimized
                src={getImageSrc(img)}
                alt={img.alternativeText ?? `Image ${idx + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      );

    case "twoRightFocus":
      if (safeImages.length < 2)
        return (
          <MultiImageLayout
            images={safeImages}
            layout="default"
            {...{ className }}
          />
        );
      return (
        <div className={cn("grid sm:grid-cols-[1fr_2fr] gap-4 w-full", className)}>
          {safeImages.slice(0, 2).map((img, idx) => (
            <div key={idx} className="relative sm:h-[300px] md:h-[467px] h-[182px]">
              <Image
                unoptimized
                src={getImageSrc(img)}
                alt={img.alternativeText ?? `Image ${idx + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      );

    case "bento":
  const firstRow = safeImages.slice(0, 3);
  const secondRow = safeImages.slice(3, 6);

  return (
    <div className={cn("w-full", className)}>
      {/* MOBILE (<640px): 2 per row */}
      {/* SMALL TO MEDIUM (640px–768px): 3 per row */}
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4 md:hidden">
        {safeImages.map((img, idx) => (
          <div key={idx} className="relative sm:h-[196px] md:h-[308px] h-[200px]">
            <Image
              unoptimized
              src={getImageSrc(img)}
              alt={img.alternativeText ?? `Image ${idx + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw"
            />
          </div>
        ))}
      </div>

      {/* DESKTOP (md and above): original bento layout */}
      <div className="hidden md:grid grid-cols-1 gap-4 w-full">
        {/* First Row: 3 equal columns */}
        <div className="grid grid-cols-3 gap-4">
          {firstRow.map((img, idx) => (
            <div key={idx} className="relative sm:h-[196px] md:h-[308px] h-[200px]">
              <Image
                unoptimized
                src={getImageSrc(img)}
                alt={img.alternativeText ?? `Image ${idx + 1}`}
                fill
                className="object-cover rounded-lg "
                sizes="33vw"
              />
            </div>
          ))}
        </div>

        {/* Second Row: 1fr / 2fr / 1fr */}
        {secondRow.length > 0 && (
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
            {secondRow.map((img, idx) => (
              <div key={idx} className="relative sm:h-[196px] md:h-[308px] h-[200px]">
                <Image
                  unoptimized
                  src={getImageSrc(img)}
                  alt={img.alternativeText ?? `Image ${idx + 4}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="25vw"
                />
              </div>
            ))}

            {/* Fill placeholders */}
            {secondRow.length === 1 && (
              <>
                <div className="m:h-[196px] md:h-[308px] h-[200px] rounded-lg bg-gray-200 animate-pulse" />
                <div className="m:h-[196px] md:h-[308px] h-[200px] rounded-lg bg-gray-200 animate-pulse" />
              </>
            )}
            {secondRow.length === 2 && (
              <div className="m:h-[196px] md:h-[308px] h-[200px] rounded-lg bg-gray-200 animate-pulse" />
            )}
          </div>
        )}
      </div>
    </div>
  );


    default:
      return (
        <MultiImageLayout
          images={safeImages}
          layout="default"
          {...{ className }}
        />
      );
  }
}
