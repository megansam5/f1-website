import "./keyWords2.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const KeyWords2 = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="keywords2"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <div className="keywords-container">
        <motion.div className="keywords-section" variants={variants}>
          <div className="first-row">
            <div className="section-title-container">
              <h2 className="section-title">Tire Compounds</h2>
            </div>
            <img
              src="tireimage.jpg"
              alt="tires image"
              className="section-image"
            />
          </div>
          <ul className="keyword-list">
            <li>
              {
                "Tire compounds refer to the different types of rubber compounds used in Formula 1 racing tires. These compounds affect the tire's grip, durability, and performance characteristics."
              }
            </li>
            <li>
              <strong>Soft:</strong> They have the highest grip and performance
              but tend to wear out faster than harder compounds.
            </li>
            <li>
              <strong>Medium:</strong> They offer a balance between grip and
              durability, suitable for various track conditions.
            </li>
            <li>
              <strong>Hard:</strong> They provide excellent durability but may
              have less grip compared to softer compounds.
            </li>
            <li>
              <strong>Intermediates:</strong> They are ½ treaded, used when
              there is light rain or when the track is partially dry after the
              rain has stopped.
            </li>
            <li>
              <strong>Wets:</strong> They have deep treads designed to disperse
              water and provide traction in heavy rain conditions.
            </li>
          </ul>
        </motion.div>
        <motion.div className="keywords-section" variants={variants}>
          <div className="first-row">
            <h2 className="section-title">Flags</h2>
            <img src="flagsimage.jpg" alt="Flags" className="section-image" />
          </div>
          <ul className="keyword-list">
            <li>
              <strong>Yellow Flag:</strong> A yellow flag, also known as a
              caution flag, is displayed by race officials to indicate a hazard
              or dangerous situation on the track. When shown, drivers must slow
              down, refrain from overtaking, and be prepared to take evasive
              action.
            </li>
            <li>
              <strong>Red Flag:</strong> A red flag is displayed by race
              officials to halt a race due to dangerous conditions, such as
              severe weather, accidents, or track obstructions. When shown,
              drivers must immediately stop on the track in a safe manner.
            </li>
            <li>
              <strong>Checkered Flag:</strong> The checkered flag is waved by
              race officials to signal the end of a race or session. It is waved
              as the lead car crosses the finish line, indicating that all other
              cars should complete the current lap and proceed to the pit lane.
            </li>
            <li>
              <strong>Blue Flag:</strong> A blue flag is shown to a driver to
              indicate that they are about to be lapped by a faster car. The
              driver receiving the blue flag must yield to the faster car at the
              earliest opportunity, allowing it to pass safely without impeding
              its progress.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default KeyWords2;
