import "./timeline.scss";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="header">
        <h1>The Race Weekend</h1>
      </div>
      <div className="bottom-section">
        <div className="main-timeline">
          <div className="flex justify-between h-48 ">
            <div className="width3">
              {/* Day of the week */}
              <div className=" day-name">FRIDAY</div>
              {/* Events */}
              <div className="session">
                Two 1 hour Free Practice sessions (FP1 and FP2)
              </div>
              {/* Events descriptions */}
              <div className="session-description">
                To make sure the car works as expected before any necessary
                changes are made.
              </div>
            </div>
            {/* CENTER */}
            <div className="width6 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="width3 "></div>
          </div>

          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="width3 "></div>
            {/* CENTER */}
            <div className="width6 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="width3 ">
              {/* day */}
              <div className="day-name">Saturday</div>
              {/* JOB DESC */}
              <div className="session">
                Final Free Practice session (FP3) and Qualifying
              </div>
              {/* JOB DATE */}
              <div className=" session-description">
                The three-stage qualifying session involves the slowest five
                drivers from the 18-minute Q1 phase eliminated, before five more
                go out of the 15-minute Q2 segment, leaving the final 12-minute
                Q3 segment. This sets the starting grid positions for the
                drivers.
              </div>
              {/* JOB COMPANY */}
            </div>
          </div>

          <div className="flex justify-between h-48">
            {/* LEFT */}
            <div className="width3 ">
              {/* JOB TITLE */}
              <div className="day-name">Sunday</div>
              {/* JOB DESC */}
              <div className="session">The Race</div>
              {/* JOB DATE */}
              <div className=" session-description">
                The main race where first place gets 25 points, second gets 18,
                third gets 15, and then the remaining top ten drivers get 12,
                10, 8, 6, 4, 2, and 1.
              </div>
            </div>
            {/* CENTER */}
            <div className="width6 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="width3 "></div>
          </div>
        </div>
        <div className="sprint-weekend">
          <div className="sprint-weekend-info">
            <div className="sprint-title">
              <h1>Sprint Weekend</h1>
            </div>
            <div className="sprint-desc">
              A Sprint is a 100km race, usually lasting about 30 minutes, with
              no pit stops. It focuses more on dynamics than stategies.{" "}
              <span className="extra-info">
                <br></br>
                Six of the 2024 races are Sprint weekends; China, Miami,
                Austria, Austin, Brazil and Qatar.{" "}
              </span>
              <br></br> On a Sprint weekend, the Sprint Qualifying session
              replaces FP2 on a Friday afternoon and the Sprint itself replaces
              FP3 on Saturday, before qualifying for the Grand Prix happens as
              normal in the afternoon. The winner of the Sprint recieves 8
              points, with points decending until P8.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
