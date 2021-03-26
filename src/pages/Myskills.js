import React from "react";
import Skillimage from "../images/Dayflow - Shop Online.png";
import fontawesome from "@fortawesome/react-fontawesome";
import "../App.css";

function Myskills() {
  return (
    <div className="App-header">
      <h2>
        <b>KNOW MY SKILLS</b>
      </h2>
      <div
        className="box"
        style={{
          marginTop:"40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"center"
        }}
      >
          <div
            className="box"
            style={{
              backgroundColor: "lavenderblush",
              borderRadius: "5%",
              padding: "20px",
              margin:"20px"
            }}
          >
            <p style={{ fontFamily: "cursive", textDecoration: "underline" }}>
              Technologies
            </p>
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "10px",
              padding: "20px",
            }}
          >
            <div
              className="box"
              style={{ backgroundColor: "ThreeDFace", borderRadius: "5%" }}
            >
              <h4
                style={{ fontFamily: "cursive", textDecoration: "underline" }}
              >
                Tools :
              </h4>
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
    // </div>
  );
}

export default Myskills;
