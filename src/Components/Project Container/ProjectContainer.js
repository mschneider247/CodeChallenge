import React from 'react';
import './ProjectContainer.css';
import { Container, Typography } from '@material-ui/core';
import Project from '../Project/Project';

const ProjectContainer = (props) => {

  let currentProjects = props.projects.map(project => {
    return <Project
      key={project.id}
      id={project.id}
      title={project.title}
      />
  })

  return (
    <Container maxWidth='lg'>
      <Typography>
        Current Projects:
      </Typography>
      {currentProjects}
    </Container>
  )
}

export default ProjectContainer;