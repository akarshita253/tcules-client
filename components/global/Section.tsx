import { cn } from '@/lib/utils';

const Section = ({children, className}:{children:React.ReactNode, className?:string}) => {
  return (
    <section className={cn("sm:py-[84px] py-14", className)}>
      {children}
    </section >
  )
}

export default Section