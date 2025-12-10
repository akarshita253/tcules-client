import { Container } from "@/components/global/Container";
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
  console.log(image.url)
  return (
    <div className="relative h-screen w-full overflow-hidden ">
      <Image
        src={`${image?.url ?? ""}`}
        alt={image?.alternativeText ?? "Case Study Hero Image"}
        fill
        className="object-cover"
        sizes="100vw"
        priority
        unoptimized
      />
        <Container className="absolute z-10 left-0 right-0 mx-auto bottom-10 sm:bottom-16">
            <h1 className="text-neutral-50 text-heading-md">{title}</h1>
        </Container>
    </div>
  );
};

export default CaseStudyHeroSection;
