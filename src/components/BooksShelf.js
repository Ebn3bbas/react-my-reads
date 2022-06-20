import React from 'react'
import Book from './Book'

function BooksShelf({ title, shelfName, books, updateShelf })
{

  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {books.filter(book => book.shelf === shelfName)
                .map(book => <Book key={book.id} book={book} updateShelf={ updateShelf } />)}
        </ol>
        </div>
    </div>
  )
}

export default BooksShelf