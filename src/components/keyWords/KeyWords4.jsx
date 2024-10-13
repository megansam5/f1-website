import "./keyWords4.scss";
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

const KeyWords4 = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="keywords4"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="drs-section">
        <div className="drs-title">DRS</div>
        <div className="drs-description">
          DRS stands for Drag Reduction System. It involves the driver opening a
          flap in their rear wing to reduce aerodynamic drag and increase
          straight-line speed, it is activated in designated DRS zones of the
          track when a driver is within one second of the car ahead.
        </div>
      </motion.div>
    </motion.div>
  );
};

export default KeyWords4;
