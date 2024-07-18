import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardsProps {
  title: string;
  image: string | StaticImageData;
  description: string;
  link?: string;
}
const ProjectCards: FC<ProjectCardsProps> = ({
  title,
  image,
  description,
  link,
}) => {
  return (
    <Link href={link || ""}>
      <Card className="h-[400px] hover:scale-105 transition-all hover:brightness-95">
        <CardHeader>
          <div className="relative size-56 overflow-y-hidden">
            <Image
              alt="Portfolio"
              src={image}
              className="object-contain border -mt-20"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="max-w-56 mb-8">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="line-clamp-3 overflow-hidden">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCards;
