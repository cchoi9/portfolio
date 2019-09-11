import React from "react";
import "./Projects.css";
import { cashMapMockup, audioHiveMockup } from "../assets/images/projects";

import {
  reactImg,
  rnImg,
  bootstrapImg,
  firebaseImg,
  googlemapsImg,
  herokuImg,
  nodeImg,
  plaidImg,
  postgresqlImg
} from "../assets/images/technologies";

export default function Projects() {
  return (
    <div className="mx-auto p-5 my-5" id="projects">
      <h1 className="display-4 project-text mb-4">&lt; Projects /&gt;</h1>
      <div className="row w-75 mx-auto">
        <div className="col-12 col-lg-7 my-auto">
          <p className="display-5 lead project-text2">
            CashMap{" "}
            <a
              href="https://github.com/cashmap/cashmap"
              className="btn btn-light"
              target="_blank"
            >
              <i className="fa fa-github fa-lg" aria-hidden="true"></i> View
            </a>
          </p>
          <p className="project-desc">
            CashMap is a personal-finance mobile app that displays your debit
            card and credit card transactions by gathering data from the Plaid
            API. The Google Maps API display your spending activity based on
            location. To supplement this information, we included features in
            the form of a pie & bar chart to give users a visualization of their
            spending habits.
          </p>
        </div>
        <div className="col-12 col-lg-5">
          <img className="img-fluid" alt="" src={cashMapMockup} />
          <div className="row mb-4 hidden">
            <div className="mx-auto icon">
              <img src={rnImg} className="icon" />
              <img src={firebaseImg} className="icon" />
              <img src={plaidImg} className="icon" />
              <img src={nodeImg} className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="row w-75 mx-auto">
        <div className="col-12 col-lg-7 my-auto">
          <p className="display-5 lead project-text2">
            AudioHive{" "}
            <a
              href="https://github.com/cchoi9/audiohive"
              className="btn btn-light"
              target="_blank"
            >
              <i className="fa fa-github fa-lg" aria-hidden="true"></i> View
            </a>
          </p>
          <p className="project-desc">
            AudioHive is webscraping application that uniquely handles requests
            for information based on date, artist, location and venue from
            ticket vendor websites such as Eventbrite, LiveNation, and
            Ticketmaster. It retrieves and merges scraped data from websites
            regarding concerts happening in the NYC area.
          </p>
        </div>
        <div className="col-12 col-lg-5">
          <img className="img-fluid" alt="" src={audioHiveMockup} />
          <div className="row mb-4">
            <div className="mx-auto icon hidden">
              <img src={postgresqlImg} className="icon" />
              <img src={reactImg} className="icon" />
              <img src={nodeImg} className="icon" />
              <img src={bootstrapImg} className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
