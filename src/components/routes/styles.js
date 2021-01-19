import { makeStyles } from '@material-ui/core';

export const unauthorizeStyles = makeStyles((theme) => ({
  root: {
    minHeight: '75vh',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& h2': {
      marginBottom: theme.spacing(1),
    },
    '& p': {
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& a': {
      marginTop: theme.spacing(2),
      borderRadius: '100em',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
}));
