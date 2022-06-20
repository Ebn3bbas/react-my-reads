import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'
import BooksShelf from '../components/BooksShelf'
function HomeScreen({books, updateShelf})
{
  const shelves = [{ id: 1, shelfName: "currentlyReading", title: "Currently Reading" },
                  { id: 2, shelfName: "wantToRead", title: "Want to Read" },
                  { id: 3, shelfName:"read", title:"Read"},]

  return (
    <div className="list-books">
        <header className="list-books-title">
            <h1>MyReads</h1>
          </header>
      {shelves.map(shelf => (
        <BooksShelf key={shelf.id} books={books} title={shelf.title} shelfName={shelf.shelfName} updateShelf={ updateShelf } />
      ) )
      } 
        <Link to='/search'>
          <div className="open-search">
             <button >Add a book</button>
            </div>
        </Link>
    </div>
  )
}

export default HomeScreen