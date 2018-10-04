import React, { Component } from 'react';
import './style/App.css';
import Header from "./components/header/index"
import Content from "./components/content/index"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container checker">
          <div className="col-md-8">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
