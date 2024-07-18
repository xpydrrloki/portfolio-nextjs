import { Separator } from "@/components/ui/separator";
import ProgressBarComponent from "./ProgressBarComponent";
import Image from "next/image";

const LeftSticky = () => {
  return (
    <div className="w-[360px] container bg-white sticky top-0 h-screen py-0 text-xs">
      <div className="mt-0 mb-64 scale-90">
        <section className="flex flex-col items-center space-y-8 px-2">
          {/* bio section */}
          <div className="relative size-32 rounded-full border">
            <Image alt="avatar" src={""} fill className="object-contain" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <p className="font-semibold text-theme-main_black">
              Vincent Setiawan
            </p>
            <p className="font-light">Full-stack Web Developer</p>
          </div>
        </section>
        <Separator className="my-8" />
        <section className="space-y-4">
          <div className="flex justify-between">
            <p>Age</p>
            <p>26</p>
          </div>
          <div className="flex justify-between">
            <p>Region</p>
            <p>Yogyakarta, Indonesia</p>
          </div>
        </section>
        <Separator className="my-8" />
        <section>
          <h4 className="font-semibold text-xl">Languages</h4>
          <ProgressBarComponent
            label="Indonesian"
            value={100}
            color="bg-theme-main_yellow"
          />
          <ProgressBarComponent
            label="English"
            value={90}
            color="bg-theme-main_yellow"
          />
        </section>
        <Separator className="my-8" />
        <section>
          <h4 className="font-semibold text-xl">Skills</h4>
          <ProgressBarComponent
            label="HTML"
            value={95}
            color="bg-theme-main_yellow"
          />
          <ProgressBarComponent
            label="CSS"
            value={90}
            color="bg-theme-main_yellow"
          />
          <ProgressBarComponent
            label="JavaScript"
            value={90}
            color="bg-theme-main_yellow"
          />
          <ProgressBarComponent
            label="TypeScript"
            value={95}
            color="bg-theme-main_yellow"
          />
          <ProgressBarComponent
            label="Node.js"
            value={95}
            color="bg-theme-main_yellow"
          />
        </section>
      </div>
    </div>
  );
};

export default LeftSticky;
