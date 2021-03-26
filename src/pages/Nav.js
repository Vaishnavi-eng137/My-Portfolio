import React from "react";
import myicon from "../images/home-family-house-icon-29-B1.png";
import "../App.css";
import { NavLink,useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation()
  return (

    <nav className="navbar" style={{ backgroundColor: "#D2B4D" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
        >
        <div style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
          <NavLink to="/">
            <img src={myicon} className="icon" alt="" />
          </NavLink>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
          <NavLink to="/liveproject">
            <button
              type="button"
              className={`btn btn-light Navbtn mt-2 ${location.pathname==="/liveproject"?"Selectedbtn":''}`}
              >
              <b>Live projects</b>{" "}
            </button>
          </NavLink>
          <NavLink to="/myskill">
            <button
              type="button"
              className={`btn btn-light Navbtn mt-2 ${location.pathname ==="/myskill"?"Selectedbtn":''}`}
              >
              <b>My Skills</b>
            </button>
          </NavLink>
          <NavLink to="/img">
          <button
            type="button"
            className={`btn btn-light Navbtn mt-2 ${location.pathname==="/img"?"Selectedbtn":''}`}
            >
            <b>My Gallery</b>{" "}
          </button>
          </NavLink>
          <NavLink to="/contact">
            <button
              type="button"
              className={`btn btn-light Navbtn  mt-2 ${location.pathname==="/contact"?"Selectedbtn":''}`}
              >
              <b>Contact me</b>
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
            
  );
}
export default Nav;
