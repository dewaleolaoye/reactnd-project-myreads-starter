import React from 'react';
import { Link } from 'react-router-dom';
import { getAll, update } from '../BooksAPI';
import Shelf from '../components/Shelf';

class Home extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    try {
      const response = await getAll();

      this.setState({ data: response });
    } catch (error) {
      console.log(error, 'error');
    }
  }

  handleChange = (selectedBook, shelf) => {
    selectedBook.shelf = shelf;

    update(selectedBook.id, shelf).then(() => {
      this.setState((currentState) => ({
        data: currentState.data
          .filter((b) => {
            console.log(currentState, 'current state');
            return b.id !== selectedBook.id;
          })
          .concat([selectedBook]),
      }));
    });
  };

  render() {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <Shelf
            data={this.state.data}
            handleChange={this.handleChange}
            title={'Currently Reading'}
            shelfCategory={'currentlyReading'}
          />

          <Shelf
            data={this.state.data}
            handleChange={this.handleChange}
            title={'Want To Read'}
            shelfCategory={'wantToRead'}
          />

          <Shelf
            data={this.state.data}
            handleChange={this.handleChange}
            title={'Read'}
            shelfCategory={'read'}
          />
        </div>
        <div className='open-search'>
          <Link to='/search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
