import { HomepageQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

type ScrollImages =
  NonNullable<
    NonNullable<HomepageQuery["homepage"]>["heroSection"]
  >["scrollImages"];

interface Props {
  scrollImages?: ScrollImages;
}

const DiagonalMarquee = ({ scrollImages }: Props) => {
  const images =
    scrollImages?.filter(
      (img): img is NonNullable<typeof img> => Boolean(img)
    ) ?? [];

  if (!images.length) return null;

  // Duplicate images for seamless loop
  const loopImages = [...images, ...images];

  return (
    <div className="marquee-window">
      {/* Column 1 */}
      <div className="diagonal-grid">
        <div className="column-flex animate-marquee col-fast">
          {loopImages.map((img, i) => (
            <div key={`a-${i}`} className="portrait-box">
              <Image
                src={img.url}
                alt=""
                width={300}
                height={400}
                className="portrait-img"
                priority={i < 6}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Column 2 */}
      <div className="diagonal-grid">
        <div className="column-flex animate-marquee col-mid mt-24">
          {loopImages.map((img, i) => (
            <div key={`b-${i}`} className="portrait-box">
              <Image
                src={img.url}
                alt=""
                width={300}
                height={400}
                className="portrait-img"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Column 3 */}
      <div className="diagonal-grid">
        <div className="column-flex animate-marquee col-slow">
          {loopImages.map((img, i) => (
            <div key={`c-${i}`} className="portrait-box">
              <Image
                src={img.url}
                alt=""
                width={300}
                height={400}
                className="portrait-img"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="edge-mask" />
    </div>
  );
};

export default DiagonalMarquee;
