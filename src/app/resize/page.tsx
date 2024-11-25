'use client'
import React from "react";
import withA11y from "../Component/withA11Y";
import ResizableComponent from "@/components/ResizableComponent";


const A11yResizableComponent = withA11y(ResizableComponent, {
  ariaLabel: "Resizable area",
  role: "region",
});

const A11yButton = withA11y(
    ResizableComponent,
    { ariaLabel: "Resizable button", role: "button" }
  );

const App = () => {
  return (
    <div>
      <h1>Resizable Component with A11y</h1>
      <A11yResizableComponent />

        <A11yButton />;
    </div>
  );
};

export default App;  