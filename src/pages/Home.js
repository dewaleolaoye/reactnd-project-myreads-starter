import React from 'react';
import { Link } from 'react-router-dom';
import CurrentlyReading from '../components/CurrentlyReading';
import Read from '../components/Read';
import WantToRead from '../components/WantToRead';
import * as BooksAPI from '../BooksAPI';

// const Home = () => {
//   BooksAPI.getAll()
//     .then((res) => console.log(res, 'res'))
//     .catch((err) => console.log(err, 'error'));
//   return (

//   );
// };

class Home extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((response) => this.setState({ data: response }))
      .catch((error) => console.log(error, 'error'));
  }

  handleChange = (e) => {
    console.log(e.target.value, 'HOME');
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

          <WantToRead data={this.state.data} />

          <Read data={this.state.data} />
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
