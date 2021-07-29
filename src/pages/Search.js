import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { getAll, search, update } from '../BooksAPI';
import BookShelf from '../components/BookShelf';

const Search = () => {
  const [state, setState] = useState({ data: [] });
  const [shelfData, setShelfData] = useState({ data: [] });

  const handleSearch = (e) => {
    const query = e.target.value;

    if (query.length >= 1) {
      search(query)
        .then((response) => {
          if (response.error === 'empty query') {
            setState({ data: [] });
          } else {
            setState({ data: response });
          }
        })
        .catch((error) => console.log(error, 'error'));
    } else {
      setState({ data: [] });
    }
  };

  const mergedBooks = state.data.map((shelf) => {
    const item = shelfData.data.find(({ id }) => id === shelf.id);

    return item ? item : shelf;
  });

  useEffect(() => {
    getAll()
      .then((response) =>
        setShelfData({
          data: response,
        })
      )

      .catch((error) => console.log(error, 'error'));
  }, [state]);

  const handleChange = (book, shelf) => {
    book.shelf = shelf;

    update(book.id, shelf).then(() => {
      setShelfData({
        data: shelfData.data,
      });
    });
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(handleSearch, 400);
  }, []);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/'>
          <button className='close-search'>Close</button>
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            onChange={debouncedChangeHandler}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {mergedBooks.map((book) => (
            <li key={book.id}>
              <BookShelf
                shelfCategory={book.shelf}
                book={book}
                onChange={handleChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
