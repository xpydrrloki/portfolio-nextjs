import React from "react";

const Educations = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center md:my-12 my-6 " id="educations">
      <div className="space-y-4 md:w-96 w-fit">
        <h3 className="md:text-3xl text-2xl text-center font-semibold">
          Educations
        </h3>
        <p className="font-light text-center md:text-base text-sm">
          I hold a solid educational foundation in computer science and web
          development, continuously expanding my knowledge through various
          courses and certifications.
        </p>
      </div>
      <div className=" rounded bg-white size-full ">
        <div className="flex md:flex-row flex-col gap-y-4 md:gap-x-16 justify-between p-8  mx-auto  text-black">
          <div className="md:w-2/5 w-fit md:space-y-8 space-y-4">
            <h3 className="md:text-lg text-sm font-semibold ">
              Purwadhika Digital Technology School
            </h3>
            <div className="flex items-center gap-x-4 md:text-base text-xs">
              <p>Student</p>
              <p className="bg-theme-main_yellow p-1 text-white w-fit">
                January 2024-August 2024
              </p>
            </div>
          </div>
          <div className="md:w-3/5 w-fit md:space-y-8 space-y-4">
            <h4 className="md:text-lg text-sm font-semibold">
              Full-stack Web Development
            </h4>
            <p className="md:text-base text-xs">
              Purwadhika Digital Technology School offers Full-stack Web
              Development course in which all applicants will be taught
              comprehensively on subjects covering both front-end and back-end
              devleopment, such as Next JS, React, Node.js, ExpressJS, HTML, CSS
              and many more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
