import React, { Component } from 'react';
import './NewProject.css';
import { Container, Input, Typography } from '@material-ui/core';

class NewProject extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: '',
      urgent: false,
      complette: false,
      subtasks: [],
    }
  }

  render() {
    return (
      <Container maxWidth="lg" id="new_project">
        <Typography>
          Add a new project:
        </Typography>
        <Input
          placeholder="Project Title"
          name="title"
          type="text"
          value={this.state.title}
        />
      </Container>
    )
  }
}

export default NewProject;