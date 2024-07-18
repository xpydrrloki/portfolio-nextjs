import { Button } from "@/components/ui/button";
import { CodeXml, GraduationCap, Home, NotebookTabs, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const RightSticky = () => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className="hidden md:block bg-theme-off_white w-32 sticky h-screen top-0">
      <div className="flex flex-col items-center align-middle gap-y-16 my-36 ">
        <Button
          className="rounded-full size-16 bg-theme-third_gray hover:bg-theme-main_yellow/50"
          onClick={() => scrolltoHash("hero")}
          variant={"outline"}
        >
          <Home />
        </Button>
        <Button
          className="rounded-full size-16 bg-theme-third_gray hover:bg-theme-main_yellow/50"
          onClick={() => scrolltoHash("projects")}
          variant={"outline"}
        >
          <CodeXml />
        </Button>
        <Button
          className="rounded-full size-16 bg-theme-third_gray hover:bg-theme-main_yellow/50"
          onClick={() => scrolltoHash("educations")}
          variant={"outline"}
        >
          <GraduationCap />
        </Button>
        <Button
          className="rounded-full size-16 bg-theme-third_gray hover:bg-theme-main_yellow/50"
          onClick={() => scrolltoHash("contacts")}
          variant={"outline"}
        >
          <Phone />
        </Button>
      </div>
    </div>
  );
};

export default RightSticky;
