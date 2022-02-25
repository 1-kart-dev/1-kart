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
import axios from 'axios';
import Router from "next/router";
import { useAuth } from '../lib/auth';
import { useState, useEffect } from 'react';
import { Route } from '@mui/icons-material';

export default function NewItem() {
    const [newItem, setNewItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { authUser, loading } = useAuth();
    const [kart_id, setKartId] = useState('');

    useEffect(async () =>{
      if(authUser) {
        const uid = authUser.uid;
        const mainKart = await axios.get(`/api/users/getMainKart/${uid}`)
        setKartId(mainKart.data.kart_id);
      }
    }, [authUser, loading ])

    const handleSubmit = async (e) => {
      if(authUser) {
        const res = await axios.post('/api/item', newItem);
        const item_id = res.data.id;
        await axios.put('/api/kart/addRemoveKartItem', {
          kart_id: kart_id,
          item_id: item_id,
          item_quantity: quantity,
        })
        Router.push("/Kart");
      }
    }

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
              value = {newItem.item_name}
              onInput={(e) => setNewItem({...newItem, item_name: e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="item_price"
              label="Item Price"
              name="item_price"
              autoComplete="item_price"
              type="number"
              autoFocus
              value = {newItem.price}
              onInput={(e) => setNewItem({...newItem, price: e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="item_desc"
              label="Size"
              name="item_desc"
              autoComplete="item_desc"
              autoFocus
              value = {newItem.size}
              onInput={(e) => setNewItem({...newItem, size: e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="item_qty"
              label="Quantity"
              name="item_qty"
              autoComplete="item_qty"
              type="number"
              value={quantity}
              onInput={(e) => setQuantity(e.target.value)}
              autoFocus
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => handleSubmit(e)}
            >
              Add to Kart
            </Button>
          </Box>
        </Box>
        </div>
    );
}