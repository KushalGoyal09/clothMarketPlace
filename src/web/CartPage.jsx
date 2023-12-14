import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import img from '../images/download.jpg';
import axios from 'axios';
import { backend_url } from '../BackendUrl';

const CartPage = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getCartItems = async () => {
    const headers = {token:localStorage.getItem('ecomEmail')};
    const request = await axios.get(backend_url + '/getAllCart', {headers});
    const result = await request.data;
    console.log(result);
    setProducts(result.products);
    setLoading(false);
  }

  useEffect(() => {
    getCartItems();
  }, [])

  const removeFromCart = async (name) => {
    const request = await axios.post(backend_url + '/removeFromCart', {
      token: localStorage.getItem('ecomEmail'),
      productName: name,
    })
    const result = await request.data;
    console.log(result);
    getCartItems();
  }

  if (loading) return <></>;

  return (
    <Box>

      {
        products.map((product, index) => (
          <Box sx={{marginTop:'5vh', width:'65vw', mx:'auto'}} key={index}>
            <hr />
            <Box sx={{display:'flex', flexWrap:'wrap'}}>
                <Box>
                  <img src={img} alt="product" style={{marginLeft:'20px', borderRadius:'5px'}}/>
                </Box>
                <Box sx={{marginLeft:'20px'}}>
                  <Typography variant="h4" sx={{marginTop:'10px'}}>{product.name}</Typography>
                  <Typography>Description of the product will come here dynamically from the backend request that will be sent from this page Lorem fgkgk</Typography>
                  <Typography>Description of the product will come here dynamically from the backend request that will be sent from this page Lorem fgkgk</Typography>
                  <Typography>Description of the product will come </Typography>
                  <Stack direction="row" spacing={2} sx={{marginTop:'10px'}}>
                    <Button variant="contained">Buy Now</Button>
                    <Button variant="contained" onClick={() => removeFromCart(product.name)}>Remove From Cart</Button>
                  </Stack>
                </Box>
            </Box>
            <hr />
          </Box>
        ))
      }

    </Box>
  )
}

export default CartPage;