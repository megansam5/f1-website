import "./learnMore.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const LearnMore = () => {
  return (
    <div className="learnMore">
      <div className="title-container">
        <h1 className="title">Now Enjoy the Excitement of Formula 1</h1>
      </div>

      <div className="svg-container">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          viewBox="0 0 300 300"
          className="svg "
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <text fill="#000">
            <textPath xlinkHref="#circlePath" className="circle-text">
              Keep Exploring the World of Formula 1
            </textPath>
          </text>
        </motion.svg>
        <motion.a
          className="center-text"
          whileHover={{ scale: 1.2, backgroundColor: "grey" }}
          href="https://www.formula1.com/"
        >
          Learn <br></br>More
        </motion.a>
      </div>
    </div>
  );
};

export default LearnMore;
