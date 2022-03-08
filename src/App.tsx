import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Search from './pages/search/Search';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/"> <Home/></Route>
        <Route path="/search"> <Search/></Route>
      </Switch>
    </Router>

  );
}

export default App;
