import React, { Component } from 'react';
import '../../style/global.css';
import '../../style/App.css';
import Philosphy from './modules/philosophy'

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Philosphy />
      </div>
    );
  } 
}

export default Content;
