import React from 'react';
import ProductImages from '../ui/ProductImages';
import Box from '@mui/material/Box';
import bigImageURL from '../images/download.jpg';
import { useRecoilState} from 'recoil';
import { ImageToShowUrl } from '../state/atoms/Product/ImageToShow';
import ProductData from '../ui/ProductData';
import { Typography } from '@mui/material';
const SingleProduct = () => {

    const url = useRecoilState(ImageToShowUrl);

    return (
        <>
            <div style={{
                display:'flex',
            }}>
                <ProductImages />

                <Box width="30%" marginTop="125px" marginLeft="100px" height="475px" border="1px solid #ccc" borderRadius="5px" overflow="hidden">
                    <img src={url[0].length === 0 ? bigImageURL : url[0]} alt="product" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    
                </Box>

                <ProductData/>
            
            </div>
            <hr style={{
              display: 'inline-block',
              width: '40%',
              height: '2px',
              backgroundColor: 'black',  
              marginLeft: '160px',
            }}/>


            <Typography sx={{
                fontSize:'30px',
                textAlign:'center',
                marginTop:'15px'
            }}>Related Products</Typography>
            <hr style={{
                display:'inline-block',
                width: '7%',  
                marginLeft:'46%',
                height:'5px',
                background:'#f44336',
                border:'#f44336',
                borderRadius:'5px'
            }} />

            <Box sx={{
                display:'flex',
                justifyContent: 'space-around',
                mt: '20px',
                mb: '40px'
            }}>
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
            </Box>


        </>
  )
}

export default SingleProduct;