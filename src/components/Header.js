import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-content container">
        <p className="lead header-text">Hi! I'm Chris</p>
        <p className="lead header-text-2">Welcome to my &lt; Portfolio /&gt;</p>
        <a href="#about">
          <i className="arrow fa fa-angle-double-down"></i>
        </a>
      </div>
    </div>
  );
}
