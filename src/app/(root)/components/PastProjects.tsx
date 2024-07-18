import React from "react";
import ProjectCards from "./ProjectCards";
import belanjain from "../../../../public/iPhone-13-PRO-jcwd031001.purwadhikabootcamp.com.png"

const PastProjects = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center md:mt-24 mt-12" id="projects">
      <div className="space-y-4 md:w-96 w-fit">
        <h3 className="md:text-3xl text-2xl text-center font-semibold">Past Projects</h3>
        <p className="font-light text-center md:text-base text-sm">
          Discover my past projects, highlighting my skills in full-stack
          development, problem-solving, and delivering high-quality web
          applications.
        </p>
      </div>
      <div>
        <ProjectCards
          title="Belanja.in"
          image={belanjain}
          link="https://jcwd031001.purwadhikabootcamp.com/"
          description="Belanja.in is a e-commerce website, made for final project at Purwadhika Digital Technology School"
          
        />
      </div>
    </div>
  );
};

export default PastProjects;
