import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Background from "../images/nav.png";

var sectionStyle = {
  width: "100%",
  height: "840px",
  backgroundImage: `url(${Background})`
};

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <main style= {sectionStyle}>

        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;