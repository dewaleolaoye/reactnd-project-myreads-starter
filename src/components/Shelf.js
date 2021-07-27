import React from 'react';
import BookShelf from './BookShelf';

const Shelf = ({ data, handleChange }) => {
  const currentlyReading = data.filter(({ shelf }) => {
    return shelf === 'currentlyReading';
  });

  const wantToRead = data.filter(({ shelf }) => {
    return shelf === 'wantToRead';
  });

  const read = data.filter(({ shelf }) => {
    return shelf === 'read';
  });

  return (
    <>
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>Currently Reading</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {currentlyReading.map(
              ({ authors, imageLinks, title, id, shelf }) => (
                <li key={id}>
                  <BookShelf
                    bookTitle={title}
                    bookAuthor={authors}
                    backgroundImage={imageLinks.smallThumbnail}
                    onChange={handleChange}
                    id={id}
                    shelf={`${shelf}`}
                    defaultValue={`${shelf} ${id}`}
                  />
                </li>
              )
            )}
          </ol>
        </div>
      </div>

      <div className='bookshelf'>
        <h2 className='bookshelf-title'>Want to Read</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {wantToRead.map(({ authors, imageLinks, title, id, shelf }) => (
              <li key={id}>
                <BookShelf
                  bookTitle={title}
                  bookAuthor={authors}
                  backgroundImage={imageLinks.smallThumbnail}
                  onChange={handleChange}
                  id={id}
                  shelf={`${shelf}`}
                  defaultValue={`${shelf} ${id}`}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className='bookshelf'>
        <h2 className='bookshelf-title'>Read</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {read.map(({ authors, imageLinks, title, id, shelf }) => (
              <li key={id}>
                <BookShelf
                  bookTitle={title}
                  bookAuthor={authors}
                  backgroundImage={imageLinks.smallThumbnail}
                  onChange={handleChange}
                  id={id}
                  shelf={`${shelf}`}
                  defaultValue={`${shelf} ${id}`}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Shelf;
