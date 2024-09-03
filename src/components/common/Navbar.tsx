"use client";
import React, { useState } from "react";
import svvvLogo from "@/../public/bat.svg";
import Image from "next/image";
import { navData } from "../../../public/data/navData";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleModel = () => {
    setNavOpen(!navOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-20 bg-black/80 h-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <motion.div variants={itemVariants}>
          <Link href={"./"} className="py-2 flex">
            <Image
              src={svvvLogo}
              className="h-8 w-8 md:h-16 md:w-16 scale-110 mt-2 -mr-8 ml-8"
              alt="Logo"
            />
          </Link>
        </motion.div>

        <motion.div className="text-white hidden sm:flex sm:translate-x-16 w-[60vw] justify-center align-center gap-5 text-lg" variants={containerVariants}>
          {navData?.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={item?.path}
                className="px-4 text-[#EEE] hover:text-[#fff] text-nowrap transition-all duration-200 ease-in-out"
              >
                {item?.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="sm:hidden relative" variants={itemVariants}>
          <button onClick={toggleModel}>
            {!navOpen && <FiAlignJustify color="white" size={35} className="mt-2" />}
            {navOpen && <FaTimes color="#ddd" size={35} className="mt-2" />}
          </button>
          {navOpen && (
            <motion.div 
              className="absolute right-0 mt-2 flex flex-col bg-[#0f1437b0] border border-white rounded-lg p-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {navData?.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link
                    href={item?.path}
                    className="px-8 py-1 text-[#eee] hover:text-[#fff] text-nowrap transition-all duration-200 ease-in-out"
                  >
                    {item?.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div className="hidden lg:flex lg:ml-auto" variants={itemVariants}>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSedz9uw4ISXsJhAoD-N3WmbdRgvz_fsb1fYGd9SyeUHDYoBXA/viewform'
            target="_blank"
            className="relative px-4 py-2 text-xl text-center font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out shadow-lg"
          >
            <div className="relative z-10">Register Now</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-lg opacity-75 animate-pulse"></div>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
