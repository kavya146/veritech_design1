import Avtar from "../avtar";
import "./Leadership.css";

const Leadership = () => {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4 style={{ textAlign: "center" }}>Meet Our Team</h4>
      <div className="team-management-head">Management Team</div>
      <div className="avtar-first-line">
        <Avtar />
        <Avtar />
      </div>

      <div className="avtar-second-line">
        <Avtar />
        <Avtar />
        <Avtar />
      </div>
    </div>
  );
};

export default Leadership;
