import React from "react";
import "./components.css";

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/men/11.jpg"
        alt="Peter Shelton"
      />
      <div className="ContactInfos">
        <div className="name">Peter Shelton</div>
        <div className="status">
          <div className="status-online"> 
          <div className="status-text">online</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
