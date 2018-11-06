import React, { Component } from 'react';
import logo from '../../../assets/banner2.jpg';
import image from '../../../assets/main.jpg';

class Content extends Component {
  render() {
    return (
      <div className="content-mini">
        <br></br>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <img src={logo} className="App-banner" alt="banner" />
          </div>
        </div>
        <div className="row text-align-left">
          <div className="col-md-12">
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <p className="gooselight">What we do!</p>
            <div className="row">
              <div className="col-md-8">
                <p className="goose">We design & develop websites for small businesses and small companies. All of our websites are developed from scratch, which allows us to generate a more bespoke browsing experience for each of our clients. Our designs are carefully planned and check listed, which allows us to breakdown functions and make the development stage simple as possible.</p>
                <br></br>
                <p className="goose">During development stage we use frameworks that allow us to deliver the best quality results every time. Our aim is to provide a service that allows businesses to take their websites to the next level.</p>
              </div>
              <div className="col-md-4">
                <img src={image} className="App-box" alt="box" />
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Content;
