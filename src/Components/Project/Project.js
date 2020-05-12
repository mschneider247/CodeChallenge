import React from 'react';
import './Project.css';
import { Container, Typography } from '@material-ui/core';

const Project = (props) => {
  return (
    <Container maxWidth='xs'>
      <Typography variant='p'>
        {props.title}
      </Typography>
    </Container>
  )
}

export default Project;