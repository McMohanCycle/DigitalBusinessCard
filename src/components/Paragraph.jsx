import React from "react";

function Paragraph({ heading, subtext, isDark = true }) {
  return (
    <div className="paragraph-container">
      <h3 className={isDark ? "paragraph-h3" : "paragraph-h3 light"}>
        {heading}
      </h3>
      <p className={isDark ? "paragraph-p" : "paragraph-p light"}>{subtext}</p>
    </div>
  );
}

export default Paragraph;
