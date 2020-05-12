import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }
  }

  render () {
    return (
      <>
        <Header />
        <Search />
      </>
    )
  }
}

export default App;