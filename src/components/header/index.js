import React, { Component } from 'react';
import logo from '../../assets/wndrstone.png';
import '../../style/App.css';
import ContactForm from './modules/form';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;
