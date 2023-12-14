import React, { useEffect, useState } from 'react';

import Sidebar from '../ui/Sidebar';
import Card from '../ui/Card';
import { Box } from '@mui/system';

import axios from 'axios';
import { backend_url } from '../BackendUrl';
import { useRecoilState } from 'recoil';
import { AllProduct } from '../state/atoms/Product/AllProduct';

const Products = () => {


  const formatDate = (inputDate) => {
    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
  
    const date = new Date(inputDate);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    const formattedDate = `${month} ${day.toString().padStart(2, '0')}, ${year}`;
    return formattedDate;
  }

  const [allProducts, setAllProducts] = useRecoilState(AllProduct);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await axios.get(backend_url + '/getAllProducts');
      setAllProducts(products.data.products);
      setIsLoading(false);
    }
    getAllProducts();
  }, [setAllProducts]);

  const style = {
    display: 'flex',
  }

  if (isloading) return <>Loading...</>;

  return (
    <div style={style}>
      <Sidebar />
      <Box
      display="flex"
      flexWrap="wrap"
      marginLeft="20px"
      marginTop="20px"
      padding="10px"
    >

        {
          allProducts.map((e, index) => (
            <div style={{margin:"20px"}} key={index} >
              <Card name={e.name} brand={e.brand} date={formatDate(e.publishDate)} publisher={e.publisher} description={e.description} product={e}/>
            </div>
          ))
        }

    </Box>
    </div>
  )
}

export default Products;