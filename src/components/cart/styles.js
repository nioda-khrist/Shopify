import { makeStyles } from '@material-ui/core';

export const cartStyles = makeStyles((theme) => ({
  productItem: {
    display: 'flex',
    maxWidth: '400px',
    '&>div:first-child': {
      paddingRight: theme.spacing(2),
    },
    '& img': {
      maxWidth: '75px',
      objectFit: 'cover',
    },
  },
  productQty: {
    display: 'flex',
    alignItems: 'center',
    '&>*': {
      border: '1px solid #e0e0e0',
      borderRadius: '0px',
    },
    '&>span': {
      width: '26px',
      height: '26px',
      display: 'inline-block',
      padding: '3px',
      borderLeft: 'none',
      borderRight: 'none',
    },
  },
}));
