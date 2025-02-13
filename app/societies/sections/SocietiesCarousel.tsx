"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import procom from '@/assets/procom.jpg'

export const SocietiesCarousel = () => {
  return (
    <div className="mb-24">
      <Carousel
        className=""
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="">
          <CarouselItem className="flex justify-center">
            <Image
              src={procom}
              alt="image of jewellery"
                // width={1000}
              height={640}
              />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <Image
              src={procom}
              alt="image of jewellery"
                // width={1000}
              height={640}
              />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <Image
              src={procom}
              alt="image of jewellery"
              // width={1000}
              height={640}
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <Image
              src={procom}
              alt="image of jewellery"
                // width={1000}
              height={640}
              />
          </CarouselItem>
          
        </CarouselContent>
      </Carousel>
    </div>
  );
};
