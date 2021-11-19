import React from 'react';
import './App.css';
import MainDisplay from './components/MainDisplay';
import Header from './components/Header';
import NavBar from './components/NavBar';
import {useEffect, useState} from 'react'


function App() {

  const [bookList, setBookList] = useState([])
  const [bookShelf, setBookShelf] = useState([])
  const [fullBookList, setFullBookList] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => 
      {setBookList(data)
      setFullBookList(data)})

    fetch("http://localhost:3000/bookshelves")
    .then(res => res.json())
    .then(data => setBookShelf(data))
    
  }, []) 

  function handleFilterByGenre(id) {
    const filteredBooks = bookList.filter((book)=> book.genre.includes(id))
  
    setBookList(filteredBooks)
  }



  return (
    <div>
        <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        <NavBar setBookList={setBookList} fullBookList={fullBookList}/>
      <hr/>
        <MainDisplay bookList={bookList} bookShelf={bookShelf}/>
    </div>
  );
}

export default App;
