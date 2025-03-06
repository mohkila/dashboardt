"use client";

import { useMenuStore } from "@/store/toggleMenuStore";
import { motion } from "framer-motion";
import Logoutbtn from "../authanticate/Logoutbtn";
import MenuLinks from "./menu-links";
const Sidebar = () => {
  const { isOpen } = useMenuStore();
  return (
    <div>
      <motion.div
        initial={{ width: isOpen ? 80 : 250 }}
        animate={{ width: isOpen ? 80 : 250 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`
          sticky z-10 top-0 flex flex-col
           h-screen items-center  overflow-hidden 
            py-10 border-r max-md:max-w-[80px]
        ${isOpen ? "max-md:hidden gap-10" : "block justify-between"}
        `}
      >
        <h2 className={`text-sm max-md:hidden
           ${isOpen && "hidden"}`} >
          Main Menu 
        </h2>
        <MenuLinks isOpen={isOpen} />
        <Logoutbtn />
      </motion.div>
    </div>
  );
};

export default Sidebar;
