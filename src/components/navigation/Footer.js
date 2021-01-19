import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { footerStyles } from './styles';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const classes = footerStyles();
  let location = useLocation();

  return location.pathname === '/unauthorized' ? null : (
    <Box component='section' borderTop={1} py={2} borderColor='grey.300' mt={5}>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography variant='h6' style={{ marginBottom: '0.5em' }}>
              Brands
            </Typography>
            <ul className={`footer-link ${classes.navList}`}>
              <li>
                <Link to='/'>Adidas</Link>
              </li>
              <li>
                <Link to='/'>Puma</Link>
              </li>
              <li>
                <Link to='/'>Reebok</Link>
              </li>
              <li>
                <Link to='/'>Nike</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs>
            <Typography variant='h6' style={{ marginBottom: '0.75em' }}>
              Company
            </Typography>
            <ul className={`footer-link ${classes.navList}`}>
              <li>
                <Link to='/'>About us</Link>
              </li>
              <li>
                <Link to='/'>Career</Link>
              </li>
              <li>
                <Link to='/'>Find a store</Link>
              </li>
              <li>
                <Link to='/'>Rules and terms</Link>
              </li>
              <li>
                <Link to='/'>Sitemap</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs>
            <Typography variant='h6' style={{ marginBottom: '0.75em' }}>
              Help
            </Typography>
            <ul className={`footer-link ${classes.navList}`}>
              <li>
                <Link to='/'>Contact us</Link>
              </li>
              <li>
                <Link to='/'>Money refund</Link>
              </li>
              <li>
                <Link to='/'>Order status</Link>
              </li>
              <li>
                <Link to='/'>Shipping info</Link>
              </li>
              <li>
                <Link to='/'>Open dispute</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs>
            <Typography variant='h6' style={{ marginBottom: '0.75em' }}>
              Account
            </Typography>
            <ul className={`footer-link ${classes.navList}`}>
              <li>
                <Link to='/'>User Login</Link>
              </li>
              <li>
                <Link to='/'>User register</Link>
              </li>
              <li>
                <Link to='/'>Account Setting</Link>
              </li>
              <li>
                <Link to='/'>My Orders</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs>
            <Typography variant='h6' style={{ marginBottom: '0.75em' }}>
              Social
            </Typography>
            <ul className={`footer-link ${classes.navList}`}>
              <li>
                <Link
                  to={{ pathname: 'http://www.facebook.com' }}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FacebookIcon
                    fontSize='small'
                    style={{ marginRight: '4px' }}
                  />{' '}
                  Facebook
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <TwitterIcon
                    fontSize='small'
                    style={{ marginRight: '4px' }}
                  />
                  Twitter
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <InstagramIcon
                    fontSize='small'
                    style={{ marginRight: '4px' }}
                  />
                  Instagram
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <YouTubeIcon
                    fontSize='small'
                    style={{ marginRight: '4px' }}
                  />
                  Youtube
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Box pt={2} borderTop={1} borderColor='grey.300' marginTop={5}>
              <Typography variant='body2'>&copy; 2020 Company Name</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
