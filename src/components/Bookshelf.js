import React, { Component } from 'react';
import Book from './Book';
import PropTypes from "prop-types";

class Bookshelf extends Component {
  render() {
    const { shelfType, shelfLable, books, refreshBooks } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfLable}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter(book => book.shelf === shelfType)
              .map(book => (
                <li key={book.id}>
                  <Book book={book} refresh={refreshBooks}/>
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

Bookshelf.propTypes = {
  shelfType: PropTypes.string.isRequired,
  shelfLable: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  refreshBooks: PropTypes.func.isRequired
};

export default Bookshelf;