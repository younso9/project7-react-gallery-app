// This imports the React Component from the react package
import React, { Component } from "react";


// Source: https://reacttraining.com/react-router/core/api/withRouter
// This imports "withRouter" method from react-router-dom module
// Will allow the form to redirect to a specified route
import { withRouter } from "react-router-dom";

class SearcherForm extends Component {
    constructor(props) {
        // This will execute the default constructor - https://www.youtube.com/watch?v=wdXEtKtHFdw
        super(props);
    
        // This state sets searchTerm to empty string
        this.state = { searchTerm: '' };

        // This will prevents executing the methods on a null 'this'
        this.updateSearchString = this.updateSearchString.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    // This listens for an update to the textbox value and stores information in state.searchTerm
    updateSearchString (e) {
        this.setState({searchTerm: e.target.value});
    }

    handleSubmit (e) {
      // This method cancels the event preventing the that default action that belongs to the event from occurring. 
      e.preventDefault();

      // This allows for the text that I entered to get rendered as a search 
      this.props.history.push(`/gallery/${this.state.searchTerm}`);

      // This will reset button state to normal
      e.currentTarget.reset();
  }

    render() {
        return (
          // This renders a search form, with a button and input
          // Information provided from Treehouse
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input type="search" name="search" placeholder="Search" required onChange={this.updateSearchString} className="input" />
            <button className="searchbutton" type="submit">
              <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </button>
          </form>
        );
    }
}

// This is the binding action of the form to the router
export default withRouter(SearcherForm);