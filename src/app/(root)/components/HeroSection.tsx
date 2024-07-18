"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import avatar from "../../../../public/avatar.png";

const HeroSection = () => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div
      className="bg-white md:px-12 px- flex md:grid md:grid-cols-5 flex-col-reverse container"
      id="hero"
    >
      <div className="md:col-span-3 w-full px-2 md:py-16 py-12 space-y-8">
        <div className="font-bold md:text-4xl text-2xl ">
          <h1>I'm Vincent Setiawan</h1>
          <h3>
            <span className="text-theme-main_yellow">Full-stack</span>{" "}
            Web Developer
          </h3>
        </div>
        <div className="text-theme-second_gray md:w-fit sm:w-[320px] w-fit">
          <p className="flex justify-center md:text-base text-sm">
            Passionate full-stack junior web developer with a knack for creating
            seamless and efficient web applications. Skilled in both front-end
            and back-end technologies, always eager to learn and adapt. Let's
            build something amazing together!
          </p>
        </div>
        <Button
          className="text-theme-main_black hover:scale-105  transition-all space-x-2"
          variant={"default"}   
          onClick={() => scrolltoHash("contacts")}
        >
          <p>Contact me</p>
          <Phone />
        </Button>
      </div>
      <div className="md:col-span-2 w-full">
        <div className="relative size-full flex justify-center items-center">
          <Image alt="avatar" src={avatar} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
