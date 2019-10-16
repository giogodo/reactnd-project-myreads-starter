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
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
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