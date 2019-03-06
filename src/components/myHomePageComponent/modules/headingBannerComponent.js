import React, { Component } from 'react';

class TitleBanner extends Component {
  state = {
    headerText: "Create",
    headerColourMood: "fancy"
  }
  _generatingBannerTexts(){
    var textArr = ["Develop Simple User-Interfaces",
    "Construct Relevant Database Models",
    "Generate Web Interfaces Based on Wireframes",
    "Write Code",
    "Develop Web-Based Solutions to Problems",
    "Build Database Based Product Systems",
    "Develop Simple Company Systems",
    "Connect Businesses with Solutions"
  ]

    var randNumber = Math.floor(Math.random() * textArr.length);
    this.setState({
      headerText: textArr[randNumber]
    })
  }

  intervalTimer(){
    setInterval(()=>{this._generatingBannerTexts()}, 5000);
  }
  
  componentDidMount(){
    this.intervalTimer()
  }

  componentWillUnmount(){
    console.log('This component has been unmounted!');
    clearInterval(this.intervalTimer)
  }

  render() {
    return (
      <div className="content-mini">
        <br></br>
        <div className="row">
          <div className="col-md-12 col-sm-12 gooselight banner Heading">
            <p>Wonderstone Group</p>
            <p className={"headerColourMood"}>We, <span className={this.state.headerColourMood}>"{this.state.headerText}"</span></p>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}

export default TitleBanner;
