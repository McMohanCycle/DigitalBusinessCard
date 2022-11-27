import React from "react";

function Button({ label, onClickFunction, image, isLinkedIn = false }) {
  const openLink = () => window.open(onClickFunction, "_blank");
  return (
    <button
      className={`button-component ${isLinkedIn ? "is-linkedin" : ""}`}
      onClick={openLink}
    >
      <img className="button-component-img" src={image} alt={image} />
      {label}
    </button>
  );
}

export default Button;
