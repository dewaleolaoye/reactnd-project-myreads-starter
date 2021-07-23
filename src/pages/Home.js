import React from 'react';
import { Link } from 'react-router-dom';
import CurrentlyReading from '../components/CurrentlyReading';
import Read from '../components/Read';
import WantToRead from '../components/WantToRead';

const Home = () => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <CurrentlyReading />

        <WantToRead />

        <Read />
      </div>
      <div className='open-search'>
        <Link to='/search'>
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
