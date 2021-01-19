import { makeStyles } from '@material-ui/core';

export const headerStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  media: {
    maxWidth: '180px',
    objectFit: 'cover',
  },
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& a': {
      marginLeft: theme.spacing(3),
    },
  },
}));

export const footerStyles = makeStyles((theme) => ({
  navList: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    '& a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      transtion: 'all 0.3s',
      fontSize: '1.1em',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    '& li': {
      marginTop: '0.25em',
      marginBottom: '0.25em',
      '& a': {
        display: 'flex',
      },
    },
  },
}));

export const titleStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
  },
}));
