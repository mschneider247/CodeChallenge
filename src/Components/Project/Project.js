import React from 'react';
import './Project.css';
import { Container, Typography, Button } from '@material-ui/core';
import Edit from '../Edit/Edit';

const Project = (props) => {
  return (
    <Container maxWidth='lg' className="project" key={props.id}>
      <Typography 
        display="inline"
        onClick={() => props.editProject(props.id)}>
        {props.title}
      </Typography>
      {props.edit ? <Edit id={props.id} inputNewTitle={props.inputNewTitle}/> : null}
      <Button 
        id="deleteBtn"
        onClick={() => props.deleteProject(props.id)}>
          X
      </Button>
    </Container>
  )
}

export default Project;