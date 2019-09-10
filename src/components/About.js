import React from "react";
import "./About.css";
import Button from "react-bootstrap/Button";

export default function About() {
  return (
    <div id="about" className="About text-black py-4">
      <h1 className="lead about-text">About Me</h1>
      <div className="container row w-90 mx-auto p-2 rounded about-content">
        <div className="col-12 col-lg-6 text-center">
          <img
            className="img-fluid w-sm-20 rounded-circle d-inline-block"
            alt=""
            src={require("../assets/index.png")}
          />
        </div>
        <div className="col-12 col-lg-6 about-right">
          <p className="lead">
            The human body is no different than a complex machine. Before my
            transition into the tech industry, I formerly worked as a exercise
            specialist, rehabilitating & improving patient recovery across the
            five boroughs of NYC. I strive to enrich myself with a collaborative
            team of individuals who drive one another to scale and optimize
            projects every step of the way.{" "}
          </p>
          <div className="row mx-auto">
            <div className="col-4">
              <a href="https://github.com/cchoi9" target="_blank">
                <img
                  src="https://img.icons8.com/nolan/64/000000/github.png"
                  className="contact"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="col-4">
              <a href="https://www.linkedin.com/in/chrishchoi/" target="_blank">
                <img
                  src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"
                  className="contact"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="col-4">
              <a href="https://gmail.com" target="_blank">
                <img
                  src="https://img.icons8.com/color/64/000000/gmail.png"
                  className="contact"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
          <Button
            variant="light"
            id="resume-btn"
            className="mt-5"
            href={require("../assets/chris-3.png")}
            download="resume.pdf"
          >
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
            {"   "}
            <p>Resume</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
