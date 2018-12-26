import React, { Component } from 'react';
import '../../style/global.css';
import '../../style/App.css';
import Philosphy from './modules/philosophy'
import Aboutus from './modules/aboutus'
import Form from './modules/form'

class Content extends Component {
  render() {
    return (
      <div className="cont">
        <Philosphy />
        <Form />
        <Aboutus />
      </div>
    );
  }
}

export default Content;
