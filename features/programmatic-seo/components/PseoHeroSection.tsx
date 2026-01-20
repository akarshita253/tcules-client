import Section from '@/components/global/Section'
import { buttonVariants } from '@/components/ui/button'
import { ProgrammaticSeoPagesQuery } from '@/lib/codegen/graphql'

const PseoHeroSection = ({heroSectionData}:{heroSectionData: NonNullable<ProgrammaticSeoPagesQuery["programmaticSeoPages"][0]>["heroSection"]}) => {
  return (
    <Section>
      <h1 className='mb-6 text-center lg:w-10/12 mx-auto'>
        <span className="text-display-sm text-accent-600">{heroSectionData?.heading?.split("|").at(0)}</span>{' '}
        <span className="text-heading-md text-neutral-800">{heroSectionData?.heading?.split("|").at(1)}</span>
      </h1>
      <p className='text-label-xl text-center text-neutral-700 lg:w-10/12 mx-auto mb-12'>{heroSectionData?.description}</p>
      <div className='flex justify-center items-center'>
        {heroSectionData?.heroSectionButton?.map((button, index) => (
          <a
            key={index}
            href={button?.href || "#"}
            className={` uppercase  ${buttonVariants({ variant: "default" })} bg-neutral-100 text-neutral-900`}
          >
            {button?.name}
          </a>
        ))}
      </div>
    </Section>
  )
}

export default PseoHeroSection
