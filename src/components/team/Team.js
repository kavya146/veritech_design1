import Development from "./development/Development";
import Leadership from "./leadership/Leadership";
import Salesmarketing from "./salesmarketing/salesmarketing";

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
      <Development />
      <Salesmarketing />
    </div>
  );
};

export default Teams;
