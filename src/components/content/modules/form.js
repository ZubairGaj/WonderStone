import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
        <form>
          <br></br>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label class="gooselight" for="inputname">Name: </label>
                <input type="text" class="form-control" id="inputname" placeholder="Please enter your name" required></input>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label class="gooselight" for="formGroupExampleInput2">Email:</label>
                <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter a valid email address" required></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="form-group">
                <label class="gooselight" for="inputname">Number: </label>
                <input type="number" class="form-control" id="inputname" placeholder="Enter a valid number" required></input>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-group">
                <label class="gooselight" for="formGroupExampleInput2">Company Name:</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Please enter your company name" required></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div class="form-group">
                <label class="gooselight" for="inputname">Company Information: </label>
                <textarea class="form-control" id="inputname" rows="5" placeholder="Please give us some information regarding your company. (How long you've been around, a link to your current website, where you're located...)" required></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div class="form-group">
                <label class="gooselight" for="inputname">Project Information: </label>
                <textarea class="form-control" id="inputname" rows="5" placeholder="Please give us some information about the project at hand. (How many pages you plan for it to have, What features you'd like incorporated in the site, e.g. contact form, online menu...)" required></textarea>
              </div>
            </div>
          </div>
        </form>
    );
  } 
}

export default Form;
