import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../constants";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#915EFF]'>{profile.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {profile.headline}
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a
              href='#projects'
              className='rounded-lg bg-[#915EFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#915EFF]/30 transition hover:bg-[#7b4ed7]'
            >
              View Projects
            </a>
            <a
              href='#contact'
              className='rounded-lg border border-secondary px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
