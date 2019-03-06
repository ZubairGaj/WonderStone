import React, { Component } from 'react';
import logo from '../../../assets/banner2.jpg';
import image from '../../../assets/main.jpg';

class AboutUs extends Component {
  render() {
    return (
      <div className="g-row">
        <hr></hr>
        <div className="row banner">
          <div className="col-md-12">
            <br></br>
            <h5 className="gooselight Heading">About us</h5>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
        <div id="info" className="container-fluid banner row">
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="border-spec border-about">
                <span className="glyphicon glyphicon-star"></span>
                <p className="gooselight align-left">Bespoke Development</p>
                <p className="goose align-left">Our specialist team and design squad, will build your website from the ground up, with specifications suited to your brand.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="border-spec border-about">
                <span className="glyphicon glyphicon-heart"></span>
                <p className="gooselight align-left">Specialist Team</p>
                <p className="goose align-left">Our innovation team will help give your brand the push that it needs to success in an ever changing marketplace. </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="border-spec border-about">
                <span className="glyphicon glyphicon-heart"></span>
                <p className="gooselight align-left">Agile Development</p>
                <p className="goose align-left">At Wonderstone we use the agile development methodology, which means we constantly plan, test, design and develop in daily iterations. </p>
              </div>
            </div>
        </div>
        <br></br>
        <div className="container-fluid text-center row">
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="border-spec border-about">
                <span className="	glyphicon glyphicon-home"></span>
                <p className="gooselight align-left">London Based</p>
                <p className="goose align-left">To maximize efficency we base our team in London, which allows us to streamline product deployment, communication and development.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="border-spec border-about">
                <span className="glyphicon glyphicon-ok-circle"></span>
                <p className="gooselight align-left">Design professionals</p>
                <p className="goose align-left">Our innovation team will help give your brand the push that it needs to success in an ever changing marketplace.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <div className="border-spec border-about">
                <span className="glyphicon glyphicon-heart"></span>
                <p className="gooselight align-left">Free Quote</p>
                <p className="goose align-left">For free tailored price quotes from top web designers in the UK, complete the form below.</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
