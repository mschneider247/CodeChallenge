import React, { Component } from 'react';
import './NewProject.css';
import { Container, Input, Typography, Tooltip, Button } from '@material-ui/core';

class NewProject extends Component {
  constructor(props) {
    super();
    this.state = {
      id: 0,
      title: "",
      urgent: false,
      complette: false,
      subtasks: [],
    }
  }

  inputTitle = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  inputProject = () => {
    console.log("Button");
    this.props.addNewProject(this.state)
  }

  render() {
    return (
      <Container maxWidth="lg" id="new_project">
        <Typography>Add a new project:</Typography>
        <Input
          placeholder="Search"
          name="title"
          type="text"
          value={this.state.title}
          onChange={e => this.inputTitle(e)}
        />
        <Tooltip title="Add Project!" arrow>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => this.inputProject()}>
            +
          </Button>
        </Tooltip>
      </Container>
    );
  }
}

export default NewProject;