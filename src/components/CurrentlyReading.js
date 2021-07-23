import React from 'react';
import BookShelf from './BookShelf';

const CurrentlyReading = () => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Currently Reading</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          <li>
            <BookShelf
              backgroundImage='http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
              bookTitle='To Kill a Mockingbird'
              bookAuthor='Harper Lee'
              handleChange={(e) => console.log(e.target.value, 'click')}
            />
          </li>
          <li>
            <BookShelf
              backgroundImage='http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
              bookTitle="Ender\'s game"
              bookAuthor='Orson Scott Card'
              handleChange={(e) => console.log(e.target.value, 'click')}
            />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CurrentlyReading;
