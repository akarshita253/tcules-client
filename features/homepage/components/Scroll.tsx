import { HomepageQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

type ScrollImages =
  NonNullable<
    NonNullable<HomepageQuery["homepage"]>["heroSection"]
  >["scrollImages"];

const DiagonalMarquee = ({ scrollImages }: { scrollImages?: ScrollImages }) => {
const images =
  scrollImages
    ?.filter((img): img is NonNullable<typeof img> => Boolean(img))
    .map(img => img) ?? [];

  return (
    <div className="marquee-window space-x-4 bg-none!">
      <div className="diagonal-grid">
        <div className="column-flex">
          {images.map((singleImage, i) => (
            <div key={`a-${i}`} className="portrait-box">
              <Image src={singleImage?.url} alt="" width={singleImage?.width||200} height={singleImage?.height||300}/>
            </div>
          ))}
        </div>
      </div>
      <div className="diagonal-grid-2">
        <div className="column-flex">
          {images.map((singleImage, i) => (
            <div key={`b-${i}`} className="portrait-box">
              <Image src={singleImage?.url} alt="" width={singleImage?.width||200} height={singleImage?.height||300}/>
            </div>
          ))}
        </div>
      </div>
      <div className="diagonal-grid">
        <div className="column-flex">
          {images.map((singleImage, i) => (
            <div key={`c-${i}`} className="portrait-box">
              <Image src={singleImage?.url} alt="" width={singleImage?.width||200} height={singleImage?.height||300}/>
            </div>
          ))}
        </div>
      </div>
      <div className="edge-mask"></div>
    </div>
  );
};

export default DiagonalMarquee;
