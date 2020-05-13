import React, { Component } from 'react';
import './Search.css';
import { Container, Input } from '@material-ui/core'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    }
  }

  inputSearch = (e) => {
    this.setState({ [e.target.name] : e.target.value });
    this.props.updateSearch(e.target.value);
  }

  render() {
    return (
      <Container maxwidth='xs'>
        <Input
          placeholder="Search"
          name="search"
          type="text"
          value={this.state.search}
          onChange={(e) => this.inputSearch(e)}
        />
      </Container>
    )
  }
}

export default Search;