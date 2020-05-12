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
    newProjects.push(project);
    this.setState({ projects : newProjects})
  }

  render () {
    return (
      <Container>
        <Header />
        <Search />
        <NewProject addNewProject={this.addNewProject}/>
        <ProjectContainer projects={this.state.projects}/>
      </Container>
    )
  }
}

export default App;