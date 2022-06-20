import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'
import PropTypes from 'prop-types'
function SearchScreen({error, searchResult, search ,updateShelf})
{
  SearchScreen.propTypes = {
    error: PropTypes.string.isRequired,
    searchResult: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired,
    updateShelf: PropTypes.func.isRequired,
    }
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
            onChange={(e) => setTimeout(search(e.target.value),100) }
                  />
      </div>
      </div>
    <div className="search-books-results">
        <ol className="books-grid">
          {error && <p>{ error }</p>}
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
