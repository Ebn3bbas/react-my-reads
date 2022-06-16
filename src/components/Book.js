import React from 'react'
import PropTypes from 'prop-types'

function Book({ book, updateShelf })
{
    const propTypes = {
        book: PropTypes.object.isRequired,
        updateShelf: PropTypes.func.isRequired,
    }
    let shelf = (book.shelf)
      ? book.shelf
        : 'none'
    
  return (
    <li>
     <div className="book">
        <div className="book-top">
        <div className="book-cover" style={{
            width: 128, height: 193,
            backgroundImage: `url(${ book.imageLinks && book.imageLinks.thumbnail })`
        }}></div>
        <div className="book-shelf-changer">
            <select
            defaultValue={shelf}
            onChange={(e) => updateShelf(book , e.target.value)}
            >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
        </div>
             {book.title && <div className="book-title">{ book.title}</div>}
             
              {book.authors && book.authors.map(author => (
                  <div className="book-authors" key={author}>{ author}</div>
                ))}
              
    </div>
    </li>
  )
}

export default Book
