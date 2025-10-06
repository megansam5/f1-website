import "./nextRaces.scss";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { circuitInformation } from "../Information";
import { useEffect, useState } from "react";

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

const NextRaces = () => {
  const [fullSchedule, setFullSchedule] = useState([]);
  const [threeRaces, setThreeRaces] = useState([]);

  useEffect(function () {
    fetch("https://api.jolpi.ca/ergast/f1/2025/races.json")
      .then((res) => res.json())
      .then((data) => setFullSchedule(data.MRData.RaceTable.Races));
  }, []);

  useEffect(
    function () {
      const currentDate = new Date();

      setThreeRaces(
        fullSchedule
          .filter((race) => new Date(race.date) > currentDate)
          .slice(0, 3)
      );
    },
    [fullSchedule]
  );

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="nextRaces"
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            What is up
            <motion.b whileHover={{ color: "#6dd5fa" }}> Next</motion.b> ?
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {threeRaces.map((race) => (
          <motion.div
            className="box"
            key={race.round}
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <a
              href={
                circuitInformation.find(
                  (circuit) => circuit.city == race.Circuit.Location.locality
                ).website
              }
            >
              <p className="date">{race.date}</p>
              <h2 className="name">{race.raceName}</h2>
              <div className="track-container">
                <img
                  src={
                    circuitInformation.find(
                      (circuit) =>
                        circuit.city == race.Circuit.Location.locality
                    ).url
                  }
                  alt="track"
                  className="track"
                />
              </div>
              <p className="location">
                {race.Circuit.Location.locality},{" "}
                {race.Circuit.Location.country}
              </p>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NextRaces;
