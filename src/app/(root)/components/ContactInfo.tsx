import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GridItem = ({
  label,
  value,
  link,
  icons,
}: {
  label: string;
  value: ReactNode;
  link?: string;
  icons?: ReactNode;
}) => (
  <>
    <div className="md:col-span-1 col-span-1 font-semibold ">
      <div className="flex gap-1 items-center justify-start">
        <div>{icons}</div>
        <p className="md:text-base text-xs">{label}</p>
      </div>
    </div>
    <div className="md:col-span-1 hidden md:block font-semibold"></div>
    <div
      className={`md:col-span-3 col-span-3 md:text-base text-xs font-light ${
        link
          ? "underline text-theme-main_yellow/95 cursor-pointer"
          : "hover:cursor-context-menu"
      }`}
    >
      {link ? (
        <Link href={link || ""}>
          <React.Fragment>{value}</React.Fragment>
        </Link>
      ) : (
        <>{value}</>
      )}
    </div>
  </>
);

const ContactInfo = () => {
  return (
    <div
      className="flex flex-col  gap-y-8 items-center md:my-12 my-4 md:text-base text-xs"
      id="contacts"
    >
      <div className="space-y-4 md:w-96 w-fit ">
        <h3 className="md:text-3xl text-2xl text-center font-semibold">
          Contact Info
        </h3>
        <p className="font-light text-center md:text-base text-sm">
          You can contact me through one of these channels.
        </p>
      </div>
      <div className="rounded bg-white h-full  md:w-[640px] w-full  flex justify-center">
        <div className="grid md:grid-cols-5 grid-cols-4 gap-x-2 md:p-8 p-6 w-fit mx-auto  text-black">
          <GridItem
            label="Email"
            value="vvincent911@gmail.com"
            icons={<Mail className="min-h-4 min-w-4 size-4" />}
          />
          <GridItem
            label="Github"
            value="github.com/xpydrrloki"
            link="https://github.com/xpydrrloki"
            icons={<Github size={16} />}
          />
          <GridItem
            label="Linkedin"
            value="linkedin.com/in/vincentsetiawan98"
            link="https://linkedin.com/in/vincentsetiawan98"
            icons={<Linkedin className="min-h-4 min-w-4 size-4" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
