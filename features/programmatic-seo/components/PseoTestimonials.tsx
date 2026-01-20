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
import { ChevronLeft, ChevronRight } from "lucide-react";

const PseoTestimonials = ({
  testimonialData,
  testimonialHeading,
  testimonialDescription,
}: {
  testimonialData: TestimonialsQuery["testimonials"];
  testimonialHeading: string;
  testimonialDescription: string;
}) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
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
    <>
      <h2 className="text-heading-xs text-neutral-800 mb-6 text-center">
        {testimonialHeading}
      </h2>
      <p className="text-label-xl text-neutral-700 mb-12 text-center">
        {testimonialDescription}
      </p>
      <div className=" flex items-center gap-6">
        <ChevronLeft
          size={28}
          className="cursor-pointer"
          onClick={() => {
            if (!carouselApi) return;

            const totalSlides = carouselApi.scrollSnapList().length;

            if (carouselIndex === 0) {
              carouselApi.scrollTo(totalSlides - 1);
            } else {
              carouselApi.scrollTo(carouselIndex - 1);
            }
          }}
        />
        <div className="shadow-[0_4px_45.1px_0_rgba(0,0,0,0.05)] rounded-xl mx-auto max-w-[992px]">
          <Carousel
            setApi={setCarouselApi}
            plugins={[autoplay.current]}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {testimonialData?.map((singleTestimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="rounded-xl p-8">
                    <CardContent>
                      <Image src={quote} alt="quote" className="mb-6" />
                      <p className="text-label-xl text-neutral-700 mb-6 sm:mb-9">
                        {singleTestimonial?.clientComments}
                      </p>
                      <div className="flex items-center gap-3">
                        {singleTestimonial?.clientProfilePicture && (
                          <div>
                            <Image
                              src={singleTestimonial?.clientProfilePicture?.url}
                              alt="client"
                              width={60}
                              height={60}
                              className="rounded-full"
                            />
                          </div>
                        )}
                        <div>
                          <p className="text-label-md text-neutral-900 font-bold">
                            {singleTestimonial?.clientName}
                          </p>
                          <p className="text-label-2xs text-neutral-700">
                            {singleTestimonial?.clientPosition}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <ChevronRight
          size={28}
          className="cursor-pointer"
          onClick={() => {
            if (!carouselApi) return;

            const totalSlides = carouselApi.scrollSnapList().length;

            if (carouselIndex === totalSlides - 1) {
              carouselApi.scrollTo(0);
            } else {
              carouselApi.scrollTo(carouselIndex + 1);
            }
          }}
        />
      </div>
    </>
  );
};

export default PseoTestimonials;
