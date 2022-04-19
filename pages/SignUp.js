import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from '../styles/Login.module.scss';
import Router from 'next/router'
import {useState} from 'react';
import { createUser } from '../lib/auth'
import PasswordStrengthBar from 'react-password-strength-bar';
import {styled} from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& input': {
    color: 'white',
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

var errorMsg = "hey";
export function handleErrors2(message) {
  errorMsg = message;
  if (errorMsg == "auth/invalid-email") {
    errorMsg = "Please Use A Valid Email";
  }
  if (errorMsg == "auth/email-already-exists") {
    errorMsg = "An Account With This Email Already Exists";
  }
  if (errorMsg == "auth/invalid-password") {
    errorMsg = "Password Must be 6 Characters Long";
  }
}

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    
    function onClick() {
        if (password != confirm) {
          setErrorMessage("Passwords must match")
        } else if (errorMsg != "hey") {
          setErrorMessage(errorMsg);
        } else {
          createUser(email, password).then(authUser => {
            routeChange();
          });
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
          <Avatar sx={{ m: 1, bgcolor: '#a2d6ef' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CssTextField
                  className={styles.textField}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onInput={e => setEmail(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onInput={e => setPassword(e.target.value)}
                />
                <PasswordStrengthBar password={password} />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  name="confirm"
                  label="Confirm Password"
                  type="password"
                  value={confirm}
                  onInput={e => setConfirm(e.target.value)}
                />
              </Grid>
              {errorMessage && <div className={styles.errorMsg}> {errorMessage} </div>}
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#a2d6ef"}}
              onClick={onClick}
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