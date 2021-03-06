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
import {useState} from 'react'
import {signIn} from '../lib/auth'
import Router from 'next/router'
import {styled} from '@mui/material/styles'

const CssTextField = styled(TextField)({
  '& input': {
    color: 'white',
  },
  '& input:-webkit-autofill': {
    transition: "background-color 50000s ease-in-out 0s, color 5000s ease-in-out 0s",
  },
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: '#a2d6ef',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#a2d6ef',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a2d6ef',
    },
  },
});

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

function routeChange() {
  Router.push('/Kart');
}

var errorMessage = "hey";
export function handleErrors(message) {
  errorMessage = message;
  if (errorMessage == "auth/wrong-password") {
    errorMessage = "Wrong Password";
  }
  if (errorMessage == "auth/user-not-found") {
    errorMessage = "Email Address Not Found";
  }
  if (errorMessage == "auth/invalid-email") {
    errorMessage = "Please Use A Valid Email";
  }
  if (errorMessage == "auth/invalid-email-verified") {
    errorMessage = "Please Verify Your Email in Your Inbox";
  }
}

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState('');

  async function onClick() {
    const user = await signIn(email, password);
    if (user) {
      routeChange();
    } else {
      setDisplayError(errorMessage);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
  };

  return (
      <div className={styles.background}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '-4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#c9e4f5' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onInput={e => setEmail(e.target.value)}
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onInput={e => setPassword(e.target.value)}
            />
            {displayError && <div className={styles.errorMsg}> {displayError} </div>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={onClick}
              sx={{ mt: 3, mb: 2, background: "#a2d6ef" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/PasswordReset" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </div>
  );
};