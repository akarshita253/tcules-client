import Image from "next/image";

const CaseStudyHeroSection = ({
  title,
  image,
}: {
  title: string | null | undefined;
  image: { url: string; alternativeText: string; width: number; height: number };
}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden ">
      <Image
        src={`${process.env.STRAPI_URL}${image?.url ?? ""}`}
        alt={image?.alternativeText ?? "Case Study Hero Image"}
        fill
        className="object-cover"
        sizes="100vw"
        priority
        unoptimized
      />
      <div className="absolute bottom-8 left-8 flex items-center justify-center z-10 py-12 max-w-[960px]">
        <h1 className="text-[56px] text-gray-100 leading-[120%] ">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CaseStudyHeroSection;