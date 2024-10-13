import "./circuitCard.scss";

const CircuitCard = ({ circuit }) => {
  return (
    <a href={circuit.website}>
      <div className="circuit-card">
        <div className="heading-row">
          <span className="circuit-name">{circuit.name}</span>
        </div>
        <div className="bottom-section">
          <img alt="" src={circuit.url} className="circuit-image" />

          <div className="circuit-main-container">
            <span className="circuit-city">
              {circuit.city}, {circuit.country}
            </span>

            <span className="circuit-laps">Laps: {circuit.laps}</span>
            <div className="circuit-date-container">
              <span className="circuit-date">Date: {circuit.date}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CircuitCard;
