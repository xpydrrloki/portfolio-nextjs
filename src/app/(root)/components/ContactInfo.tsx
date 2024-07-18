import { Mail } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GridItem = ({
  label,
  value,
  link,
  icons
}: {
  label: string;
  value: ReactNode;
  link?: string;
  icons?: ReactNode
}) => (
  <>
    <div className="col-span-1 font-semibold">
        <div className="flex gap-2 items-center">{icons}{label}</div>
        </div>
    <div className="col-span-1 font-semibold"></div>
    <div
      className={`col-span-3 font-light ${
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
    <div className="flex flex-col gap-y-8 items-center my-12" id="contacts">
      <div className="space-y-4 w-96">
        <h3 className="text-3xl text-center font-semibold">Contact Info</h3>
        <p className="font-light text-center">
          You can contact me through one of these channels.
        </p>
      </div>
      <div className="rounded bg-white h-full w-[640px]  flex justify-center">
        <div className="grid grid-cols-5 p-8 mx-auto  text-black">
          <GridItem label="Email" value="vvincent911@gmail.com" icons={<Mail size={16}/>}/>
          <GridItem
            label="Github"
            value="github.com/xpydrrloki"
            link="https://github.com/xpydrrloki"
            icons={<FaGithub/>}
          />
          <GridItem
            label="Linkedin"
            value="linkedin.com/in/vincentsetiawan98"
            link="https://linkedin.com/in/vincentsetiawan98"
            icons={<FaLinkedin/>}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
