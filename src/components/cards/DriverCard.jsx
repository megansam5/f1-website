import "./driverCard.scss";
import { driverImages, constructorImages } from "../Information";

const DriverCard = ({ driver }) => {
  const driverImageUrl = driverImages.find(
    (driverImage) => driverImage.code == driver.Driver.driverId
  ).url;

  const teamImageUrl = constructorImages.find(
    (team) => team.code == driver.Constructors[0].constructorId
  ).url;
  return (
    <a href={driver.Driver.url}>
      <div className="driver-card">
        <img alt="" src={driverImageUrl} className="headshot-image" />

        <div className="main-container">
          <div className="first-row">
            <span className="name">
              {driver.Driver.givenName} <br></br>{" "}
              <span className="surname">{driver.Driver.familyName}</span>
            </span>
            <span className="points">{driver.points} pts</span>
          </div>

          <span className="race-number">
            Race Number: {driver.Driver.permanentNumber}
          </span>
          <span className="dob">
            Date of Birth: {driver.Driver.dateOfBirth}
          </span>
          <span className="nationality">
            Nationality: {driver.Driver.nationality}
          </span>
          <div className="team-container">
            <span className="team-name">{driver.Constructors[0].name}</span>
            <div className="logo-container">
              <img alt="" src={teamImageUrl} className="logo" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default DriverCard;
