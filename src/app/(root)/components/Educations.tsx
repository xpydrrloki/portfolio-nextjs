import React from "react";

const Educations = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center my-12" id="educations">
      <div className="space-y-4 w-96">
        <h3 className="text-3xl text-center font-semibold">Educations</h3>
        <p className="font-light text-center">
          I hold a solid educational foundation in computer science and web
          development, continuously expanding my knowledge through various
          courses and certifications.
        </p>
      </div>
      <div className=" rounded bg-white size-full ">
        <div className="flex gap-x-16 justify-between p-8  mx-auto  text-black">
          <div className="w-2/5 space-y-8">
            <h3 className="text-lg font-semibold ">
              Purwadhika Digital Technology School
            </h3>
            <div className="flex items-center gap-x-4">
              <p>Student</p>
              <p className="bg-theme-main_yellow p-1 text-white w-fit">
                January 2024-August 2024
              </p>
            </div>
          </div>
          <div className="w-3/5 space-y-8">
            <h4 className="text-lg font-semibold">Full-stack Web Development</h4>
            <div>
              Purwadhika Digital Technology School offers Full-stack Web Development course in which all applicants will be taught comprehensively on subjects covering both front-end and back-end devleopment, such as Next JS, React, Node.js, ExpressJS, HTML, CSS and many more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
