import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import Box from '@mui/joy/Box';
import ShareIcon from '@mui/icons-material/Share';
import axios from 'axios';
import { backend_url } from '../BackendUrl';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function Buttons ({product, productName}) {

  const pay = async () => {
    const request = await axios.post(backend_url + '/buyItem', {
      token: localStorage.getItem('ecomEmail'),
      product: product,
      quantity: localStorage.getItem('count')
    })
    const response = await request.data;
    console.log(response);
    if (response.url) {
      window.location = response.url;
    }
  }

  const addToCart = async () => {
    const request = await axios.post(backend_url + '/addToCart', {
      token: localStorage.getItem('ecomEmail'),
      productName: productName,
    })
    const result = await request.data;
    console.log(result);
  }
  
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained" onClick={pay}>Buy Now</ColorButton>
      <BootstrapButton variant="contained" disableRipple onClick={addToCart}>
        Add To Cart
      </BootstrapButton>
      <Box>
        <ShareIcon sx={{ml:'150px', mt:'10px', border:'2px solid black', borderRadius:'50%', padding:'4px'}}/>
      </Box>
    </Stack>
  );
}