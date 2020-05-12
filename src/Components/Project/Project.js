import React from 'react';
import './Project.css';
import { Container, Typography } from '@material-ui/core';

const Project = (props) => {
  return (
    <Container maxWidth='xs' className="project">
      <Typography>
        {props.title}
      </Typography>
      {props.urgency}
    </Container>
  )
}

export default Project;