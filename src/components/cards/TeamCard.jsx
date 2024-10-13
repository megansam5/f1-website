import "./teamCard.scss";
import { constructorImages } from "../Information";

const TeamCard = ({ team }) => {
  const teamId = team.Constructor.constructorId;

  const teamImageUrl = constructorImages.find(
    (team) => team.code == teamId
  ).url;

  return (
    <a href={team.Constructor.url}>
      <div className="team-card">
        <img alt="" src={teamImageUrl} className="team-image" />

        <div className="team-main-container">
          <div className="team-first-row">
            <span className="team-points">{team.points} pts</span>
          </div>

          <div className="name-container">
            <span className="constructor-name">{team.Constructor.name}</span>
          </div>

          <div className="team-nationality-container">
            <span className="team-nationality">
              {team.Constructor.nationality}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default TeamCard;
