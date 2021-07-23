import React from 'react';

const BookShelf = ({ backgroundImage, onChange, bookTitle, bookAuthor }) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className='book-shelf-changer'>
          <select onChange={onChange}>
            <option value='move' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{bookTitle}</div>
      <div className='book-authors'>{bookAuthor}</div>
    </div>
  );
};

export default BookShelf;
