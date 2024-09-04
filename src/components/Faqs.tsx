import React, { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from "next/font/google";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

const faqs = [
  {
    question: "How can we register for B.A.D. Talks?",
    answer: "You can register for B.A.D. Talks through our official website by filling out the registration form and submitting the required entry fee of 100 INR.",
  },
  {
    question: "What is the entry fee for B.A.D. Talks?",
    answer: "The entry fee for B.A.D. Talks is 100 INR per participant. Please ensure the payment is completed during the registration process.",
  },
  {
    question: "When and where is B.A.D. Talks being held?",
    answer: "B.A.D. Talks will be held on 17th September at Medicaps University, Indore. Make sure to mark your calendar for this insightful event!",
  },
  {
    question: "Who are the speakers at B.A.D. Talks?",
    answer: "The event will feature prominent speakers, including Divyank Sood, Akhil Singh Thakur, Benjamin Miller, Sarthak Mittal, and Yash Mishra, who will share their experiences and insights on entrepreneurship, technology, and leadership.",
  },
  {
    question: "Who is organizing B.A.D. Talks?",
    answer: "B.A.D. Talks is organized by the IEEE Student Branch at Medicaps University, with support from various sponsors and partners.",
  },
  {
    question: "Will participants receive certificates?",
    answer: "Yes, all participants will receive certificates of participation at the end of the event. There will also be certificates for outstanding contributions and special recognitions.",
  },
  {
    question: "When will we receive our certificates?",
    answer: "Certificates will be distributed to all participants at the conclusion of the event on 17th September.",
  },
  {
    question: "What is B.A.D. Talks?",
    answer: "B.A.D. Talks is an event where thought leaders and successful entrepreneurs come together to inspire and share their journey, offering students insights into the world of business, technology, and innovation.",
  },
  {
    question: "What can we expect from the event?",
    answer: "Participants can expect engaging talks, networking opportunities, and interactive sessions with industry leaders, as well as a platform to gain valuable insights and mentorship.",
  },
  {
    question: "How can we contact the organizers for more information?",
    answer: "For more information, you can contact the organizers through the contact form on our official website or by emailing us at ieee@medicaps.ac.in.",
  },
];


const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const itemControls = useAnimation();
  const [itemRef, itemInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (sectionInView) {
      sectionControls.start('visible');
    } else {
      sectionControls.start('hidden');
    }
  }, [sectionControls, sectionInView]);

  React.useEffect(() => {
    if (itemInView) {
      itemControls.start('visible');
    } else {
      itemControls.start('hidden');
    }
  }, [itemControls, itemInView]);

  return (
    <motion.div
      ref={sectionRef}
      className="container mx-auto px-4 py-8 w-11/12 backdrop-blur-sm"
      initial="hidden"
      animate={sectionControls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.h1
        className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading mb-8`}
        initial={{ y: -50, opacity: 0 }}
        animate={sectionControls}
        variants={{
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        Frequently Asked Questions (FAQ)
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 px-2">
          {faqs.slice(0, 5).map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 max-w-[400px]"
              ref={itemRef}
              initial={{ x: -50, opacity: 0 }}
              animate={itemControls}
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
              }}
            >
              <div
                className="bg-white/70 shadow-md rounded-lg p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-bold text-black">{faq.question}</h2>
                {expandedIndex === index ? <FiChevronUp className="text-2xl text-black" /> : <FiChevronDown className="text-2xl text-black" />}
              </div>
              {expandedIndex === index && (
                <motion.div
                  className="p-4 bg-white/70 "
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="w-full md:w-1/2 px-2">
          {faqs.slice(5).map((faq, index) => (
            <motion.div
              key={index + 6}
              className="mb-4 max-w-[400px]"
              ref={itemRef}
              initial={{ x: 50, opacity: 0 }}
              animate={itemControls}
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 0.3, delay: (index + 6) * 0.1 } },
              }}
            >
              <div
                className="bg-white/70 shadow-md rounded-lg p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index + 6)}
              >
                <h2 className="text-lg font-bold text-black">{faq.question}</h2>
                {expandedIndex === index + 6 ? <FiChevronUp className="text-2xl text-black" /> : <FiChevronDown className="text-2xl text-black" />}
              </div>
              {expandedIndex === index + 6 && (
                <motion.div
                  className="p-4 bg-white/70 "
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const App = () => (
  <div>
    <FAQSection />
    {/* Other components can be added here */}
  </div>
);

export default App;