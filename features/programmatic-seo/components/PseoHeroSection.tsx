import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";

const PseoHeroSection = ({
  title,
  description,
  heroSectionButton,
}: {
  title: string;
  description: string;
  heroSectionButton: { name: string; href: string };
}) => {
  return (
    <Section>
      <h1 className="mb-6 text-center lg:w-10/12 mx-auto">
        <span className="text-display-sm text-accent-600">
          {title?.split("|").at(0)}
        </span>{" "}
        <span className="text-heading-md text-neutral-800">
          {title?.split("|").at(1)}
        </span>
      </h1>
      <p className="text-label-xl text-center text-neutral-700 lg:w-10/12 mx-auto mb-12">
        {description}
      </p>
      <div className="flex justify-center items-center">
        <ButtonTag
          label={heroSectionButton?.name || "Learn More"}
          href={heroSectionButton?.href || "#"}
          variant={"neutral"}
        />
      </div>
    </Section>
  );
};

export default PseoHeroSection;
