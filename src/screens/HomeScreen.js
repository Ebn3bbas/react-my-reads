import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book'
function HomeScreen({books, updateShelf})
{
    
  return (
    <div className="list-books">
        <header className="list-books-title">
            <h1>MyReads</h1>
          </header>
          
          <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {books.filter(book => book.shelf === "currentlyReading")
                          .map(book => <Book key={book.id} book={book} updateShelf={ updateShelf } />)}
                </ol>
                </div>
          </div>

          <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {books.filter(book => book.shelf === "wantToRead")
                          .map(book => <Book key={book.id} book={book} updateShelf={ updateShelf }/>)}
                </ol>
                </div>
          </div>

          <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {books.filter(book => book.shelf === "read")
                          .map(book => <Book key={book.id} book={book} updateShelf={ updateShelf }/>)}
                </ol>
                </div>
          </div>
        <Link to='/search'>
          <div className="open-search">
             <button >Add a book</button>
            </div>
        </Link>
    </div>
  )
}

export default HomeScreen