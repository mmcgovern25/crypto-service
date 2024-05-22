import React from 'react';
import { Tilt } from "react-tilt";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";

 const Technologies = ({ index }) => {
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
        <Tilt key={index} className='p-[1px] rounded-[12px]'>
          <motion.div
            variants={fadeIn('right', 'spring', index * 0.2, 0.5)}
            className='green-pink-gradient p-[1px] rounded-[12px]'
          >
            <div className='bg-tertiary rounded-[12px]'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-28 h-28 rounded-[12px] object-contain'
              />
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Technologies, "technologies");
