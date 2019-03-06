import React, { Component } from 'react';
import '../../style/global.css';
import '../../style/App.css';
import HeadingBanner from './modules/headingBannerComponent'
import Aboutus from './modules/aboutUsComponent'
import Form from './modules/formComponent'

class Content extends Component {
  render() {
    return (
      <div className="cont">
        <HeadingBanner />
        <Aboutus />
        <Form />
      </div>
    );
  }
}

export default Content;
