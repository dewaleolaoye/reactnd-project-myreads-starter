import React from 'react';
import { Link } from 'react-router-dom';
import { get, update } from '../BooksAPI';
import BookShelf from '../components/BookShelf';

class BookInfo extends React.Component {
  state = {
    data: {},
  };

  getBook(id) {
    get(id)
      .then((response) => this.setState({ data: response }))
      .catch((error) => console.log(error, 'error'));
  }

  componentDidMount() {
    const pathId = window.location.pathname.split('/');

    this.getBook(pathId[2]);
  }

  handleChange = (book, shelf) => {
    update(book.id, shelf)
      .then(() => this.getBooks())
      .catch((error) => console.log(error, 'error'));
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <div className='book-info'>
          <BookShelf
            book={data}
            onChange={this.handleChange}
            shelfCategory={data.shelf}
          />

          <div className='book-content'>
            <h1>Title: {data.title}</h1>
            <p>Page count: {data.pageCount}</p>
            <p>Description: {data.description}</p>
            <Link to='/'>Home</Link>
          </div>
        </div>
      </>
    );
  }
}

export default BookInfo;
