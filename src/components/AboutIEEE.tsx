import React, { useEffect } from 'react';
import { turret } from '@/components/Countdown';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const AboutIEEE = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    console.log('Is in view:', isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-12 w-11/12 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      {/* Image on the left side for large screens */}
      <motion.div
        className="order-1 relative flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="https://res.cloudinary.com/teamify-sub/image/upload/v1725482935/WhatsApp_Image_2024-09-05_at_02.18.19_394900bd_oj5sjh.jpg"
          alt="IEEE Student Club Image"
          width={600}
          height={600}
          className="rounded-2xl shadow-lg hidden sm:block"
        />
      </motion.div>
      
      <motion.div
        className="order-2 md:order-1 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className={`text-2xl md:text-5xl font-bold ${turret.className} text-primary-heading mb-8 md:mb-16`}>
          IEEE Student Club - Medicaps University
        </h1>
        {/* Image for small screens */}
        <Image
          src="https://res.cloudinary.com/teamify-sub/image/upload/v1725482935/WhatsApp_Image_2024-09-05_at_02.18.19_394900bd_oj5sjh.jpg"
          alt="IEEE Student Club Image"
          width={600}
          height={600}
          className="rounded-2xl shadow-lg sm:hidden"
        />
        <p className="text-base sm:text-md md:text-md text-justify mb-4 md:mb-8 mt-4">
          The IEEE Student Club at Medicaps University is a dynamic student organization dedicated to fostering interest and engagement in the field of electrical and electronics engineering. Members collaborate on projects, participate in technical events, and stay updated on the latest advancements in technology through workshops and seminars. The club serves as a platform for students to enhance their skills, network with professionals, and contribute to the academic and technical community.
        </p>
        <p>We also promote leadership and teamwork through various group activities and competitions, empowering students to take on roles that build confidence and foster innovation.</p>
      </motion.div>
      
    </motion.div>
  );
};

export default AboutIEEE;
