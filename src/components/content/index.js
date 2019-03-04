import React, { Component } from 'react';
import '../../style/global.css';
import '../../style/App.css';
import TitleBanner from './modules/titleBanner'
import Philosphy from './modules/philosophy'
import Aboutus from './modules/aboutus'
import Form from './modules/form'

class Content extends Component {
  render() {
    return (
      <div className="cont">
        <TitleBanner />
        <Philosphy />
        <Aboutus />
        <Form />
      </div>
    );
  }
}

export default Content;
