const Avtar = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          className="avtar"
          src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"
        ></img>
        <div style={{ fontWeight: "800", fontSize: "15px" }}>Founder Name</div>
        <div
          style={{
            fontWeight: "100",
            fontSize: "12px",
            color: "violet",
          }}
        >
          Founder/CEO
        </div>
      </div>
    </div>
  );
};

export default Avtar;
