"use client";

import Image from "next/image";
import Link from "next/link";
import { useMenuStore } from "@/store/toggleMenuStore";
import { motion, AnimatePresence } from "framer-motion";
const Logo = () => {
  const { isOpen } = useMenuStore();

  return (
    <div>
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={"logo-icon.svg"} alt="logo" width={30} height={30} />
        <AnimatePresence initial={false}>
          {!isOpen && (
            <motion.h1
              className="text-xl font-semibold max-md:hidden whitespace-nowrap"
              initial={{ width: 0, opacity: 0 }}
              animate={{width:"auto",opacity:1}}
              exit={{ width: 0, opacity: 0 }}
              transition={{duration:0.5}}

            >
              E-Commerce Dashboard
            </motion.h1>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
};

export default Logo;
