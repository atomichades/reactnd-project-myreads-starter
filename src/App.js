import React from 'react'
import {BookItem} from  './BookComponent'
import {BookModel} from './BookModel.js'
import * as BooksAPI from './BooksAPI'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from "./BookShelf";

class BooksApp extends React.Component {

  //component the books
//DONE
  //create array for currently reading & populate

  // //create array for want to read  & populate
  // wantToRead = []
  // //create array for read. & populate
  // read= []
  //ensure persists on refresh

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((result) => {this.setState({books:result});
    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
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
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf className ="bookshelf" title = "Currently Reading" books = {this.books}/>
                <BookShelf className ="bookshelf" title = "Want to Read" books = {this.books}/>
                <BookShelf className ="bookshelf" title = "Read" books = {this.books}/>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

function moveBook(title, moveTo){
  BooksAPI.update(title, moveTo).then(() => BooksAPI.getAll()).then(res => this.setState({books:res}))
  console.log(title + " "+ moveTo);
  switch (moveTo) {
    case "currentlyReading" :

    case "wantToRead" :

    case "read" :

  }
  return true;
}


export default BooksApp
