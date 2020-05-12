import React from 'react';
import './Project.css';
import { Container, Typography, Button } from '@material-ui/core';

const Project = (props) => {
  return (
    <Container maxWidth='lg' className="project">
      <Typography display="inline">
        {props.title}
        <Button 
          id="deleteBtn"
          onClick={() => props.deleteProject(props.id)}>
            X
        </Button>
      </Typography>
    </Container>
  )
}

export default Project;