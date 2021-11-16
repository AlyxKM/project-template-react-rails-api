import React from 'react';
import './App.css';
import MainDisplay from './components/MainDisplay';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <MainDisplay />
    </div>
  );
}

export default App;
