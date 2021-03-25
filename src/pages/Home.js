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
        href="https://novoresume.com/file/pdf/resume/get/1616704695030b613fa1076db11ebbeb04d34a32fa0c1deppyt2ns1m3cdf6fnq4kij65tubiqhznhbxuqqh6opvzvkw6mc61sa25q94sqoxd45jb54pqazxclp9tjvzeia1olliqjig7dyq8ez9yuhb5957Acll2mp5aq8dikqr56td0wms2pnh101r7ho6r6mspe5z3u3ihikbhvfnyAcj8s8ly9f3qjt7w514jnlAcfz2d"
        download
      >
        Download My Resume
      </a>
    </div>
  );
}

export default Home;
