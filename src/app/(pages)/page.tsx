"use client";
import React, { useState } from "react";
import VideoComponent from "@/components/VideoComponent";
import HomePage from "@/components/HomePage";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const Index: React.FC = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleAnimationComplete = () => {
    setShowHomePage(true);
  };

  return (
    <div className="bg-black text-white relative">
      <div className="z-40 relative">
        <AnimatePresence>
          {!showHomePage ? (
            <>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="bg-black ">
                  <VideoComponent
                    src="/intro.mp4"
                    onComplete={handleAnimationComplete}
                    className=""
                  />
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              key="homepage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HomePage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;