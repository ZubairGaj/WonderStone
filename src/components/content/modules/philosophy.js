import React, { Component } from 'react';
import '../../../style/global.css';
import logo from '../../../assets/banner2.jpg';
import '../../../style/App.css';

class Content extends Component {
  render() {
    return (
      <div className="content-mini banner">
        <div className="row">
          <div className="col-md-4"><br></br></div>
          <div className="col-md-4">
            <img src={logo} className="App-banner" alt="banner" />
          </div>
          <div className="col-md-4"><br></br></div>
        </div>
        <div className="row text-align-left">
          <div className="col-sb-8">
            <p className="gooselight">What we do!</p>
            <p className="goose">We design & develop websites for small businesses and small companies. We develop all our websites from scratch, while using frameworks that allow us to deliver the best quality results every time. Our aim is to provide a service that allows businesses to take their websites to the next level.</p>
          </div>
        </div>
      </div>
    );
  } 
}

export default Content;
