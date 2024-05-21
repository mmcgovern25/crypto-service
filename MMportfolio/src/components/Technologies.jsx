import React from 'react';
import { Tilt } from "react-tilt";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

 const Technologies = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Tools that I Use
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-12 mt-24'>
  {technologies.map((technology, index) => (
    <Tilt key={index} className='tech-icon-container green-pink-gradient p-[1px] rounded-[12px]'>
      <img
        src={technology.icon}
        alt={technology.name}
        className='tech-icon w-28 h-28 rounded-[12px] bg-tertiary shadow-card'
      />
    </Tilt>
  ))}
</div>
    </>
  )
}

export default SectionWrapper(Technologies, "technologies");
