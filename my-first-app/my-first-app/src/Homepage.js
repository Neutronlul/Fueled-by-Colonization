import { useState, useEffect } from "react";
import "./App.css";

const Homepageinfo = () => {
    const [text, setText] = useState("Loading...");
  
    const fetchText = () => {
      fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((data) => setText(data.fact))
        .catch(() => setText("Failed to load text"));
    };
    useEffect(() => {
      fetchText();
    }, []);

    return (
      <div>
        <h1 className="HomepageHeader">
            Welcome to Starlight Colonization
        </h1>
        <p className="HomepageInfo">
            This is sure a website where you can put website things
        </p>
        <p className="full-page-background"></p>

        {/* Api section, for some reason css isn't working with it so its in line */}

        <div style={{
            color: "white", position: "absolute",   top: "80%", left: "50%",  transform: "translate(-50%, -50%)", textAlign: "center",   zIndex: 1, 
        }}>
          <p style={{
            fontSize: "24px",    marginBottom: "15px"
          }}>
            {text}
          </p>
          <button style={{
             padding: "10px 20px",  fontSize: "18px",    border: "none",    borderRadius: "5px",   cursor: "pointer", color: "white", background: "linear-gradient(to right, #ff00ff, #00e5ff)",   transition: "0.3s",
          }} 
          onClick={fetchText}
          onMouseOver={(e) => e.target.style.background = "linear-gradient(to top, #8d0090, #006d79)"}
          onMouseOut={(e) => e.target.style.background = "linear-gradient(to top, #ff00ff, #00e5ff)"}
          >
            Update
          </button>
        </div>
      </div>
    );
  };
  export default Homepageinfo;
