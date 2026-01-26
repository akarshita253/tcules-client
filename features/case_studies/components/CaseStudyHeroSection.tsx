import Image from "next/image";

const CaseStudyHeroSection = ({
  title,
  image,
}: {
  title: string | null | undefined;
  image: {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
  };
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden px-2 border-x-8 border-t-4 border-neutral-900 bg-neutral-900">
      <div className="h-full w-full overflow-hidden">
        <Image
          src={`${image?.url ?? ""}`}
          alt={image?.alternativeText ?? "Case Study Hero Image"}
          fill
          className="object-cover rounded"
          sizes="100vw"
          priority
          unoptimized
        />
      </div>
      <div className="absolute z-10 left-12 mx-auto bottom-10 sm:bottom-16 max-w-[960px]">
        <h1 className="text-neutral-50 text-heading-md">{title}</h1>
      </div>
    </div>
  );
};

export default CaseStudyHeroSection;
