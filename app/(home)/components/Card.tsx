import * as React from "react";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export function HomeCard({
  id,
  name,
  desc,
  logo,
} ) {
  const path = `societies/` + `${id}`;

  return (
    <Link href={path}>
      <div className="">
        <Card className="w-[350px] lg:w-[350px] hover:scale-105 duration-300 cursor-pointer">
          <CardHeader>
            <CardTitle className="flex justify-center">{name}</CardTitle>
            <CardDescription className="flex justify-center text-center">
              {desc}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={logo} alt="society image" width={300} height={300} />
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
