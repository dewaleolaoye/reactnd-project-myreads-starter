import React, { useState, useMemo, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { getAll, search, update } from '../BooksAPI';
import BookShelf from '../components/BookShelf';

const Search = () => {
  const history = useHistory();
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

  useEffect(() => {
    getAll()
      .then((response) =>
        setShelfData({
          data: response,
        })
      )

      .catch((error) => console.log(error, 'error'));
  }, []);

  const mergedBooks = state.data.map((shelf) => {
    const item = shelfData.data.find(({ id }) => id === shelf.id);

    return item ? item : shelf;
  });

  const handleChange = (e) => {
    const value = e.target.value.split(' ');

    const shelf = value[0];
    const id = value[1];

    update(id, shelf)
      .then(() => history.push('/'))
      .catch((error) => console.log(error, 'error'));
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
          {mergedBooks.map(({ authors, imageLinks, title, id, shelf }) => (
            <li key={id}>
              <BookShelf
                bookTitle={title}
                bookAuthor={authors === undefined ? '' : authors}
                backgroundImage={
                  imageLinks === undefined ? '' : imageLinks.smallThumbnail
                }
                onChange={handleChange}
                id={id}
                defaultValue={`${shelf} ${id}`}
                shelf={`${shelf}`}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
