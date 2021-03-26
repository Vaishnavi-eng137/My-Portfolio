import React from "react";
import myimage from "../images/IMG_20201010_213538.jpg";
import "../App.css";
import Image from "../components/images";

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={myimage} className="Design" alt="logo" />
        <h1 className="Hello">Hey! I am Vaishnavi,</h1>
        <h2>A Web Developer</h2>
        <h6>
          On the path to be a full Stack (MERN)Developer.<br></br> Currently
          working on my own projects and will love<br></br> to be a part of your
          developer's team.
          <br />
        </h6>
        <h5>Let's get in touch !</h5>
        <Image />
      </header>
      <a
        className="btn btn-outline-secondary  btn-lg m-4 Navbtn human-heart"
        href="https://drive.google.com/file/d/1AGSqW8F0s205tp5l7Oo8gLF-HmghAd5y/view?usp=sharing "
        download
      >
        Download My Resume
      </a>
    </div>
  );
}

export default Home;
