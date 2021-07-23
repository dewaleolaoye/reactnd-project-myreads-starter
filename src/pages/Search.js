import React from 'react';
import { Link } from 'react-router-dom';
import { search, update } from '../BooksAPI';
import BookShelf from '../components/BookShelf';

class Search extends React.Component {
  state = {
    data: [],
    query: '',
  };

  handleSearch(query) {
    if (query.length > 1) {
      search(query)
        .then((response) => this.setState({ data: response }))
        .catch((error) => console.log(error, 'error'));
    } else {
      this.setState({ data: [] });
    }
  }

  handleBack() {
    window.history.back();
  }

  handleChange = (e) => {
    const value = e.target.value.split(' ');
    console.log(value, 'e');
    const shelf = value[0];
    const id = value[1];

    update(id, shelf)
      .then((response) => console.log(response))
      .catch((error) => console.log(error, 'error'));
  };

  render() {
    const { data } = this.state;

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search'>Close</button>
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={(e) => this.handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {data.map(({ authors, imageLinks, title, id }) => (
              <li key={id}>
                <BookShelf
                  bookTitle={title}
                  bookAuthor={authors}
                  backgroundImage={imageLinks.smallThumbnail}
                  onChange={this.handleChange}
                  id={id}
                  // defaultValue={`- ${id}`}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
