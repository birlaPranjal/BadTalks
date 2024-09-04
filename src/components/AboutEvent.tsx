import React, { useEffect } from 'react';
import { turret } from '@/components/Countdown';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const AboutEvent = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    console.log('Is in view:', isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-12 w-11/12 mx-auto mt-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="order-2 md:order-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className={`text-2xl md:text-5xl font-bold  font-bold text-primary-heading mb-8 md:mb-16`}>
          B.A.D. Talks - The CEO Summit
        </h1>
        <p className="text-base md:text-md text-justify mb-4 md:mb-8">
        Join us for &quot;B.A.D. Talks - The CEO Summit,&quot; a flagship event by MUIEEE, Techno Club. This summit features inspiring TED-style talks from CEOs of leading companies, offering a unique opportunity to learn from industry leaders, gain insights into the world of business, and explore pathways for future growth. Don&apos;t miss this chance to connect, learn, and elevate your career!
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <h2 className={`text-lg md:text-2xl font-bold  font-bold mb-2`}>Date</h2>
            <p className="text-base md:text-xl">17th September 2024</p>
          </div>
          <div>
            <h2 className={`text-lg md:text-2xl font-bold  font-bold mb-2`}>Time</h2>
            <p className="text-base md:text-xl">2 PM - 5 PM</p>
          </div>
          <div>
            <h2 className={`text-lg md:text-2xl font-bold  font-bold mb-2`}>Venue</h2>
            <p className="text-base md:text-xl">Major Auditorium, Medicaps University</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="order-1 md:order-2 relative flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="https://res.cloudinary.com/teamify-sub/image/upload/v1725481854/WhatsApp_Image_2024-09-05_at_02.00.16_f5aa0c05_d9zutc.jpg"
          alt="Event Image"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutEvent;