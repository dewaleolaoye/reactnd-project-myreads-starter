import React from 'react';
import BookShelf from './BookShelf';

const WantToRead = ({ data, handleChange }) => {
  const filterData = data.filter(({ shelf }) => {
    return shelf === 'wantToRead';
  });

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Want to Read</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {filterData.map(({ authors, imageLinks, title, id, shelf }) => (
            <li key={id}>
              <BookShelf
                bookTitle={title}
                bookAuthor={authors.map((res) => res.toString())}
                backgroundImage={imageLinks.smallThumbnail}
                onChange={handleChange}
                id={id}
                defaultChecked='read'
                defaultValue={`wantToRead ${id}`}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WantToRead;
