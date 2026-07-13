import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={35}
    tiltMaxAngleY={35}
    scale={1}
    transitionSpeed={450}
    className='w-full lg:w-[250px]'
  >
    <motion.div
      variants={fadeIn("", "spring", index * 0.12, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] px-3 py-5 min-h-[190px] sm:px-8 sm:min-h-[240px] lg:px-12 lg:min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='h-12 w-12 object-contain sm:h-16 sm:w-16'
        />

        <h3 className='text-white text-[16px] sm:text-[20px] font-bold text-center leading-snug'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {profile.summary}
      </motion.p>

      <div className='mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 lg:mt-20 lg:flex lg:flex-wrap lg:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
