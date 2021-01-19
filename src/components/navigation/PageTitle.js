import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import { titleStyles } from './styles';

const PageTitle = ({ title }) => {
  const classes = titleStyles();

  return (
    <Box className={classes.root} py={5}>
      <Container fixed>
        <Typography variant='h4' component='h2'>
          {title}
        </Typography>
      </Container>
    </Box>
  );
};

export default PageTitle;
