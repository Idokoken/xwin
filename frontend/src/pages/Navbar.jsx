import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import Profile from "../assets/profile.jpg";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <div
      className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex 
    items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-0 flex flex-col justify-center"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1 ">
                  <Avatar>
                    <AvatarImage src={Profile} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <span className="font-bold text-orange-700">Ken</span>
                    <span>Tread</span>
                  </div>
                </div>
                <Sidebar />
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">Xwin Trading</p>
        <div className="p-0 ml-9">
          <Button variant="outline className='flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>
      <div className="">
        <Avatar>
          <AvatarFallback>XT</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Navbar;
