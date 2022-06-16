import React, { useEffect, useState } from 'react'
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import * as BooksAPI from './BooksAPI'

function App()
{
  const [books, setBooks] = useState([]) 
  const [searchResult , setSearchResult] = useState([])
    
    useEffect(() =>
    {
      BooksAPI.getAll().then(books =>
      {
        setBooks(books)
      })
    }, [])

  // to update the book's shelf state in both screens
  const updateSearchResult = (searchResult) =>
  {
    try
    {
      for (const searched of searchResult)
    {
      for (const book of books) {
        if(searched.id === book.id) searched.shelf = book.shelf 
      }
    }
    setSearchResult(searchResult)
    }catch (err)
    {
      setSearchResult([])
    }
  }
  
  const search = (query) =>
  {
    if (query === "")
    {
      setSearchResult([])
    } else
    {
      BooksAPI.search(query).then(res =>
      {
        updateSearchResult(res)
        if (res.error === 'empty query')
        {
          setSearchResult([])
        } else
        {
          setSearchResult(res)
        }
      })
    }
  }

  // there is a problem here
  const updateShelf = (book , shelf) => {

    BooksAPI.update(book, shelf)
      .then(shelfUpdated => (
        BooksAPI.getAll()
          .then(books =>
          {
            setBooks(books)
            updateSearchResult(searchResult)
          })
      ))
  }

  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen books={books} updateShelf={ updateShelf }/>} />
          <Route path="/search" exact element={<SearchScreen searchResult={searchResult} search={ search } updateShelf={ updateShelf }/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;