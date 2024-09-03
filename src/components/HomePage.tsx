import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Navbar from "./common/Navbar";
import SectionDividerLine from "./SectionDividerLine";
import Link from "next/link";
import TechnologyCarnivalHeader from "./TechnologyCarnivalHeader";
import heroImage from "../../public/heroImage.svg"
import Timeline from "./Timeline";
import PrizeGrid from "./PrizeGrid";
import Faqs from "./Faqs";
import TeamSection from "./TeamSection";
import MayorsKeynote from "./MayorsKeynote";
import ContactPage from "./Contact";
import Socials from "./Socials";
import Footer from "@/components/common/Footer";

import { Turret_Road } from "next/font/google";
import CommunityPartners from "./Partners";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";


export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const HomePage: React.FC = () => {
 const targetDate = new Date("2024-09-17");
  const timelineData = [
    { label: "Problem Statements Release" },
    { label: "Idea Proposal Submission" },
    { label: "Announcement of Selected Teams" },
    { label: "Hackathon Starts" },
    { label: "Hackathon Ends" },
    { label: "Announcement of Winners" },
  ];

  // Animation variants for the main content
  const mainContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // Delay of 0.5 seconds
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={mainContentVariants}
        className="pt-20"
      >

        <section
          id="hero"
          className="w-11/12 mx-auto p-5 sm:pt-16 max-w-[110rem] pt-8 backdrop-blur-sm"
        >
          <Image
              src={heroImage}
              className="h-[500px] w-[80vw] mx-auto -mt-16 "
              alt="Logo"
              priority
            />
        </section>
        <SectionDividerLine />
          <div className=" pt-10">
            <TechnologyCarnivalHeader />
          </div>
        <div id="vision"></div>
        <section id="vision" className="pb-8">
          <MayorsKeynote/>
        </section>

        
        <section >
          <PrizeGrid />
        </section>
        <div id="timeline"></div>
        <section>
          <Timeline />
        </section>
        <section id="" className="hidden  flex-col items-center gap-4 pt-16">
          <TeamSection />
        </section>
        <section id="" className="  flex-col items-center gap-4 pt-16">
          <CommunityPartners />
        </section>
        <section
          id="faqs"
          className="flex flex-col items-center gap-4 pt-16"
        >
        <Faqs />
        <SectionDividerLine />
        </section>
        <section id="guidelines">
          <ContactPage />
        </section>
        <section id="guidelines">
          <Footer />
        </section>
      </motion.div>
    </div>
  );
};

export default HomePage;
