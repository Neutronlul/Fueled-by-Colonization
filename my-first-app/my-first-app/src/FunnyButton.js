import React, { useState, useEffect } from "react";
import "./App.css"; 

const MovingButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <button
      className="moving-button"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        transition: "left 0.1s linear, top 0.1s linear",
      }}
    >
      Delete Account!
    </button>
  );
};

export default MovingButton;