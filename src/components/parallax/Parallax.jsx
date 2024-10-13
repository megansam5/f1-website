import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const carYBg = useTransform(scrollYProgress, [0, 1], ["0%", "-2%"]);
  const carXBg = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const carScale = useTransform(scrollYProgress, [0, 1], ["1", "0.05"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #6dd5fa, #2980b9)",
      }}
    >
      <motion.div
        style={{
          y: yText,
        }}
        className="main-question"
      >
        {type === "timeline"
          ? "What is the layout?"
          : type == "keyplayers"
          ? "Who is involved?"
          : "What does it mean?"}
      </motion.div>
      <motion.div className="mountains"></motion.div>

      <motion.div
        className="stars"
        style={{
          x: carXBg,
          y: carYBg,
          scale: carScale,
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
