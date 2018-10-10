import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }
  componentDidMount() {
    this.setState({
      date: new Date().getFullYear()
    })
  }
  render() {
    return (
      <div className="footer">
        <div className="banner">
          <p ><span className="goose">WONDERSTONE GROUP LIMITED</span> <span>&#169;</span> {this.state.date}</p>
        </div>
      </div>
    );
  }
}

export default Footer;
