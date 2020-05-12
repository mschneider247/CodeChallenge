import React, { Component } from 'react';
import './Search.css';
import { Container, Input } from '@material-ui/core'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
  }

  render() {
    return (
      <Container maxwidth='xs'>
        <Input
          placeholder="Search"
          name="search"
          type="text"
          value={this.state.search}
        />
      </Container>
    )
  }
}

export default Search;