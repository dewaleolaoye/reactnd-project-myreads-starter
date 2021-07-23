import React from 'react';
import BookShelf from './BookShelf';

const CurrentlyReading = ({ data, handleChange }) => {
  const filterData = data.filter(({ shelf }) => {
    return shelf === 'currentlyReading';
  });

  console.log(filterData, 'filter data');

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Currently Reading</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {filterData.map(({ authors, imageLinks, title, id }) => (
            <li key={id}>
              <BookShelf
                bookTitle={title}
                bookAuthor={authors.map((res) => res.toString())}
                backgroundImage={imageLinks.smallThumbnail}
                onChange={handleChange}
                id={id}
                defaultValue={`currentlyReading ${id}`}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CurrentlyReading;
