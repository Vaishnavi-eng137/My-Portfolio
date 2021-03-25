import React from 'react'
import Workimage from "../images/Allura - Freelancing.png"
import{github} from "../components/eventfunc"
import gitimage from "../images/iconfinder_mark-github_298822.png"

function Myprojects() {
    return (
        <div className="App-header">
            <img src={Workimage}></img>
           <h2>Currently working on two projects,will soon deploy my work on Server.</h2> 
           <h2>For a brief knowledge of "MY Work",You can check out my Github!</h2> <img
          src={gitimage}
          className="photo1"
          onClick={github}
          alt=""
          ></img>
          
           
        </div>
    )
}

export default Myprojects
