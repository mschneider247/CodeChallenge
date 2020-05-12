import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import NewProject from '../New Project/NewProject';
import ProjectContainer from '../Project Container/ProjectContainer';
import { Container } from '@material-ui/core';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }
  }

  addNewProject = (project) => {
    let newProjects = [...this.state.projects];
    if (project.title !== '') {
      newProjects.push(project);
      this.setState({ projects : newProjects})
    }
  }

  deleteProject = (id) => {
    let currentProjects = [...this.state.projects];
    currentProjects.forEach((project, index) => {
      if (project.id === id){
        currentProjects.splice(index, 1)
      }
    });
    this.setState({ projects : currentProjects });
  }

  render () {
    return (
      <Container id="App">
        <Header />
        <NewProject addNewProject={this.addNewProject}/>
        <ProjectContainer 
          projects={this.state.projects}
          deleteProject={this.deleteProject}
        />
      </Container>
    )
  }
}

export default App;