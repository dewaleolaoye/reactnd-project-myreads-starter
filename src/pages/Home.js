import React from 'react';
import { Link } from 'react-router-dom';
import CurrentlyReading from '../components/CurrentlyReading';
import Read from '../components/Read';
import WantToRead from '../components/WantToRead';
import { getAll, update } from '../BooksAPI';

class Home extends React.Component {
  state = {
    data: [],
  };

  getBooks() {
    getAll()
      .then((response) => this.setState({ data: response }))
      .catch((error) => console.log(error, 'error'));
  }

  componentDidMount() {
    this.getBooks();
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
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <CurrentlyReading
            data={this.state.data}
            handleChange={this.handleChange}
          />

          <WantToRead data={this.state.data} handleChange={this.handleChange} />

          <Read data={this.state.data} handleChange={this.handleChange} />
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
