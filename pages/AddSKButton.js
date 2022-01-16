import React from 'react'
import styles from '../styles/Home.module.scss';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const AddSKButton = () => {
    return <Button 
            variant="contained" 
            startIcon={<AddIcon />}>
                Create SubKart
            </Button>
}

export default AddSKButton;