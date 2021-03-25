import React from "react";

function Contact() {
  return (
    <div className="App-header">
        <h2>Contact me here</h2>
      <form className="contact">  
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email here"
          />
          <h6 className="text-muted">
            We'll never share your email with anyone else.
          </h6>
          <input
            type="tel"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            className="form-control mt-4"
            placeholder="Enter your mobile no."
          />
    <label></label>
    <textarea className="form-control" placeholder="You can write your text message here..." rows="5"></textarea>
        <button type="Submit" className = "btn btn-mt-4" style={{backgroundColor:"#A02584",color:"white",marginTop:"4px"}}>
          <strong>Submit</strong>
        </button>
      </form>
      <div>
        <h2 style={{marginTop:'6px'}}>Contact no.
        <small> +91 8699015220 </small></h2> 
         <h2>My Email :- vaisuch@gmail.com</h2>
      </div>
    </div>
  );
}

export default Contact;
