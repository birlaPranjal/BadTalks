"use client";
import React, { useState } from "react";
import AbhyudayaLogo from "@/../public/ieee.svg";
import Image from "next/image";
import { navData } from "../../../public/data/navData";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { FaTimes, FaExternalLinkAlt, FaInstagram, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showPortals, setShowPortals] = useState(false);

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
    <>
      <motion.nav 
        className="fixed mb-16 w-full z-20  bg-rich-blue-bg/80"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-11/12 mx-auto flex items-center justify-evenly">
          <motion.div variants={itemVariants}>
            <Link href={"./"} className="py-2 flex">
              
              <Image
                src={AbhyudayaLogo}
                className="h-8 w-52 md:h-16 md:w-64 translate-y-1"
                alt="Logo"
                priority
              />
            </Link>
          </motion.div>
          <motion.div className="text-white hidden sm:flex sm:translate-x-16" variants={containerVariants}>
            {navData?.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link
                  href={item?.path}
                  className="px-4 text-[#EEE] hover:text-[#fff] hover:scale-125 text-nowrap transition-all duration-200 ease-in-out"
                >
                  {item?.title}
                </Link>
              </motion.div>
            ))}
            <motion.div 
              className="relative"
              onMouseEnter={() => setShowPortals(true)}
              onMouseLeave={() => setShowPortals(false)}
              variants={itemVariants}
            >
              
            </motion.div>
          </motion.div>
          <motion.div className="sm:invisible relative" variants={itemVariants}>
            <button onClick={toggleModel}>
              {!navOpen && <FiAlignJustify color="white" size={35} className="mt-2 ml-12" />}
              {navOpen && <FaTimes color="#ddd" size={35} className="mt-2 ml-12" />}
            </button>
            {navOpen && (
              <motion.div 
                className="absolute right-4 flex flex-col bg-[#0f1437b0] border border-white rounded-lg p-4"
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
          <motion.div variants={itemVariants}>
            <Link
              href='https://unstop.com/p/hackndore-indore-municipal-corporation-1069856?lb=A3xScbSM&utm_medium=Share&utm_source=WhatsApp'
              target="_blank"
              className="hidden lg:block relative px-4 py-2 text-2xl text-center font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out shadow-lg"
            >
              <div className="relative z-10">Registrations Closed</div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-lg opacity-75 animate-pulse"></div>
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Footer Section */}
      <footer className="bg-rich-blue-bg text-white py-8 mt-16">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-evenly">
          <div className="mb-4">
            <Link href={"./"} className="py-2 flex">
              
              <Image
                src={AbhyudayaLogo}
                className="h-8 w-52 md:h-16 md:w-64 translate-y-1"
                alt="Logo"
                priority
              />
            </Link>
            <p className="mt-2 text-gray-400 ml-16">B.A.D Talks - 2024</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-4 md:mb-0 md:mr-8">
              <h4 className="font-bold">Quick Links</h4>
              {navData?.map((item, idx) => (
                <Link key={idx} href={item?.path} className="block mt-2 text-gray-400 hover:text-white">
                  {item?.title}
                </Link>
              ))}
            </div>
          
            <div className="sm:ml-10">
              <h4 className="font-bold">Contact Us</h4>
              <p className="mt-2 text-gray-400">Email: muieee@medicaps.ac.in</p>
              <div className="mt-2 flex  ">
                <Link href="https://www.instagram.com/medicaps_ieee?igsh=Z2lmc250d3ptY3Nw" target="_blank" className="mr-2 text-gray-400 hover:text-white">
                  <FaInstagram />
                </Link>
                <Link href="https://www.instagram.com/b.a.d.talks_medicapsuniversity?igsh=dWZkMTdiejhma2h2" target="_blank" className="mr-2 text-gray-400 hover:text-white">
                  <FaInstagram />
                </Link>
                <Link href="https://discord.gg/eZHqaxNGRF" target="_blank" className="text-gray-400 hover:text-white">
                  <FaDiscord />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} MUIEEE. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Navbar;