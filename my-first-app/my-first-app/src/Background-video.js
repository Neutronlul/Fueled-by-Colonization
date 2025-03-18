import Backgroundvideo from "./Galaxyvideo.mp4";
import { useEffect, useRef } from "react";

const Backvideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; 
    }
  }, []);

  return (
    <div className="video-container">
      <div className="background-video-container">
        <video ref={videoRef} autoPlay loop muted>
          <source src={Backgroundvideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Backvideo;