import { Typography } from '@mui/material';
import React from 'react';
import RatingStar from './RatingStar';
import ColorSelector from './ColorSelector';
import { Box } from '@mui/system';
import QuantitySelector from './QuantitySelector';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Buttons from './Buttons';

const ProductData = () => {

    const product = JSON.parse(localStorage.getItem('currentProduct')); 

    const style = {
        marginTop:'20px',
        fontSize: '24px',
        width: '500px',
        marginLeft: '50px',
        fontWeight: 'bolder',
        color: '#2196F3',
    }

    return (
        <div display='flex' style={{marginTop:'10vh'}}>
            <Typography style={style}>{product.name}</Typography>
            <RatingStar/>
            <Box sx={{marginLeft:'40px', marginTop: '10px'}}><ColorSelector /></Box>
            <Box sx={{marginLeft:'50px', marginTop: '20px'}}>
                <Typography>Quantity</Typography>
                <QuantitySelector />
            </Box>
            <Box sx={{marginLeft:'50px', marginTop:'10px', display:'flex', alignItems:'center'}}>
                <CurrencyRupeeIcon sx={{color:'red'}}/>
                <Typography sx={{fontSize:'20px', color:'#f44336'}}>Price: {product.price}</Typography>
            </Box>
            <Box sx={{marginLeft:'50px', marginTop:'10px'}}>
                <Buttons product={product} productName={product.name}/>
            </Box>
        </div>
    )
}

export default ProductData