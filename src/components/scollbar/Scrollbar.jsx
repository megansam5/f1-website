import "./scrollbar.scss";
import DriverCard from "../cards/DriverCard";
import TeamCard from "../cards/TeamCard";
import CircuitCard from "../cards/CircuitCard";

const Scrollbar = ({ cardData, type }) => {
  return (
    <div className="scrollable-cards">
      <div className="scrollable-cards-container">
        {type == "drivers"
          ? cardData.map((card, index) => (
              <DriverCard key={index} driver={card} />
            ))
          : type == "teams"
          ? cardData.map((card, index) => <TeamCard key={index} team={card} />)
          : cardData.map((card, index) => (
              <CircuitCard key={index} circuit={card} />
            ))}
      </div>
    </div>
  );
};

export default Scrollbar;
