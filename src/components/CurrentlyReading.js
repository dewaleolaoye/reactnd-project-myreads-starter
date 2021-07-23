import React from 'react';
import BookShelf from './BookShelf';

const CurrentlyReading = ({ data, handleChange }) => {
  const filterData = data.filter(({ shelf }) => {
    return shelf === 'currentlyReading';
  });

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Currently Reading</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {filterData.map(({ authors, imageLinks, title }) => (
            <li key={title}>
              <BookShelf
                bookTitle={title}
                bookAuthor={authors.map((res) => res.toString())}
                backgroundImage={imageLinks.smallThumbnail}
                onChange={handleChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CurrentlyReading;
