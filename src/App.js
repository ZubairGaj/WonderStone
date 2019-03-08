import React, { Component } from 'react';
import './style/App.css';
import './style/bootstrap.min410.css';
import './style/global.css';
import './style/color.css';
import './style/navigation.css';
import Content from "./components/myHomePageComponent/index";
import Links from "./components/linksComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <NavigationComponent /> */}
          <div className="row">
            <div className="col-md-2 col-sm-2"><br></br></div>
            <div className="col-md-8 col-sm-8">
              <Route path="/" exact component={Content} />
              <Route path="/links/" component={Links} />
            </div>
            <div className="col-md-2 col-sm-2"></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
