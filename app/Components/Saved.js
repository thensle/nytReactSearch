// Include React
var React = require("react");

var Saved = React.createClass({

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
    	<div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">
                  Content here
                </div>
           </div>
          </div>
       </div>
    </div>
    	</div>
    );
  }
});


module.exports = Saved;