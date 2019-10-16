import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  render() {
    const { book } = this.props;
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
                  : `url(https://dummyimage.com/128x193/000/ffffff.jpg&text=No+image)`
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.toString().replace(/,/g, ', ')}</div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object
};

Book.defaultProps = {
  book: {
    title: 'none',
    authors: 'none'
  }
};

export default Book;