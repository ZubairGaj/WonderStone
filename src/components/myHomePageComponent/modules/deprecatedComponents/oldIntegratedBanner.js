import React, { Component } from 'react';
import logo from '../../../assets/marketing.png';

class TitleBanner extends Component {

  render() {
    return (
      <div className="content-mini">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <img src={logo} className="App-banner" alt="banner" />
          </div>
        </div>
      </div>
    );
  }
}

export default TitleBanner;
