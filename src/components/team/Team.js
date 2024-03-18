import Leadership from "./leadership/Leadership";

const Teams = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Leadership />
    </div>
  );
};

export default Teams;
