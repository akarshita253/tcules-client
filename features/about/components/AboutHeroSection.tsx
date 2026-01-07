import Image from "next/image";

type HeroSectionProps = {
  heading?: string | null;
  description?: string | null;
  bgImage?: {
    url: string;
    width?: number | null;
    height?: number | null;
    alternativeText?: string | null;
  } | null;
};

const AboutHeroSection = ({
  heading,
  description,
  bgImage,
}: HeroSectionProps) => {
  return (
  <div className="relative h-screen w-full overflow-hidden p-1">
  <div className="absolute inset-0 z-0">
    <Image
      src={bgImage?.url ?? ""}
      alt={bgImage?.alternativeText ?? "Case Study Hero Image"}
      fill
      className="object-cover rounded"
      sizes="100vw"
      priority
      unoptimized
    />
  </div>

  <div className="absolute inset-0 z-10 bg-linear-to-b from-neutral-50/20 to-neutral-900" />

  <div className="absolute z-20 left-12 bottom-10 sm:bottom-16 max-w-[960px]">
    <h1 className="text-neutral-50 text-heading-md mb-6">
      {heading}
    </h1>
    <p className="text-label-xl text-neutral-50">
      {description}
    </p>
  </div>
</div>

  );
};

export default AboutHeroSection;
