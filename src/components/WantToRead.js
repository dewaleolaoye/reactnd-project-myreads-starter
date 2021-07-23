import React from 'react';
import BookShelf from './BookShelf';

const WantToRead = () => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Want to Read</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          <li>
            <BookShelf
              backgroundImage='http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
              bookTitle='1776'
              bookAuthor='David McCullough'
              handleChange={(e) => console.log(e.target.value, 'click')}
            />
          </li>
          <li>
            <BookShelf
              backgroundImage='http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'
              bookTitle="Harry Potter and the Sorcerer's Stone"
              bookAuthor='J.K. Rowling'
              handleChange={(e) => console.log(e.target.value, 'click')}
            />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WantToRead;
