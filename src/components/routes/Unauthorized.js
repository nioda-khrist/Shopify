import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { unauthorizeStyles } from './styles';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  const classes = unauthorizeStyles();

  return (
    <Container fixed className={classes.root}>
      <div>
        <Typography variant='h1' component='h2'>
          Oops!
        </Typography>
        <Typography variant='h4' component='h6' gutterBottom>
          404 - NOTHING WAS FOUND
        </Typography>
        <Typography variant='body2' component='p' gutterBottom>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </Typography>
        <Button variant='contained' color='primary' component={Link} to='/'>
          Go To Homepage
        </Button>
      </div>
    </Container>
  );
};

export default Unauthorized;
