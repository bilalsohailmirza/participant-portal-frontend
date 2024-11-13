"use client";
import Autoplay from "embla-carousel-autoplay";
import { MemberCard } from "../components/MemberCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const FeaturedMembersCarousel = () => {
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
            <CarouselItem className="flex justify-evenly">
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </CarouselItem>
            <CarouselItem className="flex justify-evenly">
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </CarouselItem>
            <CarouselItem className="flex justify-evenly">
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </CarouselItem>
            <CarouselItem className="flex justify-evenly">
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </CarouselItem>
            
          </CarouselContent>
        </Carousel>
      </div>
    );
  };
  