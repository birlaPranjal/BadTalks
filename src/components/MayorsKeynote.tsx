import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Turret_Road } from "next/font/google";
import Image from 'next/image';

export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

interface LeaderData {
    name: string;
    title: string;
    image: string;
    description: string;
    socials: string[];
}

const LeaderTemplate: React.FC<LeaderData & { reverse?: boolean }> = ({ name, title, image, description, reverse }) => {
    return (
        <motion.div 
            className={`sm:w-10/12 mx-auto flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-start justify-between mb-16`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div className="md:w-1/3 mb-8 md:mb-0" >
                <Image 
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className="rounded-3xl border mx-auto max-h-[400px] object-cover"
                />
            </motion.div>
            <motion.div className="md:w-2/3 text-left pl-0 md:pl-8" >
                <h2 className="text-2xl font-bold text-primary-heading text-center md:text-left">{name}</h2>
                <p className="text-gray-400 mb-4 text-center md:text-left">{title}</p>
                <p className="mb-4 text-gray-100 text-base">{description}</p>
            </motion.div>
        </motion.div>
    );
};

const speakerData: LeaderData[] = [
    {
        name: "Benjamin Miller",
        title: "Global BD Head @SixthSensAI",
        image: "/benjamin.jpg",
        description: "Benjamin Miller: So good, he's bad. 😎 Started repenting at 14 by organizing his first fundraiser, now a freestyle rapper with an MBA, who's traveled to 45+ countries. 🌍 From troublemaker to high school prom prince, Ben set records with Teach For America and climbed from intern to COO in top NGOs. 🚀\n\nNow in Indore, Ben runs Beyond Coworking, an incubator empowering entrepreneurs and offering global internships. 🌱 As Global BD Head @SixthSensAI, he's launching new brands and rocking the startup scene! Also, one course away from his second Master’s in AI & ML. 🤖💼 #EntrepreneurLife #AI #GlobalImpact #StartupIndia #RapLife",
        socials: []
    },
    {
        name: "Divyank Sood",
        title: "Founder @Immfinite",
        image: "/devank.jpg",
        description: "🇮🇳 Made in India, Assembled in USA 🇺🇸\n🚀 Founder @immfinite | MBA from Johnson & Wales University (USA) | Masters in Event Mgt. & PR, Prestige Institute\n\nA proud Indori and first-gen entrepreneur with 10+ years of experience. Passionate about global education, startups, and mentoring! 🌎 Immfinite is on a mission to connect Indian talent with global opportunities. 🌟 #Entrepreneurship #GlobalSuccess #IndoriPride #Immfinite #Mentorship #StartupIndia",
        socials: []
    },
    {
        name: "Sarthak Mittal",
        title: "Chairman & CEO of Mittal Alliance",
        image: "/sarthak.jpg",
        description: "As Chairman & CEO of Mittal Alliance, I'm dedicated to bridging academia and industry, empowering future leaders, and driving innovation. 🚀 At Mittal Alliance, we support MSMEs through strategic partnerships and resources to fuel growth. 🌟 I'm passionate about leadership, strategic planning, and creating opportunities for sustainable innovation.\n\nI also share insights on personal development through my YouTube channel, blogs, and publications. 📚 Mentoring young professionals is my way of giving back. Let's empower MSMEs and startups to reach their full potential! 💡 #Leadership #MSME #Innovation #Entrepreneurship #Mentorship",
        socials: []
    },
    {
        name: "Yash Mishra",
        title: "Founder & CEO of Innovait Technologies",
        image: "/yash.jpg",
        description: "Founder & CEO of Innovait Technologies | IT Consultant | Passionate about empowering MSMEs with innovative tech solutions and driving global growth for Indian industries! 🌐🚀 #TechForGood #MSME #Innovation #Leadership #GlobalExpansion",
        socials: []
    },
    {
        name: "Akhil Singh Thakur",
        title: "Founder @Virtual Coworks",
        image: "/akhil.jpg",
        description: "Leading Virtual Coworks in Indore with 9 centers and a mission to empower entrepreneurs, startups, and freelancers! 🚀 Also co-founder @DialusPlacement and mentor at Human Care NGO. Passionate about innovation and community building! 🌟 #Coworking #Leadership #Entrepreneurship #Indore #Innovation",
        socials: []
    },
];

const LeadershipVision: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            className='mt-16 pt-8 pb-16 w-11/12 mx-auto px-5 backdrop-blur-sm'
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
        >
            <motion.h1 
                className={`font-extrabold text-2xl sm:text-4xl xl:mt-5 xl:text-6xl myShadow text-primary-heading text-center ${turret.className} pb-5 md:pb-14`} 
            >
                Our Speakers
            </motion.h1>
            {speakerData.map((leader, index) => (
                <LeaderTemplate key={index} {...leader} reverse={index % 2 !== 0} />
            ))}
        </motion.div>
    );
};

export default LeadershipVision;
