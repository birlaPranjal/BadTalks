import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Navbar from "./common/Navbar";
import SectionDividerLine from "./SectionDividerLine";
import Link from "next/link";
import heroImage from "../../public/heroImage.svg"
import Timeline from "./Timeline";
import Faqs from "./Faqs";
import TeamSection from "./TeamSection";
import MayorsKeynote from "./MayorsKeynote";
import ContactPage from "./Contact";
import { Turret_Road } from "next/font/google";
import CommunityPartners from "./Partners";
import AboutEvent from "./AboutEvent";
import AboutIEEE from './AboutIEEE';
import Image from "next/image";
import Footer  from '@/components/common/Footer';
export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const HomePage: React.FC = () => {
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
        className=""
      >

        <section
          id="hero"
          className="w-11/12 mx-auto p-5 sm:mt-16 backdrop-blur-sm flex flex-col items-center justify-center"
        >
          <Image
              src={heroImage}
              className="h-[500px] sm:w-[70vw] w-[90vw] mx-auto  "
              alt="Logo"
              priority
            />
            <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSedz9uw4ISXsJhAoD-N3WmbdRgvz_fsb1fYGd9SyeUHDYoBXA/viewform'
            target="_blank"
            className="border-2 md:border-4 w-52  lg:block relative px-4 py-2 text-xl text-center font-bold text-white "
          >
            Register Now
         </Link>
         <h1 className="text-xl sm:text-3xl mt-5 ">Passes are out now 🎫</h1>
         <h1 className="text-xl sm:text-3xl mt-2 ">Hurry Up Get your Passes Soon!!</h1>
        </section>
        <SectionDividerLine />
        <div id="vision"></div>
        <section id="about" className="pb-8">
          <AboutEvent/>
        </section>
        <section id="vision" className="pb-8">
          <MayorsKeynote/>
        </section>
        <section id="aboutUs" className="pb-8">
          <AboutIEEE/>
        </section>
        <div id="timeline"></div>
        <section>
          <Timeline />
        </section>
        <section id="" className="flex-col items-center gap-4 ">
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
        <section id="guidelines" className="-mt-32 mb-32">
          <ContactPage />
        </section>
        <section id="" className="-mt-32 ">
          <Footer />
        </section>
      </motion.div>
    </div>
  );
};

export default HomePage;
