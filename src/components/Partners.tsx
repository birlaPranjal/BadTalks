import React from 'react';
import Image from 'next/image';
import { Turret_Road } from 'next/font/google';
import { motion } from 'framer-motion';

export const turret = Turret_Road({
  weight: '800',
  subsets: ['latin'],
});

import { partners } from './../../public/partners';
import geek from '../../public/partner-logo/geek.png';

const PartnersSection: React.FC = () => {
  return (
    <div className="md:w-11/12 mx-auto mt-20">
      {partners.map((partnerCategory, index) => (
        <motion.div
          key={index}
          className="mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className={`text-3xl md:text-5xl font-bold text-primary-heading    font-bold`}>
              {partnerCategory.type}
            </h2>
          </motion.div>
          <div className="mx-auto gap-y-5 flex justify-center items-center flex-wrap md:px-4">
            {partnerCategory.partners.map((partner, id) => (
              <motion.div
                className="mx-4 p-4 bg-white/10 h-[250px] w-[40vw]  md:w-[250px]  rounded-lg flex flex-col justify-center items-center"
                key={id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: (index * 4 + id) * 0.1 }}
              >
                <div className="h-32 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={150}
                    objectFit="contain"
                    className={` ${partner.className}`}
                  />
                </div>
                <h3 className="text-white mt-8 text-center">{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PartnersSection;