import Image from "next/image";
import { FeatureImageProps } from "../types/blogTypes";

const FeatureImage = ({ featureImage }: FeatureImageProps) => {
  if (!featureImage || featureImage.length === 0) {
    return <p>No feature image available.</p>;
  }

  return (
    <div className="my-12">
      {featureImage.filter(Boolean).map((img, index) => {
        const url = `${img?.url}`;
        const hasWidth = !!img?.width;

        const width = img?.width ?? undefined;
        const height = img?.height ?? undefined;
        return (
          <div
            key={url + index}
            className={`${!hasWidth ? "relative w-full h-[602px]" : ""}`}
          >
            <Image
              src={url}
              alt={img?.alternativeText || "Feature image"}
              width={hasWidth ? width : undefined}
              height={hasWidth ? height ?? 400 : undefined}
              fill={!hasWidth}
              className={`${!hasWidth ? "object-cover" : ""}`}
              loading="lazy"
              unoptimized
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeatureImage;
