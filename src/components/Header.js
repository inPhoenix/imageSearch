import React, { useState } from "react";

const Header = ({ changeTheme }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    changeTheme(checked ? "light" : "dark");
  };
  return (
    <header className="header">
      <a
        className="link"
        href="https://www.github.com/inPhoenix/imageSearch"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub
      </a>
      <div className="theme-switch-wrapper">
        <em>Light</em>
        <label className="theme-switch" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleChange}
            checked={checked}
          />
          <div className="slider round"></div>
        </label>
        <em>Dark</em>
      </div>
    </header>
  );
};

export default Header;
