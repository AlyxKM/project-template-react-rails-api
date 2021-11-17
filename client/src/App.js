import React from 'react';
import './App.css';
import MainDisplay from './components/MainDisplay';
import Header from './components/Header';
import NavBar from './components/NavBar';
import {useEffect, useState} from 'react'

function App() {

  const [bookList, setBookList] = useState([])
  const [bookShelf, setBookShelf] = useState([])

  /*useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => setBookList(data))

    fetch("http://localhost:3000/bookshelves")
    .then(res => res.json())
    .then(data => setBookShelf(data))
    
  }, []) */

  return (
    <div>
      <Header />
      <NavBar />
      <hr/>
      <MainDisplay bookList={bookList} bookShelf={bookShelf}/>
    </div>
  );
}

export default App;
