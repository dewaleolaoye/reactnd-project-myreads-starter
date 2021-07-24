import React from 'react';
import { Link } from 'react-router-dom';

const BookShelf = ({
  backgroundImage,
  onChange,
  bookTitle,
  bookAuthor,
  id,
  defaultValue,
}) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <Link to={`/info/${id}`}>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${backgroundImage ? backgroundImage : ''})`,
            }}
          />
        </Link>
        <div className='book-shelf-changer'>
          <select onChange={onChange} value={defaultValue}>
            <option value='move' disabled>
              Move to...
            </option>
            <option value={`currentlyReading ${id}`}>Currently Reading</option>
            <option value={`wantToRead ${id}`}>Want to Read</option>
            <option value={`read ${id}`}>Read</option>
            <option value={`none ${id}`}>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{bookTitle}</div>
      <div className='book-authors'>{bookAuthor}</div>
    </div>
  );
};

export default BookShelf;
