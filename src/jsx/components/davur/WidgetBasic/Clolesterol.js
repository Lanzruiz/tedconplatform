import React from "react";

import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const sampleData = [27, 31, 35, 28, 45, 52, 24, 4, 50, 11, 54, 49, 72, 59, 75];

function Clolesterol() {
  return (
    <Sparklines data={sampleData} height={50}>
      <SparklinesLine color="#FF875E" style={{ fill: "#FF875E" }} />
      <SparklinesSpots />
    </Sparklines>
  );
}

export default Clolesterol;
