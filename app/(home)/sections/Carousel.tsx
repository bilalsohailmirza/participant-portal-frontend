"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import procom from '@/assets/procom.jpg'

export const HomeCarousel = () => {
  return (
    <div className="p-[2rem]">
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
        {/* <CarouselPrevious className="" />  */}
        {/* <CarouselNext className="" /> */}
      </Carousel>
    </div>
  );
};
