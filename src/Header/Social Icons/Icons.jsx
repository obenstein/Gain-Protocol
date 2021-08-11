import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Icons.css";
function Icons() {
  return (
    <div>
      <div class="icon-bar">
        <p>Follow Us</p>
        <SocialIcon
          className="icons"
          url="https://linkedin.com/in/jaketrent"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          className="icons"
          url="https://facebook.com"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          className="icons"
          url="https://google.com"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          className="icons"
          url="https://twitter.com"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          className="icons"
          url="https://youtube.com"
          bgColor="transparent"
          fgColor="white"
        />
      </div>
    </div>
  );
}

export default Icons;
