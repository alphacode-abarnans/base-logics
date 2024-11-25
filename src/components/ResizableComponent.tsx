/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from "react";

const ResizableComponent: React.FC = () => {
  const [size, setSize] = useState({ width: 300, height: 200 });
  const [isResizing, setIsResizing] = useState(false);
  const [direction, setDirection] = useState<"horizontal" | "vertical" | "both" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent, dir: "horizontal" | "vertical" | "both") => {
    setIsResizing(true);
    setDirection(dir);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing || !direction) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    if (direction === "horizontal" || direction === "both") {
      setSize((prev) => ({
        ...prev,
        width: e.clientX - rect.left,
      }));
    }

    if (direction === "vertical" || direction === "both") {
      setSize((prev) => ({
        ...prev,
        height: e.clientY - rect.top,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    setDirection(null);
  };

  React.useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div
      ref={containerRef}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        border: "1px solid #000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Resizing Handles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "10px",
          height: "10px",
          cursor: "nwse-resize",
          backgroundColor: "transparent",
        }}
        onMouseDown={(e) => handleMouseDown(e, "both")}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "10px",
          cursor: "ns-resize",
          backgroundColor: "transparent",
        }}
        onMouseDown={(e) => handleMouseDown(e, "vertical")}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "10px",
          height: "100%",
          cursor: "ew-resize",
          backgroundColor: "transparent",
        }}
        onMouseDown={(e) => handleMouseDown(e, "horizontal")}
      />
    </div>
  );
};

export default ResizableComponent;