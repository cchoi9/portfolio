import React from "react";
import "./About.css";
import Button from "react-bootstrap/Button";

export default function About() {
  return (
    <div id="about" className="About text-black py-4">
      <div className="container row mx-auto p-2 rounded w-90">
        <div className="mt-1 col-6">
          <img
            className="img-fluid w-sm-45 rounded-circle"
            alt=""
            src={require("../assets/index.png")}
          />
        </div>
        <div className="col-lg-6 about-right">
          <h1 className="display-4 about-text">&lt; About /&gt; </h1>

          <br />
          <p className="lead">
            The human body is no different than a complex machine. Before my
            transition into the tech industry, I formerly worked as a exercise
            specialist, rehabilitating & improving patient recovery across the
            five boroughs of NYC. I strive to enrich myself with a collaborative
            team of individuals who drive one another to scale and optimize
            projects every step of the way.{" "}
          </p>
          <br />
          <p className="lead mb-1 tech">Front-End</p>
          <div className="row ml-1 mb-4 mx-auto w-90">
            <div className="mt-0">
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>React</small>
              </span>
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>React Native</small>
              </span>
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>Redux</small>
              </span>
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>HTML5</small>
              </span>
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>CSS3</small>
              </span>
            </div>
          </div>
          <p className="mt-2 mb-1 lead tech">Back-End</p>
          <div className="row ml-1 mb-4 mx-auto w-90">
            <div className="mt-0">
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>NodeJS</small>
              </span>
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>Express</small>
              </span>
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>PostgreSQL</small>
              </span>
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>Firebase</small>
              </span>
              <span className="border border-info px-2 rounded m-1 d-inline-block">
                <small>Sequelize</small>
              </span>
            </div>
          </div>
          <Button
            variant="dark"
            id="resume-btn"
            className="float-left"
            href={require("../assets/Christopher.Choi.pdf")}
            download="Christopher.Choi.pdf"
          >
            <i className="fa fa-download" aria-hidden="true"></i>
            {"   "}
            <p>Resume</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
