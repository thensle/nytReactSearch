// Include React
var React = require("react");
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

// Sub-components
var Results = require("./Results");

var Search = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { searchTerm: "", results: "", saved: ""};
  },

  // The moment the page renders get the History
  // componentDidMount: function() {
  // //   // Get the latest history.
  // //   helpers.getHistory().then(function(response) {
  // //     console.log(response);
  // //     if (response !== this.state.history) {
  // //       console.log("History", response.data);
  // //       this.setState({ history: response.data });
  // //     }
  // //   }.bind(this));
  // // },

  // // If the component changes (i.e. if a search is entered)...
  // componentDidUpdate: function() {

  //   // // Run the query for the address
  //   // helpers.runQuery(this.state.searchTerm).then(function(data) {
  //   //   if (data !== this.state.results) {
  //   //     console.log("Address", data);
  //   //     this.setState({ results: data });

  //   //     // After we've received the result... then post the search term to our history.
  //   //     helpers.postHistory(this.state.searchTerm).then(function() {
  //   //       console.log("Updated!");

  //   //       // After we've done the post... then get the updated history
  //   //       helpers.getHistory().then(function(response) {
  //   //         console.log("Current History", response.data);

  //   //         console.log("History", response.data);

  //   //         this.setState({ history: response.data });

  //   //       }.bind(this));
  //   //     }.bind(this));
  //   //   }
  //   // }.bind(this));
  // },
  // // This function allows childrens to update the parent.
  // setTerm: function(term) {
  //   this.setState({ searchTerm: term });
  // },
  // Here we render the function
  render: function() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Search</h3>
          </div>
          <div className="panel-body">
            <form>
              <FormGroup controlId="Search">
                <ControlLabel>Search Criteria</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Search for subject, title, or author"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="startDate">
                <ControlLabel>Start Date</ControlLabel>
                <FormControl
                  type="date"
                  value={this.state.value}
                  placeholder="Enter the year of the earliest published articles you want to include"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="endDate">
                <ControlLabel>End Date</ControlLabel>
                <FormControl
                  type="date"
                  value={this.state.value}
                  placeholder="Enter the year of the latest published articles you want to include"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </form>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Results</h3>
                </div>
                <div className="panel-body">
                  <Results />
                </div>
           </div>
          </div>
       </div>
    </div>
  </div>
  );
  }
});

module.exports = Search;