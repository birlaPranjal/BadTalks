import React from 'react';
import Image from 'next/image';
import { Turret_Road } from 'next/font/google';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const turret = Turret_Road({
  weight: '800',
  subsets: ['latin'],
});
import geek from '../../public/partner-logo/geek.png';

const PartnersSection: React.FC = () => {
  const headingControls = useAnimation();
  const imageControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      headingControls.start('visible');
      imageControls.start('visible');
    } else {
      headingControls.start('hidden');
      imageControls.start('hidden');
    }
  }, [headingControls, imageControls, inView]);

  return (
    <motion.div
      ref={ref}
      className="md:w-11/12 mx-auto"
      initial="hidden"
      animate={headingControls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <motion.h2
        className={`text-3xl md:text-5xl font-bold py-10 mb-8 text-primary-heading text-center ${turret.className}`}
        initial={{ y: -50, opacity: 0 }}
        animate={headingControls}
        variants={{
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        Powered By
      </motion.h2>
      <motion.div
        className="flex items-center justify-center pb-16"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={imageControls}
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <Image
          src={geek}
          alt={'geek'}
          width={300}
          height={100}
          objectFit="contain"
          className={`md:scale-150`}
        />
      </motion.div>
    </motion.div>
  );
};

export default PartnersSection;