import React from 'react';
import './ProjectContainer.css';
import { Container, Typography } from '@material-ui/core';
import Project from '../Project/Project';

const ProjectContainer = (props) => {

  let projects;

  return (
    <Container maxWidth='lg'>
      <Typography>
        This is the Project Container
        <Project />
      </Typography>
    </Container>
  )
}

export default ProjectContainer;