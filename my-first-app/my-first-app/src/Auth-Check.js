import React from "react";
/*Default Import*/
import Backvideo from "./Background-video.js"
import Login from "./Login.js"
import Navbar from "./Navbar.js"
import Homepageinfo from "./Homepage.js";
import LoginOverlay from "./Pageblocker.js";
import Accountpage from "./Accountpage.js";
import Systempagetext from "./SystemsPage.js";
import MovingButton from "./FunnyButton.js";


const Authcheck = () => {
    const path = window.location.pathname;
    return (
        <div>
            {(path === "/" || path === "/construction" || path === "/systems" || path === "/account" ) && <Navbar />}
            {(path === "/" || path === "/construction" || path === "/systems" || path === "/account" || path === "/login") && <Backvideo/>}
            {path === "/login" && <Login/>}
            {path === "/" && <Homepageinfo/>}
            {path === "/construction" && <LoginOverlay/>}
            {path === "/systems" && <LoginOverlay/>}
            {path === "/account" && <Accountpage/>}
            {path === "/systems" && <Systempagetext/>}
        </div>
    );
  };
  export default Authcheck