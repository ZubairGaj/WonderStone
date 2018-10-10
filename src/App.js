import React, { Component } from 'react';
import './style/App.css';
import './style/bootstrap.min410.css';
import './style/global.css';
import Header from "./components/header/index"
import Content from "./components/content/index"
import Footer from "./components/footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-md-2"><br></br></div>
          <div className="col-md-8">
            <Content />
          </div>
          <div className="col-md-2"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
