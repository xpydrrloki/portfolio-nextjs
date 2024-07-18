"use client";
import React, { FC, ReactNode } from "react";
import LeftSticky from "./components/LeftSticky";
import RightSticky from "./components/RightSticky";

interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col bg-theme-third_gray md:flex-row md:justify-between">
      <LeftSticky />
      {children}
        <RightSticky />
    </div>
  );
};

export default Layout;
