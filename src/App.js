import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import BookInfo from './pages/BookInfo';
import Home from './pages/Home';
import Search from './pages/Search';

class BooksApp extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/info/:id'>
              <BookInfo />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
