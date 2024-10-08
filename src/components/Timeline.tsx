import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from 'next/font/google';

const turret = Turret_Road({
  weight: '800',
  subsets: ['latin'],
});

export default function CustomTimeline() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className=' md:mt-20 py-10  backdrop-blur-sm md:w-10/12 mx-auto'
    >
      <motion.h1 
        className={` text-2xl text-center md:text-5xl font-bold mb-10   font-bold text-primary-heading`}
        variants={itemVariants}
      >
        Event Flow 
      </motion.h1>
      <Timeline position="alternate-reverse">
        {/* Item 1 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className='text-primary-heading' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              {/* <div className="w-28 md:text-2xl text-xl text-right  font-bold text-primary-heading">5-09-24</div> */}
              <div className='text-white text-right md:text-xl '>⁠Medicaps Anthem
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col  justify-start" variants={itemVariants}>
              {/* <div className="w-28 text-xl md:text-2xl  font-bold text-primary-heading">14-09-24</div> */}
              <div className='text-white text-left md:text-xl'>Saraswati Vandana</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              {/* <div className="w-28 md:text-2xl text-xl text-right  font-bold text-primary-heading">23-07-24</div> */}
              <div className='text-right md:text-xl'>⁠⁠Introduction of Event
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 2 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col justify-start " variants={itemVariants}>
              {/* <div className="w-28 text-xl md:text-2xl  font-bold text-primary-heading">26-07-24</div> */}
              <div className='text-left md:text-xl'>Welcome of Guests and Dignataries</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 3 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              {/* <div className="w-28 md:text-2xl text-xl  font-bold text-primary-heading">26-07-24</div> */}
              <div className='text-right md:text-xl'>⁠⁠Speech by Mr. Sarthak Mittal
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 4 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col justify-start" variants={itemVariants}>
              {/* <div className="w-28 text-xl md:text-2xl  font-bold text-primary-heading">28-07-24</div> */}
              <div className='text-left md:text-xl'>Speech by Mr.HarshWardhan singh </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>


        {/* Item 5 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              {/* <div className="w-28 md:text-2xl text-xl  font-bold text-primary-heading">26-07-24</div> */}
              <div className='text-right md:text-xl'>⁠Quiz</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

          {/* Item 6 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col justify-start" variants={itemVariants}>
              {/* <div className="w-28 text-xl md:text-2xl  font-bold text-primary-heading">28-07-24</div> */}
              <div className='text-left md:text-xl'> Speech by Mr.Yash Mishra </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 7 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              {/* <div className="w-28 md:text-2xl text-xl  font-bold text-primary-heading">26-07-24</div> */}
              <div className='text-right md:text-xl'>Podcast</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 8 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col justify-start" variants={itemVariants}>
              {/* <div className="w-28 text-xl md:text-2xl  font-bold text-primary-heading">28-07-24</div> */}
              <div className='text-left md:text-xl'>Speech by Mr.Akhil Singh Thakur </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 9 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              {/* <div className="w-28 md:text-2xl text-xl  font-bold text-primary-heading">26-07-24</div> */}
              <div className='text-right md:text-xl'>Speech by Mr.Benjamin Miller</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 10 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col justify-start" variants={itemVariants}>
              {/* <div className="w-28 text-xl md:text-2xl  font-bold text-primary-heading">28-07-24</div> */}
              <div className='text-left md:text-xl'>Speech by Dean of Enginnering </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>


        {/* Item 11 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              {/* <div className="w-28 md:text-2xl text-xl  font-bold text-primary-heading">26-07-24</div> */}
              <div className='text-right md:text-xl'>Speech by Pro Vice Chancellor</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

         {/* Item 12 */}
         <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col justify-start" variants={itemVariants}>
              {/* <div className="w-28 text-xl md:text-2xl  font-bold text-primary-heading">28-07-24</div> */}
              <div className='text-left md:text-xl'>Speech by Vice Chancellor </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 13 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col items-end justify-end" variants={itemVariants}>
              {/* <div className="w-28 md:text-2xl text-xl  font-bold text-primary-heading">26-07-24</div> */}
              <div className='text-right md:text-xl'>Vote of Thanks</div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        {/* Item 14 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div className="flex flex-col justify-start" variants={itemVariants}>
              {/* <div className="w-28 text-xl md:text-2xl  font-bold text-primary-heading">28-07-24</div> */}
              <div className='text-left md:text-xl'>National Anthem </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>



      </Timeline>
    </motion.div>

    

    
  );
}