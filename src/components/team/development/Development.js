import Avtar from "../avtar";
import "./Development.css";
const Development = () => {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <div className="team-dev-head">Development Team</div>
      <div className="avtar-first-line">
        <Avtar
          url={"https://www.svgrepo.com/show/81103/avatar.svg"}
          name={"Developer Name"}
          position={"Team Lead, SE"}
        />
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"Developer Name"}
          position={"Software Engineer"}
        />
        <Avtar
          url={"https://www.svgrepo.com/show/81103/avatar.svg"}
          name={"Developer Name"}
          position={"Software Engineer"}
        />
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"Developer Name"}
          position={"Software Engineer"}
        />
      </div>
      <div className="avtar-second-line">
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"Developer Name"}
          position={"Software Engineer"}
        />
        <Avtar
          url={"https://www.svgrepo.com/show/81103/avatar.svg"}
          name={"Developer Name"}
          position={"Software Engineer"}
        />
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"Developer Name"}
          position={"Software Engineer"}
        />
      </div>
    </div>
  );
};

export default Development;
