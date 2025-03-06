import Image from "next/image";
import Logo from "./logo";
import MenuToggle from "./menu-toggle";
import {ModeToggle} from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Navbar = () => {
  return (
    <nav className="py-4 border-b">
      <div
        className="md:w-[95%] w-[92%] mx-auto 
    flex items-center justify-between"
      >
        <div className=" flex items-center gap-5">
          <Logo />
          <MenuToggle />
        </div>
        <div>
          <div className="flex items-center gap-8 ">
            <ModeToggle />
            <span className="max-md:hidden">welcome back</span>
            <Avatar>
              <AvatarImage src="avatar-image.avif" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};
