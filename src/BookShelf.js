import Book, {BookItem} from './BookComponent.js'
import React from 'react'

const BookShelf = (props) => {
    const {shelf, moveBook} = props;

    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelf.books.map(book =>
                            <BookItem
                                key={book.id}
                                book={book}
                                moveBook={moveBook}
                            />)}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default BookShelf
