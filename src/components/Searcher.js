import React, { Component } from 'react';
import * as BooksAPI from "../BooksAPI.js";
import Book from './Book';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Searcher extends Component {
  state = {
    queryString: "",
    filteredBooks: []
  };
  /**
   * @description Handle for update queryString.
   * @param queryString - no matches foundThe string for make the search.
   */
  handleChange = queryString => {
    this.setState(() => ({ queryString }))
    BooksAPI.search(queryString).then(filteredBooks => {
      filteredBooks && filteredBooks.length > 0
        ? this.setState({
          filteredBooks: filteredBooks
        })
        : console.log("No matches found");
    });
  };
  // Here the life cycle methods begin
  render() {
    const { queryString, filteredBooks } = this.state
    console.log(filteredBooks)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={queryString}
              onChange={event => this.handleChange(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

Searcher.protoTypes = {

};

export default Searcher;