import React from "react";
import ProjectCards from "./ProjectCards";
import belanjain from "../../../../public/iPhone-13-PRO-jcwd031001.purwadhikabootcamp.com.png"

const PastProjects = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center mt-24" id="projects">
      <div className="space-y-4 w-96">
        <h3 className="text-3xl text-center font-semibold">Past Projects</h3>
        <p className="font-light text-center">
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
