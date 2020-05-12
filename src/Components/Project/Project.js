import React from 'react';
import './Project.css';
import { Container, Typography, Button } from '@material-ui/core';

const Project = (props) => {
  return (
    <Container maxWidth='lg' className="project">
      <Typography>
        {props.title}
        <Button id="deleteBtn">
            X
        </Button>
      </Typography>
    </Container>
  )
}

export default Project;