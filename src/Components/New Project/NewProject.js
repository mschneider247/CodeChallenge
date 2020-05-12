import React, { Component } from 'react';
import './NewProject.css';
import { Container, Input, Typography, Tooltip, Button } from '@material-ui/core';

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

  inputTitle = (e) => {
    this.setState({ [e.target.name] : e.target.value })
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
          onchange={(e) => this.inputTitle(e)}
        />
        <Tooltip title="Add Project!" arrow>
          <Button variant="contained" color="primary">
            +
          </Button>
        </Tooltip>
      </Container>
    )
  }
}

export default NewProject;