import React from 'react';
import BookShelf from './BookShelf';

const Shelf = ({ data, handleChange, title, shelfCategory }) => {
  return (
    <>
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {data
              .filter(({ shelf }) => {
                return shelf === shelfCategory;
              })
              .map((book) => {
                return (
                  <li key={book.id}>
                    <BookShelf
                      shelfCategory={shelfCategory}
                      book={book}
                      onChange={handleChange}
                    />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Shelf;
