import React from "react";
import Flag from "react-world-flags";

const Bandeiras = ({ flags }) => {
  return (
    <div>
      <Flag code={flags} style={{ width: "30px" }} />
    </div>
  );
};
export default Bandeiras;
