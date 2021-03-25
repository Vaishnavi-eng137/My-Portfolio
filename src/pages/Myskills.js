import React from "react";
import Skillimage from "../images/Dayflow - Shop Online.png";
import fontawesome from "@fortawesome/react-fontawesome";
import "../App.css";

function Myskills() {
  return (
    <div className="App-header">
      <h2><b>KNOW MY SKILLS</b></h2>
      <div className="box" style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}>
          <img
            src={Skillimage}
            // style={{ marginRight: "120px", objectFit: "cover" }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flex:2,
            justifyContent:"space-evenly",
            padding: "60px",
      
          }}
        >
          <div className="container">
            <p style={{fontFamily:"cursive",textDecoration:"underline"}}>Technologies</p>
            {[
              "HTML",
              "CSS",
              "BOOTSTRAP",
              "JAVASCRIPT",
              "JQUERY",
              "ES6",
              "EXPRESS",
              "NODE.JS",
              "REST API",
              "MONGODB",
              "REACT.JS",
              "REDUX",
            ].map((element, index) => {
              return (
                <span
                  key={index}
                  className="badge badge-pill"
                  style={{
                    color: "#2C3E50 ",
                    backgroundColor: "thistle",
                    margin: "5px",
                  }}
                >
                  {element}
                </span>
              );
            })}
          </div>
          <div className="container">
            <h4 style={{fontFamily:"cursive",textDecoration:"underline"}}>Tools i have worked:</h4>
            {[
              "Slack",
              "VS CODE",
              "GITHUB",
              "Trello",
              "POSTMAN",
              "Insomnia",
              "Netlify",
            ].map((element, index) => {
              return (
                <span
                  key={index}
                  className="badge badge-pill"
                  style={{
                    color: "#2C3E50 ",
                    backgroundColor: "thistle",
                    margin: "10px",
                  }}
                >
                  {element}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myskills;