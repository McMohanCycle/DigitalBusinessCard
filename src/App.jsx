import { useState } from "react";

import { Button, Footer, Header, Paragraph } from "./components";
import { Dark, MailIcon, Light, LinkedInIcon } from "./assets/icons";
import { Portrait } from "./assets/images";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleMode = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="container">
      <img
        className="portrait-img"
        src={Portrait}
        alt="Gaurav wearing a formal shirt with a tie and smiling at the camera."
      />
      <button className="toggle-btn" onClick={toggleMode}>
        <img
          className="toggle-img"
          src={isDark ? Dark : Light}
          alt={isDark ? "Turn on light mode" : "Turn on dark mode"}
        />
      </button>
      <div className={isDark ? "main-container" : "main-container light"}>
        <Header
          designation="Product Dev-signer"
          name="Gaurav Malewar"
          isDark={isDark}
        />
        <div className="button-container">
          <Button
            label="Email"
            image={MailIcon}
            onClickFunction="mailto:gauravmalewar008@gmail.com?subject=Hello,%20Gaurav!"
          />
          <Button
            label="LinkedIn"
            image={LinkedInIcon}
            isLinkedIn
            onClickFunction="https://www.linkedin.com/in/gauravmalewar/"
          />
        </div>
        <Paragraph
          isDark={isDark}
          heading="About"
          subtext="I'm a curious, generalist product designer and developer. I use Adobe XD & Figma to design products and React Native to develop them."
        />
        <Paragraph
          isDark={isDark}
          heading="Interests"
          subtext="Everything products and tech. And when I'm not obsessing about them, I like to party in serenity of nature. I also like reading, watching Formula 1 and gaming."
        />
      </div>
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
