import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import procom from "@/assets/procom.jpg";

const CompetitionCard = ({
  id,
  name,
  desc,
  logo
}) => {
  console.log(logo)
  return (
    <Link href={`competitions/${id}`}>
      <div className="">
        <Card className="w-[450px] lg:w-[500px] hover:scale-105 duration-300 cursor-pointer">
          <CardHeader>
            <Image src={procom} alt="society image" height={500} />
          </CardHeader>
          <CardContent>
            <CardTitle className="flex justify-center">{name}</CardTitle>
            <CardDescription className="flex justify-center text-center">
              {desc}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};

export default CompetitionCard;
