import { motion } from "framer-motion";
import { styles } from "../styles";
import bluetech from "../assets/bluetech2.jpg";
import { TypeAnimation } from 'react-type-animation';





const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <img src={bluetech} className="absolute inset-0 w-full h-full object-cover">
    </img>
      <div
        className={`absolute inset-0 top-[90px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4169E1]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Hey, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-300">Matt.</span>
          </h1>

          <p className={`${styles.sectionHeadText} text-white-100`}>
            I'm a {" "}

          <TypeAnimation  className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-300 ${styles.heroHeadTextGradient}`}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'UI/UX Designer.',
        1000,
        'Mobile Developer.',
        1000,
        'Tech Enthusiast.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </p>

        </div>
      </div>

      <div className='absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center'>
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
