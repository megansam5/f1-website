import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>FORMULA 1</motion.h2>
          <motion.h1 variants={textVariants}>
            Welcome to the exhilarating world of Formula 1, where speed,
            precision, and adrenaline converge in the ultimate pursuit of racing
            glory!
          </motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <a href="#Timeline">
              <motion.button variants={textVariants}>Race Layout</motion.button>
            </a>
            <a href="#Key Players">
              <motion.button variants={textVariants}>Drivers</motion.button>
            </a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        FORMULA 1
      </motion.div>
      <div className="imageContainer">
        <img src="/f1main.jpg" />
      </div>
    </div>
  );
};

export default Hero;
