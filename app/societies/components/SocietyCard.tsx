import * as React from "react"

import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import procom from '@/assets/procom.jpg'
import Link from "next/link"

export function SocietyCard({id, name, desc, logo}) {
  return (
      <Link href={`societies/${id}`}>
    <div className="">
    {/* <Card className="w-[450px] lg:w-[350px] hover:scale-105 duration-300 cursor-pointer"> */}
    <Card className="w-[400px] lg:w-[400px] hover:scale-105 duration-300 cursor-pointer">
      {/* <CardHeader>
        <CardTitle className="flex justify-center">PROCOM</CardTitle>
        <CardDescription className="flex justify-center text-center">The society that organizes the flagship event of PROCOM at FAST-NUCES</CardDescription>
        </CardHeader>
        <CardContent>
        <Image src={procom} alt="society image" height={500}/>
      </CardContent> */}

    <CardHeader>
        <Image src={logo} alt="society image" width={500} height={500}/>
      </CardHeader>
      <CardContent>
      <CardTitle className="flex justify-center text-center">{name}</CardTitle>
      <CardDescription className="flex justify-center text-center">{desc}</CardDescription>
      </CardContent>
      </Card>
      </div>
      </Link>
  )
}
