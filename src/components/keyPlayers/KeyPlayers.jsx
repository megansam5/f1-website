import "./keyPlayers.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Scrollbar from "../scollbar/Scrollbar";
import { circuitInformation } from "../Information";

import { useEffect, useState } from "react";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"],
  });

  return (
    <section>
      <div className="container" style={{ background: item.background }}>
        <div className="wrapper">
          <div className="titleContainer" ref={ref}>
            {item.title}
          </div>
          {item.bar}
        </div>
      </div>
    </section>
  );
};

const KeyPlayers = () => {
  const [driverStandings, setDriverStandings] = useState([]);
  const [constructorStandings, setConstructorStandings] = useState([]);

  useEffect(function () {
    fetch("https://api.jolpi.ca/ergast/f1/current/driverstandings.json")
      .then((res) => res.json())
      .then((data) =>
        setDriverStandings(
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        )
      );
  }, []);

  useEffect(function () {
    fetch("https://api.jolpi.ca/ergast/f1/current/constructorstandings.json")
      .then((res) => res.json())
      .then((data) =>
        setConstructorStandings(
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        )
      );
  }, []);
  const items = [
    {
      id: 1,
      title: "Drivers",
      bar: <Scrollbar cardData={driverStandings} type="drivers" />,
      background: "linear-gradient(180deg, white, #f8aeae)",
    },
    {
      id: 2,
      title: "Teams",
      bar: <Scrollbar cardData={constructorStandings} type="teams" />,
      background: "#f8aeae",
    },
    {
      id: 3,
      title: "Circuits",
      bar: <Scrollbar cardData={circuitInformation} type="circuits" />,
      background: "linear-gradient(180deg, #f8aeae, #6dd5fa)",
    },
  ];
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="keyPlayers" ref={ref}>
      <div className="progress">
        <h1>Key Players</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default KeyPlayers;
