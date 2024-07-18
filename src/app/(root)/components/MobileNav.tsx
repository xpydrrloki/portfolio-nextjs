"use client";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import MobileNavSheet from "./MobileNavSheet";
import MobileNavDropdown from "./MobileNavDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobileNav = () => {
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleClickNav = (hash:string)=>{
    scrolltoHash(hash)
    setOpenNav(false)
  }
  const scrollThreshold = 40;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        if (currentScrollTop > scrollThreshold) {
          setHideHeader(true);
        }
      } else {
        setHideHeader(false);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`md:hidden block sticky top-0 w-full border-b-2  z-30 bg-gradient-to-b from-white  from-50% to-theme-off_white h-16 p-4 py-5 transition-transform duration-500 ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="text-xs font-bold font-serif">Vincent Setiawan</p>
        {/* <div
          onClick={() => setOpenNav(true)}
          className="cursor-pointer  hover:brightness-90 border border-transparent rounded-lg hover:border-inherit p-1"
        >
          <Menu className="size-4" />
        </div> */}
        <DropdownMenu open={openNav} onOpenChange={setOpenNav}>
          <DropdownMenuTrigger>
            <div className="cursor-pointer  hover:brightness-90 border border-transparent rounded-lg hover:border-inherit p-1">
              <Menu className="size-4" />
            </div>{" "}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>handleClickNav("hero")}>Home</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>handleClickNav("projects")}>Projects</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>handleClickNav("educations")}>Educations</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>handleClickNav("contacts")}>Contact Info</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <MobileNavSheet open={openNav} setOpen={setOpenNav} /> */}
        {/* <MobileNavDropdown open={openNav} setOpen={setOpenNav}/> */}
      </div>
    </div>
  );
};

export default MobileNav;
