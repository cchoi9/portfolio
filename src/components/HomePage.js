import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import "./HomePage.css";

class HomePage extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="homepage" className="HomePage">
        <Navbar />
        <div className="content">
          <Header />
          <About />
          <Projects />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
