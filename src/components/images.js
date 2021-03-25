import React from 'react';
import fbimage from '../images/iconfinder_facebook_605511.png'
import twiiter from '../images/iconfinder_twitter_834708.png'
import linkimage from '../images/iconfinder_social_media_applications_14-linkedin_4102586.png'
import gitimage from '../images/iconfinder_mark-github_298822.png'
import instaimage from '../images/iconfinder_social_media_applications_3-instagram_4102579.png'
import {
    github,
    instagram,
    twitter,
    linkedin,
    facebook,
  } from "../components/eventfunc";
function Image(){
    return(
        <div className="Images-list">
        <img src = {fbimage}
          className="photo"
          onClick={facebook}
          alt=""
        ></img>
        <img
          src={linkimage}
          className="photo"
          onClick={linkedin}
          alt=""
        ></img>
        <img
          src={twiiter}
          className="photo"
          onClick={twitter}
          alt=""
          ></img>
        <img
          src={instaimage}
          className="photo"
          onClick={instagram}
          alt=""
          ></img>
        <img
          src={gitimage}
          className="photo"
          onClick={github}
          alt=""
          ></img>
        </div>
      
    )
}

export default Image;