import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "lol",
      email: "lol@lol.com",
      number: "7897987",
      companyname: "huih",
      companyinfo: "joij",
      projectinfo: "oijoij"
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleCompanyInfoChange = this.handleCompanyInfoChange.bind(this);
    this.handleProjectInfoChange = this.handleProjectInfoChange.bind(this);
  }
  
  send(){
    console.log('lol');
    const object = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      companyname: this.state.companyname,
      companyinfo: this.state.companyinfo,
      projectinfo: this.state.projectinfo
    }
    console.log(object);
    
    fetch('http://localhost:3002/query', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object)
    })
  }

  handleNameChange (e) {
    this.setState({name: e.target.value});
  };
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  };
  handleNumberChange(e) {
    this.setState({number: e.target.value});
  };
  handleCompanyNameChange(e) {
    this.setState({companyname: e.target.value});
  };
  handleCompanyInfoChange(e) {
    this.setState({companyinfo: e.target.value});
  };
  handleProjectInfoChange(e) {
    this.setState({projectinfo: e.target.value});
  };

  componentDidMount() {
  }
  render() {
    return (
        <div>
          <br></br>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="gooselight">Name: </label>
                <input type="text" className="form-control" id="inputname" placeholder="Please enter your name" value={this.state.name} onChange={this.handleNameChange} required></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="gooselight">Email:</label>
                <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter a valid email address" value={this.state.email} onChange={this.handleEmailChange} required></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="gooselight">Number: </label>
                <input type="number" className="form-control" id="inputname" placeholder="Enter a valid number" value={this.state.number} onChange={this.handleNumberChange} required></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="gooselight">Company Name:</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Please enter your company name" value={this.state.companyname} onChange={this.handleCompanyNameChange} required></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="gooselight">Company Information: </label>
                <textarea className="form-control" id="inputname" rows="5" placeholder="Please give us some information regarding your company. (How long you've been around, a link to your current website, where you're located...)" value={this.state.companyinfo} onChange={this.handleCompanyInfoChange} required></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="gooselight">Project Information: </label>
                <textarea className="form-control" id="inputname" rows="5" placeholder="Please give us some information about the project at hand. (How many pages you plan for it to have, What features you'd like incorporated in the site, e.g. contact form, online menu...)" value={this.state.projectinfo} onChange={this.handleProjectInfoChange} required></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <button onClick={()=>{this.send()}} className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
    );
  } 
}

export default Form;
