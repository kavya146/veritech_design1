import Avtar from "../avtar";
import "./Leadership.css";

const Leadership = () => {
  return (
    <div
      style={{
        width: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <h4 style={{ textAlign: "center" }}>Meet Our Team</h4>
      <div className="team-management-head">Management Team</div>
      <div className="leader-first-line">
        <Avtar
          url={"https://www.svgrepo.com/show/81103/avatar.svg"}
          name={"Founder Name"}
          position={"Founder/CEO"}
        />
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"Founder Name"}
          position={"Founder/CEO"}
        />
      </div>

      <div className="leader-second-line">
        <Avtar
          url={"https://www.svgrepo.com/show/81103/avatar.svg"}
          name={"VP Name"}
          position={"VP, Development & Growth"}
        />
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"VP Name"}
          position={"VP, Sales & Marketing"}
        />
        <Avtar
          url={"https://www.svgrepo.com/show/81103/avatar.svg"}
          name={"VP Name"}
          position={"VP, Finance & Operation"}
        />
      </div>
    </div>
  );
};

export default Leadership;
