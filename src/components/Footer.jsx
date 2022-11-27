import React from "react";

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInGreyIcon,
  TwitterIcon,
} from "../assets/icons";

function Footer({ isDark = true }) {
  return (
    <footer className={isDark ? "" : "light"}>
      <a href="https://github.com/McMohanCycle" target="_blank">
        <img src={GitHubIcon} alt="Github" />
      </a>
      <a href="https://www.instagram.com/devsigner_/" target="_blank">
        <img src={InstagramIcon} alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/in/gauravmalewar/" target="_blank">
        <img src={LinkedInGreyIcon} alt="LinkedIn" />
      </a>
      <a href="https://mobile.twitter.com/devsigner_" target="_blank">
        <img src={TwitterIcon} alt="Twitter" />
      </a>
    </footer>
  );
}

export default Footer;
