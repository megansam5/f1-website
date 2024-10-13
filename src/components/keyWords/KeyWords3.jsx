import "./keyWords3.scss";
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
const KeyWords3 = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="keywords3"
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
              <h2 className="section-title">Technical Terms</h2>
            </div>
            <img
              src="technicalimage.jpg"
              alt="overtake"
              className="section-image"
            />
          </div>
          <ul className="keyword-list">
            <li>
              <strong>Lock-up:</strong> A lock-up occurs when a tire loses
              traction under braking, causing it to skid along the surface of
              the track instead of rolling smoothly.
            </li>
            <li>
              <strong>Undercut:</strong> The undercut is a strategic manoeuvre
              in Formula 1 racing where a driver pits for fresh tires earlier
              than their competitors to gain track position through faster lap
              times before their rivals make their pit stops.
            </li>
            <li>
              <strong>Overcut:</strong> The overcut is a strategic manoeuvre in
              Formula 1 racing where a driver stays out on old tires longer than
              their competitors before making their pit stop, in order to gain
              track position through faster out-laps or by benefiting from their
              rivals being held up in traffic.
            </li>
            <li>
              <strong>Understeer:</strong> Understeer occurs when a car&apos;s
              front tires lose traction during cornering, causing the car to
              continue in a wider arc than intended.
            </li>
            <li>
              <strong>Oversteer:</strong> Oversteer occurs when a car&apos;s
              rear tires lose traction during cornering, causing the rear of the
              car to swing outwards, potentially leading to a spin.
            </li>
          </ul>
        </motion.div>
        <motion.div className="keywords-section" variants={variants}>
          <div className="first-row">
            <h2 className="section-title">Race Dynamics</h2>
            <img
              src="dynamicsimage.jpg"
              alt="overtake"
              className="section-image"
            />
          </div>
          <ul className="keyword-list">
            <li>
              <strong>Aerodynamics:</strong> The study of airflow over and
              around the car, crucial for performance and efficiency.
            </li>

            <li>
              <strong>Degradation:</strong> Tire degradation refers to the
              gradual loss of performance and grip of a tire over the course of
              its use during a race.
            </li>
            <li>
              <strong>Slipstream:</strong> The slipstream, also known as
              drafting, is the area of reduced air pressure behind a moving
              vehicle where another vehicle can experience reduced drag and
              increased speed by closely following behind.
            </li>
            <li>
              <strong>Downforce:</strong> Downforce is the aerodynamic force
              that pushes a car towards the track surface, increasing traction
              and cornering grip.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default KeyWords3;
