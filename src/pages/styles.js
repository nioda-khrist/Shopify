import { makeStyles } from '@material-ui/core';

<<<<<<< HEAD
export const userStyles = makeStyles((theme) => ({
  userHeader: {
    width: '100%',
    height: '200px',
    backgroundColor: '#3aaf9f',
  },
}));

export const signinStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    height: '500px',
  },
  leftContainer: {
    backgroundColor: '#3aaf9f',
    borderRadius: '10px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    color: '#fff',
    '& h2': {
      fontWeight: '600',
    },
    '& p': {
      fontWeight: '300',
    },
  },
  rightContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    padding: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '&>div': {
      maxWidth: '400px',
    },
    '& h1': {
      color: '#3bad96',
      fontWeight: '500',
    },
    '& p': {
      fontWeight: '300',
    },
  },
}));

export const settingStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    textAlign: 'center',
  },
  title: {
    color: '#3bad96',
    fontWeight: '500',
=======
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
>>>>>>> temporary
  },
}));
