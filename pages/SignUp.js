import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from '../styles/Login.module.scss';
import Router from 'next/router'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        1-Kart
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    var first = JSON.stringify(data.get('firstName'));
    var last = JSON.stringify(data.get('lastName'));
    var password = JSON.stringify(data.get('password'));
    var email = JSON.stringify(data.get('email'));
  var len = password.length;
  if (len < 8) {
      window.alert("Password must be at least 8 characters long.");
      return;
  }
  var noCap = true;
  var noUnd = true;
  var noSpec = true;
  for (var i = 0; i < len; i++) {
      var charCode = password.charCodeAt(i);
      if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
          noCap = false;
      } else if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) {
          noUnd = false;
      } else if (charCode >= '!'.charCodeAt(0) && charCode <= '/'.charCodeAt(0)) {
          noSpec = false;
      } else if (charCode >= ':'.charCodeAt(0) && charCode <= '@'.charCodeAt(0)) {
          noSpec = false;
      } else if (charCode >= '['.charCodeAt(0) && charCode <= '`'.charCodeAt(0)) {
          noSpec = false;
      }
  }
  if (noCap) {
      if (noUnd) {
          if (noSpec) {
              window.alert("Password must contain an uppercase letter, a lowercase letter, and a special character.");
              return;
          }
          window.alert("Password must contain an uppercase letter and a lowercase letter.");
          return;
      }
      if (noSpec) {
          window.alert("Password must contain an uppercase letter and a special character.");
          return;
      }
      window.alert("Password must contain an uppercase letter.");
      return;
  }
  if (noUnd) {
      if (noSpec) {
          window.alert("Password must contain a lowercase letter and a special character.");
          return;
      }
      window.alert("Password must contain a lowercase letter.");
      return;
  }
  if (noSpec) {
      window.alert("Password must contain a special character.");
      return;
  }

  var id = Date.now();
  const response = await fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({first, last, email, password, id}),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  const res = await response.json();
  if (res.message === "Fail") {
      window.alert("User already exists");
  } else {
      Router.push('/Kart');
      console.log("hey");
  }
}

  return (
    <div className={styles.background}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '-6',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#c9e4f5' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I wanna keep up with 1Kart, send me emails!"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </div>
  );
}