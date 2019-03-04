import React, { Component } from 'react';

class lightText extends Component {
  render() {
    return (
      <div className="gooselight">
        <p>
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default lightText;
