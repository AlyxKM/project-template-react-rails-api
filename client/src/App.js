import React from 'react';
import './App.css';
import MainDisplay from './components/MainDisplay';
import Header from './components/Header';
import NavBar from './components/NavBar';
import {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp';


function App() {

  const [bookList, setBookList] = useState([])
  const [bookShelf, setBookShelf] = useState([])
  const [fullBookList, setFullBookList] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [myShelf, setMyShelf] = useState(false)
  //const [user, setCurrentUser] = useState({})

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

  return (
    <div>
      <Switch>
        <Route exact path="/SignUp">
            <SignUp setCurrentUser={setCurrentUser}/>
           </Route>
        <Route exact path="/">
        <Header setCurrentUser={setCurrentUser} currentUser={currentUser} setBookList={setBookList} fullBookList={fullBookList}/>
        <NavBar setBookList={setBookList} fullBookList={fullBookList} bookShelf={bookShelf} currentUser={currentUser} setBookShelf={setBookShelf}/>
      <hr/>
        <MainDisplay bookList={bookList} bookShelf={bookShelf} currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
