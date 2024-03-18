import "./Leadership.css";

const Leadership = () => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Meet Our Team</h4>
      <div className="team-management-head">
        <p>Management Team</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <img
            className="avtar"
            src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"
          ></img>
        </div>

        <div>
          {" "}
          <img
            className="avtar"
            src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
