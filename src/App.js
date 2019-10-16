import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Bookshelf, Searcher } from './components';
import { Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };
  /**
   * @description Get all the books using the gerAll method from BooksAPI, it will change the books attribute in the app state.
   */
  getAllBooks = () => {
    BooksAPI.getAll()
      .then(books => this.setState({ books }));
  };
  /**
   * @description
   */
  refreshBooks = () => {
    this.getAllBooks();
  };
  // Here the life cycle methods begin
  componentDidMount() {
    this.getAllBooks();
  }
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf
                    shelfType='currentlyReading'
                    shelfLable='Currently Reading'
                    books={books}
                    refreshBooks={this.refreshBooks} />
                  <Bookshelf
                    shelfType='wantToRead'
                    shelfLable='Want to Read'
                    books={books}
                    refreshBooks={this.refreshBooks} />
                  <Bookshelf
                    shelfType='read'
                    shelfLable='Read'
                    books={books}
                    refreshBooks={this.refreshBooks} />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          )} />
        <Route
          path='/search'
          render={() => (
            <Searcher refreshBooks={this.refreshBooks} books={books}/>
          )} />
      </div>
    );
  }
}

export default BooksApp;
