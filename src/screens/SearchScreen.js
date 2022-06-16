import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book'
function SearchScreen({ searchResult, search ,updateShelf})
{

  return (
    <div className="search-books">
    <div className="search-books-bar">
    <Link to='/'>
    <button className="close-search">Close</button>
    </Link> 
      <div className="search-books-input-wrapper">
                  <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => search(e.target.value)}
                  />
      </div>
      </div>
    <div className="search-books-results">
      <ol className="books-grid">
          {searchResult &&  searchResult.map(book => (
                <Book key={book.id} book={book} updateShelf={ updateShelf }/>
              ))
          }
      </ol>
    </div>
  </div>
  )
}

export default SearchScreen
