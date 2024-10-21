import * as React from "react"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import procom from '@/assets/procom.jpg'

export function HomeCard() {
  return (
    <div className="">

    <Card className="w-[450px] lg:w-[350px] hover:scale-105 duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle className="flex justify-center">PROCOM</CardTitle>
        <CardDescription className="flex justify-center text-center">The society that organizes the flagship event of PROCOM at FAST-NUCES</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={procom} alt="society image" height={500}/>
      </CardContent>
    </Card>
    </div>
  )
}