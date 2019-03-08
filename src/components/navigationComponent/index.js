import React, { Component } from 'react';
import '../../style/App.css';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="navBar banner gooselight">
          <Link to="/"><a><p className="navLinks">Home</p></a></Link>
          <Link to="/"><a><p className="navLinks">Our Portfolio</p></a></Link>
          <Link to="/"><a><p className="navLinks">Social Links</p></a></Link>
        </div>
      </div>
    );
  }
}

export default Header;
