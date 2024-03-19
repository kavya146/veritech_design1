import Avtar from "../avtar";
import "./salesmarketing.css";

const Salesmarketing = () => {
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
      <div className="team-sales-head">Sales and Marketing Team</div>
      <div className="avtar-first-line">
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"Employee Name"}
          position={"Team Lead"}
        />
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"Employee Name"}
          position={"Sales Officer"}
        />
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"Employee Name"}
          position={"Sales Officer"}
        />
        <Avtar
          url={
            "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-600x600.png"
          }
          name={"Employee Name"}
          position={"Sales Officer"}
        />
      </div>
      <div className="avtar-second-line">
        <Avtar
          url={"https://www.svgrepo.com/show/81103/avatar.svg"}
          name={"Founder Name"}
          position={"Marketing Officer"}
        />
        <Avtar
          url={"https://www.svgrepo.com/show/81103/avatar.svg"}
          name={"Founder Name"}
          position={"Marketing Officer"}
        />
        <Avtar
          url={"https://www.svgrepo.com/show/81103/avatar.svg"}
          name={"Founder Name"}
          position={"Marketing Officer"}
        />
      </div>
    </div>
  );
};

export default Salesmarketing;
