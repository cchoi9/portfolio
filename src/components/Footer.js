import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer w-100 mt-5">
      <div className="row m-auto">
        <div className="col-4">
          <a href="https://www.linkedin.com/in/chrishchoi/" target="_blank">
            <img
              src="https://img.icons8.com/cute-clipart/96/000000/linkedin.png"
              className="contact"
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="col-4">
          <a href="https://github.com/cchoi9" target="_blank">
            <img
              src="https://img.icons8.com/nolan/96/000000/github.png"
              className="contact"
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="col-4">
          <a href="mailto:chc5139@gmail.com">
            <img
              src="https://img.icons8.com/color/96/000000/gmail.png"
              className="contact"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
