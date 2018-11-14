import React, { Component } from 'react';
import './style/App.css';
import './style/bootstrap.min410.css';
import './style/global.css';
import Header from "./components/header/index"
import Content from "./components/content/index"
import Footer from "./components/footer"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="row">
            <div className="col-md-2 col-sm-2"><br></br></div>
            <div className="col-md-8 col-sm-8">
              <Content />
            </div>
            <div className="col-md-2 col-sm-2"></div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
