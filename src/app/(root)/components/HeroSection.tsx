"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div className="bg-white px-12 flex flex-row" id="hero">
      <div className="w-3/5 px-2 py-16 space-y-8">
        <div className="font-bold text-4xl ">
          <h1>I'm Vincent Setiawan</h1>
          <h3>
            <span className="text-theme-main_yellow">Full-stack Web</span>{" "}
            Developer
          </h3>
        </div>
        <div className="text-theme-second_gray w-[480px]">
          <p>
            Passionate full-stack junior web developer with a knack for creating
            seamless and efficient web applications. Skilled in both front-end
            and back-end technologies, always eager to learn and adapt. Let's
            build something amazing together!
          </p>
        </div>
        <Button
          className="text-theme-main_black hover:scale-105 transition-all space-x-2"
          variant={"default"}
          onClick={() => scrolltoHash("contacts")}
        >
          <p>Contact me</p>
          <Phone />
        </Button>
      </div>
      <div className="w-2/5">
      <div className="relative size-full">
        <Image alt="avatar" src={""} className="object-contain"/></div></div>
    </div>
  );
};

export default HeroSection;
