import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI.js";

class Book extends Component {
  /**
   * @description Handle for update the shelf of the book.
   * @param {object} book - The book object.
   * @param {string} shelf - The shelf for make the update.
   * @param {function} refresh - Function for refresh the books attribute on the App.
   */
  handleChange = (book, shelf, refresh) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        refresh()
      })
  };
  // Here the life cycle methods begin
  render() {
    const { book, refresh } = this.props;
    const width = 128;
    const height = 193;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: width,
              height: height,
              backgroundImage:
                book.imageLinks && book.imageLinks.thumbnail
                  ? `url(${book.imageLinks.thumbnail})`
                  : `url(https://dummyimage.com/128x193/000/ffffff.jpg&text=No+image)` // Added as a placeholder
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={
                book.shelf && book.shelf.length > 0
                  ? book.shelf
                  : (book.shelf = 'none')
              }
              onChange={event => this.handleChange(book, event.target.value, refresh)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.toString().replace(/,/g, ', ')}</div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
  refresh: PropTypes.func
};

Book.defaultProps = {
  book: {
    title: 'none',
    authors: 'none'
  },
  refresh: () => console.log('No refresh method available...')
};

export default Book;