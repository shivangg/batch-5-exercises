import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  static goPageNumber(pageNumber) {
    window.location.href = `http://localhost:3000/posts/${pageNumber}`;
  }
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };

    // this.goPageNumber = this.goPageNumber.bind(this);
    this.dataFetcherAndAdder = this.dataFetcherAndAdder.bind(this);
  }

  componentDidMount() {
    this.dataFetcherAndAdder();
  }

  dataFetcherAndAdder() {
    const getData = (url = '') =>
      /* eslint-env browser */
      fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'pesto-password': 'darth vader',
        },
      }).then(response => response.json()); // parses response to JSON
    const url = window.location.pathname.split('/');
    const lastPartofURL = url[url.length - 1];
    console.log(lastPartofURL);

    if (lastPartofURL) {
      getData(`http://localhost:3001/posts/${lastPartofURL}`)
        .then(({ data }) => {
          console.log(data);
          localStorage.setItem('currentPage', lastPartofURL);
          this.setState({ posts: data });
        })
        .catch(error => console.error(error));
    }
  }

  handleNextClick() {
    const nextPage = parseInt(localStorage.getItem('currentPage'), 10) + 1;
    console.log(this);
    App.goPageNumber(nextPage);
  }
  handlePrevClick() {
    const prevPage = parseInt(localStorage.getItem('currentPage'), 10) - 1;
    console.log(this);
    App.goPageNumber(prevPage);
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>Previous</button>
        <button onClick={this.handleNextClick}>Next</button>
        <div>
          {this.state.posts.map(post => (
            <Fragment key={post.id}>
              <Post post={post} />
              <hr />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
