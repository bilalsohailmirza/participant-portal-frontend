import * as React from "react"

import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import procom from '@/assets/procom.jpg'

export function EventCard() {
  return (
    <div className="">

    {/* <Card className="w-[450px] lg:w-[350px] hover:scale-105 duration-300 cursor-pointer"> */}
    <Card className="w-[450px] lg:w-[500px] hover:scale-105 duration-300 cursor-pointer">
      {/* <CardHeader>
        <CardTitle className="flex justify-center">PROCOM</CardTitle>
        <CardDescription className="flex justify-center text-center">The society that organizes the flagship event of PROCOM at FAST-NUCES</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={procom} alt="society image" height={500}/>
      </CardContent> */}

    <CardHeader>
        <Image src={procom} alt="society image" height={500}/>
      </CardHeader>
      <CardContent>
      <CardTitle className="flex justify-center">Speed Programming</CardTitle>
      <CardDescription className="flex justify-center text-center">Speed programming is a competitive coding style focused on quickly solving algorithmic problems under time constraints, often enhancing problem-solving skills and coding efficiency</CardDescription>
      </CardContent>
    </Card>
    </div>
  )
}
