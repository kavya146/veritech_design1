import React from "react";
const Avtar = ({ url, name, position }) => {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "30px",
        }}
      >
        <img className="avtar" src={url}></img>
        <div style={{ fontWeight: "800", fontSize: "15px" }}>{name}</div>
        <div
          style={{
            fontWeight: "100",
            fontSize: "12px",
            color: "violet",
          }}
        >
          {position}
        </div>
      </div>
    </div>
  );
};

export default Avtar;
