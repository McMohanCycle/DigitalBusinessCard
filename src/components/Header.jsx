import React from "react";

function Header({ name, designation, isDark = true }) {
  return (
    <div className="header-container">
      <h1 className={isDark ? "header-h1" : "header-h1 light"}>{name}</h1>
      <h4 className={isDark ? "header-h4" : "header-h4 light"}>
        {designation}
      </h4>
    </div>
  );
}

export default Header;
