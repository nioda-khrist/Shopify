import { makeStyles } from '@material-ui/core';

export const SignUpStyle = makeStyles((theme) => ({
  btn: {
    border: '1px solid #fff',
    borderRadius: '100em',
    maxWidth: '200px',
    padding: theme.spacing(1.5),
    color: '#fff',
    marginTop: theme.spacing(2),
  },
  title: {
    color: '#3bad96',
    textAlign: 'center',
    '& h2': {
      fontSize: '2em',
    },
  },
  content: {
    padding: theme.spacing(3),
    paddingTop: '0px',
    textAlign: 'center',
  },
  form: {
    maxWidth: '350px',
    margin: 'auto',
  },
  btnContainer: {
    marginTop: theme.spacing(1.5),
    '& button': {
      marginLeft: '5px',
      marginRight: '5px',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  error: {
    color: theme.palette.error.main,
  },
}));

export const SignInStyle = makeStyles((theme) => ({
  btn: {
    borderRadius: '100em',
    maxWidth: '200px',
    padding: `${theme.spacing(1)}px ${theme.spacing(5)}px`,
    color: '#fff',
    marginTop: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  error: {
    color: theme.palette.error.main,
  },
}));
