"use client";

import { Typewriter } from "@/components/shared/TypeWriter";
import { useTypewriterController } from "@/lib/useTypewriter";

type HomePageHeroSecHeadingProps = {
  headingOne: string;
  headingTwo: string;
};

const HomePageHeroSecHeading = ({
  headingOne,
  headingTwo,
}: HomePageHeroSecHeadingProps) => {
  const wordsOne = headingOne
    ?.split("|")
    .slice(1)
    .map((item) => item.trim())
    .filter(Boolean) || ["Designers", "Engineers"];
  const wordsTwo = headingTwo
    ?.split("|")
    .slice(1)
    .map((item) => item.trim())
    .filter(Boolean) || ["Code", "Design"];

  const controllerOne = useTypewriterController(wordsOne);
  const controllerTwo = useTypewriterController(wordsOne);
  return (
    <>
      <h1 className="sm:flex flex-wrap items-center gap-x-3">
        <span className="text-heading-xl text-neutral-900">
          {headingOne?.split("|")[0]}
        </span>

        <Typewriter
          word={wordsOne[controllerOne.index]}
          count={controllerOne.count}
          className="text-display-lg text-accent-600"
        />
      </h1>

      <h1 className="sm:flex flex-wrap items-center gap-x-3">
        <span className="text-heading-xl text-neutral-900">
          {headingTwo?.split("|")[0]}
        </span>

        <Typewriter
          word={wordsTwo[controllerTwo.index]}
          count={controllerTwo.count}
          className="text-display-lg text-accent-600"
        />
      </h1>
    </>
  );
};

export default HomePageHeroSecHeading;
