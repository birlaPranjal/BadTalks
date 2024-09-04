import { turret } from "@/components/HomePage";
import TeamCard from "./TeamCard";
import { team } from "../../public/team";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

type Person = {
  id: number;
  img: string;
  name: string;
};

type TeamGroup = {
  position: string;
  members: Person[];
};

type TeamSectionProps = {
  team: TeamGroup[];
};

const TeamSection = () => {
  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const cardControls = useAnimation();
  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (sectionInView) {
      sectionControls.start("visible");
    } else {
      sectionControls.start("hidden");
    }
  }, [sectionControls, sectionInView]);

  React.useEffect(() => {
    if (cardInView) {
      cardControls.start("visible");
    } else {
      cardControls.start("hidden");
    }
  }, [cardControls, cardInView]);

  return (
    <motion.section
      ref={sectionRef}
      className="w-11/12 mx-auto flex flex-col items-center gap-y-4"
      id="team"
      initial="hidden"
      animate={sectionControls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
      }}
    >
      {team?.map((group) => (
        <motion.div
          key={group.post}
          className="w-full"
          ref={cardRef}
          initial="hidden"
          animate={cardControls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h1
            className={`text-3xl lg:text-start lg:text-5xl font-bold  font-bold text-primary-heading flex justify-center py-8 items-center`}
          >
            {group.post}
          </h1>
          <div className="flex justify-center gap-5 md:gap-x-16 md:gap-y-8 flex-wrap">
            {group.members?.map((person) => (
              <TeamCard key={person.id} person={{ ...person, post: group.post }} />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default TeamSection;