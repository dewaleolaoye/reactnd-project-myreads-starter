import React from 'react';
import BookShelf from './BookShelf';

const Read = ({ data, handleChange }) => {
  const filterData = data.filter(({ shelf }) => {
    return shelf === 'read';
  });

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Read</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {filterData.map(({ authors, imageLinks, title, id, shelf }) => (
            <li key={id}>
              <BookShelf
                bookTitle={title}
                bookAuthor={authors}
                backgroundImage={imageLinks.smallThumbnail}
                onChange={handleChange}
                id={id}
                defaultValue={`read ${id}`}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Read;
