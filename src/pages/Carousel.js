import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Mygallery() {
  const list = [
    "t.ly/AvFU",
    "t.ly/i09D",
    "t.ly/SdCW",
    "t.ly/1Ejl",
    "t.ly/OHo3",
    "t.ly/IzDl",
    "t.ly/eWYo",
    "t.ly/JWdH",
    "t.ly/DDIO",
    "t.ly/Kiy6",
    "t.ly/ys6R",
    "t.ly/gqbA",
    "t.ly/ydNZ",
    "t.ly/9Zdg",
    "t.ly/950D",
    "t.ly/qKm6",
    "t.ly/Yh2i",
    "t.ly/iKbE",
  ];

  const [activeimage, setActiveImage] = useState(0);

  const Increment = () => {
    if (activeimage < list.length - 1) {
      setActiveImage(activeimage + 1);
    } else {
      setActiveImage(0);
    }
  };

  const Decrement = () => {
    if (activeimage > 0) {
      setActiveImage(activeimage - 1);
    } else {
      setActiveImage(0);
      alert("No previous image exist");
    }
  };

  return (
    <div
      className="App-header"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="view" style={{ width: "800px" }}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
              onClick={Decrement}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{ backgroundColor: "#BAACDF" }}
              ></span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
              onClick={Increment}
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
                style={{ backgroundColor: "#BAACDF" }}
              ></span>
            </a>

            {list.map((element, index) => {
              return (
                <div
                  key={index}
                  className={`carousel-item ${
                    activeimage === index ? "active" : ""
                  }`}
                >
                  <img
                    style={{objectFit:'contain', height:'500px'}}
                    className="d-block w-100 "
                    src={`https://${element}`}
                    alt="slides"
                    
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mygallery;
