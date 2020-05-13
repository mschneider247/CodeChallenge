import React from 'react';
import './Header.css';
import { Typography, Container } from '@material-ui/core';
import Search from '../Search/Search';

const Header = () => {

  return (
    <Container maxWidth="lg" id="header">
      <Typography variant="h2">
        Todo it!
      </Typography>
      <Search />
    </Container>
  )
}

export default Header;
