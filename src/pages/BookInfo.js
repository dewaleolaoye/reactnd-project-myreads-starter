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

    // this.setState({ id: pathId[2] });
    this.getBook(pathId[2]);
  }

  handleChange = (e) => {
    const value = e.target.value.split(' ');
    const shelf = value[0];
    const id = value[1];

    update(id, shelf)
      .then(() => this.getBooks())
      .catch((error) => console.log(error, 'error'));
  };

  render() {
    const { data } = this.state;

    const thumbnail = data.imageLinks && data.imageLinks.smallThumbnail;

    return (
      <>
        <div className='book-info'>
          <BookShelf
            id={data.id}
            backgroundImage={thumbnail}
            bookAuthor={data.authors}
            bookTitle={data.title}
            onChange={this.handleChange}
            key={data.id}
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
