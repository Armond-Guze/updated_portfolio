import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { highlights } from "../constants";

const HighlightCard = ({ index, title, description, detail }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-2xl xs:w-[320px] w-full'
  >
    <p className='text-white font-bold text-[22px]'>{title}</p>

    <div className='mt-4'>
      <p className='text-secondary tracking-wide text-[15px] leading-[26px]'>
        {description}
      </p>

      <p className='mt-6 text-[13px] font-semibold uppercase tracking-wider text-white-100'>
        {detail}
      </p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Quick strengths</p>
          <h2 className={styles.sectionHeadText}>Highlights.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {highlights.map((highlight, index) => (
          <HighlightCard key={highlight.title} index={index} {...highlight} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "highlights");
