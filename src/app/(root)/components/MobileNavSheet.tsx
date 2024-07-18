"use cient";
import React, { Dispatch, FC, SetStateAction } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileNavSheetProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavSheet: FC<MobileNavSheetProps> = ({ open, setOpen }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side={"right"}
        ref={(ref) =>
          ref?.addEventListener("touchend", (e) => e.preventDefault())
        }
      >
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;
