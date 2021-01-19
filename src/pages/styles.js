import { makeStyles } from '@material-ui/core';

export const cartStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  priceContainer: {
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    padding: theme.spacing(2),
    marginTop: theme.spacing(7),
  },
  price: {
    borderBottom: '1px solid #e0e0e0',
    marginBottom: theme.spacing(1),
    '&>div': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(1),
    },
  },
  payments: {
    textAlign: 'center',
    paddingTop: theme.spacing(0.5),
  },
  btnContainer: {
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'space-between',
  },
  policy: {
    marginTop: theme.spacing(4),
    backgroundColor: '#eee',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  emptyRoot: {
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&>div': {
      textAlign: 'center',
    },
  },
  icon: {
    fontSize: '10em',
  },
}));

export const productStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
}));

export const homeStyles = makeStyles((theme) => ({
  root: {
    background: '#E8CBC0',
    background: '-webkit-linear-gradient(to right, #636FA4, #E8CBC0)',
    background: 'linear-gradient(to right, #636FA4, #E8CBC0)',
    padding: '10% 0%',
  },
  productRoot: {
    paddingTop: theme.spacing(5),
  },
  productTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
}));
