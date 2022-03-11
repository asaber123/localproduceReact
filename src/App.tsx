//import { useState } from 'react';
// import { Routes } from 'react-router';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import { Search } from './pages/search/Search';


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Search />

    
    </div>
  );

};

export default App;
