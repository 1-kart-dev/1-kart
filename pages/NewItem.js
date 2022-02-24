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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './NewItem.module.scss';

export default function NewItem() {
    return (
        <div className={styles.backgorund}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add item to Kart
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="item_name"
              label="Item Name"
              name="item_name"
              autoComplete="item_name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="item_price"
              label="Item Price"
              name="item_price"
              autoComplete="item_price"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="item_desc"
              label="Item Description"
              name="item_desc"
              autoComplete="item_desc"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="item_qty"
              label="Quantity"
              name="item_qty"
              autoComplete="item_qty"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add to Kart
            </Button>
          </Box>
        </Box>
        </div>
    );
}