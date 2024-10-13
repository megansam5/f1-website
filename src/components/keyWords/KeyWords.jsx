import "./keyWords.scss";
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

const KeyWords = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="keywords"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <div className="title-container">
        <h1>Key Words</h1>
      </div>
      <div className="keywords-container">
        <motion.div className="keywords-section" variants={variants}>
          <div className="first-row">
            <div className="section-title-container">
              <h2 className="section-title">On the Track</h2>
            </div>
            <img
              src="trackimage.jpg"
              alt="On the Track"
              className="section-image"
            />
          </div>
          <ul className="keyword-list">
            <li>
              <strong>Apex:</strong> The apex is the point on a racing line at
              which a car is closest to the inside of a turn.
            </li>
            <li>
              <strong>Chicane:</strong> A chicane is a sequence of tight,
              alternating turns on a race track designed to slow down vehicles
              and create technical challenges.
            </li>
            <li>
              <strong>Sector:</strong> A sector is a portion of a racing
              circuit, typically divided into three sectors for timing and
              performance analysis.
            </li>
            <li>
              <strong>Safety Car:</strong> The safety car is a vehicle deployed
              onto the track during a race to slow down and control the in the
              event of an incident or hazardous track conditions.
            </li>
          </ul>
        </motion.div>
        <motion.div className="keywords-section" variants={variants}>
          <div className="first-row">
            <h2 className="section-title">On the Car</h2>
            <img
              src="carimage.jpg"
              alt="On the Car"
              className="section-image"
            />
          </div>
          <ul className="keyword-list">
            <li>
              <strong>Halo:</strong>{" "}
              {
                "The halo is a safety device mounted above the cockpit of Formula 1 cars to protect the driver's head from impact in the event of a crash."
              }
            </li>
            <li>
              <strong>Chassis:</strong> The chassis is the main structural
              component of a Formula 1 car, comprising the frame to which the
              engine, suspension, and other components are attached.
            </li>
            <li>
              <strong>Front Wing:</strong> The front wing is an aerodynamic
              component mounted at the front of a Formula 1 car to generate
              downforce and control airflow over the car.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default KeyWords;
