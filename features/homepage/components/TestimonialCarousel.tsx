"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import quote from "@/public/quote.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TestimonialsQuery } from "@/lib/codegen/graphql";
import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const TestimonialCarousel = ({
  testimonialData,
}: {
  testimonialData: TestimonialsQuery["testimonials"];
}) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

const autoplay = useRef(
  Autoplay({
    delay: 2500,
    stopOnInteraction: true,
    stopOnMouseEnter: true,  
  })
);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCarouselIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    onSelect();

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <div className="shadow-[0_4px_45.1px_0_rgba(0,0,0,0.05)] lg:w-5/7 rounded-xl mx-auto bg-neutral-50 p-2">
      <Carousel
        setApi={setCarouselApi}
        plugins={[autoplay.current]}
        opts={{ loop: true }} 
      >
        <CarouselContent>
          {testimonialData?.map((singleTestimonial, index) => (
            <CarouselItem key={index}>
              <Card className="bg-neutral-100 rounded-xl p-8">
                <CardContent>
                  <Image src={quote} alt="quote" className="mb-6" />
                  <p className="text-label-xl text-neutral-700 mb-6 sm:mb-9">
                    {singleTestimonial?.clientComments}
                  </p>
                  <p className="text-label-md text-neutral-900 font-bold">
                    {singleTestimonial?.clientName}
                  </p>
                  <p className="text-label-2xs text-neutral-700">
                    {singleTestimonial?.clientPosition}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center justify-center gap-2 mt-3">
        {testimonialData?.map((_, index) => (
          <button
            key={index}
            onClick={() => carouselApi?.scrollTo(index)}
            className={cn(
              "transition-all duration-300 rounded-full focus:outline-none",
              carouselIndex === index
                ? "w-6 h-2 bg-neutral-900"
                : "w-2 h-2 bg-neutral-200 hover:bg-neutral-400 cursor-pointer"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
