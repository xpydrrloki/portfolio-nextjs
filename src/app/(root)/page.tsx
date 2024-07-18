import React from "react";
import HeroSection from "./components/HeroSection";
import PastProjects from "./components/PastProjects";
import Educations from "./components/Educations";
import ContactInfo from "./components/ContactInfo";

const Home = () => {
  return (
    <main className=" container mx-auto h-fit flex flex-col gap-y-20">
      {/* todo: ganti h */}
      <section><HeroSection/></section>
      <section><PastProjects/></section>
      <section><Educations/></section>
      <section><ContactInfo/></section>
    </main>
  );
};

export default Home;
