import { makeStyles } from '@material-ui/core';

export const itemStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    transition: 'all 0.4s',
    '&:hover': {
      boxShadow: '0 4px 15px rgba(153, 153, 153, 0.3)',
    },
  },
  media: {
    width: '100%',
    maxWidth: '100%',
    height: '220px',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '175px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100px',
    },
  },
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
}));

export const singleStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  media: {
    width: '100%',
    maxWidth: '100%',
    objectFit: 'cover',
  },
  imageItemContainer: {
    marginTop: theme.spacing(1),
    '& > div > div': {
      padding: '5px',
      cursor: 'pointer',
    },
  },
  select: {
    minWidth: '150px',
  },
  btnContainer: {
    marginTop: theme.spacing(2),
    '& button': {
      marginRight: theme.spacing(1.5),
    },
  },
}));

export const productStyles = makeStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));
