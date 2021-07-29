import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookShelf = ({ book, onChange, shelfCategory }) => {
  const { title, authors, id, imageLinks, shelf } = book;

  return (
    <div className='book'>
      <div className='book-top'>
        <Link to={`/info/${id}`}>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                imageLinks ? imageLinks.smallThumbnail : ''
              })`,
            }}
          />
        </Link>
        <div className='book-shelf-changer'>
          <select
            onChange={(e) => onChange(book, e.target.value)}
            value={shelf ? shelfCategory : 'none'}
          >
            <option value='move' disabled>
              Move to...
            </option>
            <option value={`currentlyReading`}>Currently Reading</option>
            <option value={`wantToRead`}>Want to Read</option>
            <option value={`read`}>Read</option>
            <option value={`none`}>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{authors}</div>
    </div>
  );
};

BookShelf.propTypes = {
  book: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BookShelf;
