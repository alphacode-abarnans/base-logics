"use client";

import { useState } from "react";
import { switcher } from "../checkbox/_utils/checkboxSkin";
import Checkbox from "../checkbox/_utils/checkbox";

export default function DirectionToggle() {
  const [direction, setDirection] = useState("ltr");

  const toggleDirection = () => {
    const newDirection = direction === "ltr" ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.setAttribute("dir", newDirection);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      {/* <button onClick={toggleDirection}>Toggle Direction</button> */}
      <Checkbox id="2" checked={direction === "rtl"} onChange={toggleDirection} Skin={switcher}/>
    </div>
  );
}
