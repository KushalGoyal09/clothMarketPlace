import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import { backend_url } from '../BackendUrl';

import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import DropDown from '../ui/DropDown';
import { ProductTags } from '../state/atoms/Product/ProductTags';
import Chip from '../ui/Chip';
import { images } from '../state/atoms/Product/images';

const AddProduct = () => {
    
    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [color, setColor] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [sizeState, setSize] = useState();
    const [image, setImage] = useRecoilState(images);
    const tagsState = useRecoilValue(ProductTags);
    
    const currentUser = localStorage.getItem('ecomEmail');

    useEffect(() => {
        console.log(image);
    }, [image])

    const ProductData = {
        name: name,
        brand: brand,
        color: color,
        token: currentUser,
        price: price,
        description: description,
        tags: tagsState,
        images: images,
        size: sizeState
    }

    const addProduct = async () => {
        const request = await axios.post(backend_url + '/addNewProduct', ProductData);
        const response = await request.data;
        console.log(response);
        setBrand(''); setColor(''); setName(''); setPrice(''); setDescription(''); setSize('');
    }

    const textStyle = {
        margin: '10px',
        fontSize: '15px',
        minWidth: '20vw'
    }

    const boxStyle = {
        display: 'flex',
        alignItems: 'center'
    }

    const typoStyle = {
        fontSize: '25px',
        margin: '10px',
        fontWeight: 'bolder',
        color: 'secondary',
    }

    return (
        <>
            <Typography sx={{
                fontSize: '30px',
                margin: '10px',
            }}>Add New Product</Typography>

            <Box sx={boxStyle}>
                <Typography sx={typoStyle}>Name</Typography>
                <TextField id="outlined-basic" label="Name" color="secondary" sx={textStyle} variant="outlined" onChange={e => setName(e.target.value)}/>
            </Box>
            <Box sx={boxStyle}>
                <Typography sx={typoStyle}>Brand</Typography>
                <TextField id="outlined-basic" label="Brand" color="secondary" sx={textStyle} variant="outlined" onChange={e => setBrand(e.target.value)}/>
            </Box>
            <Box sx={boxStyle}>
                <Typography sx={typoStyle}>Color</Typography>
                <Autocomplete id="free-solo-demo" freeSolo 
                options={colors.map((option) => option)}
                renderInput={(params) => <TextField {...params} label="Color" />}
                sx={{minWidth:'20vw', margin:'10px'}}
                onChange={(e, newValue) => setColor(newValue)}
                />
            </Box>
            <Box sx={boxStyle}>
                <Typography sx={typoStyle}>Price(₹)</Typography>
                <TextField id="outlined-basic" label="Price" color="secondary" sx={textStyle} variant="outlined" onChange={e => setPrice(e.target.value)}/>
            </Box>
            <Box sx={boxStyle}>
                <Typography sx={typoStyle}>Description</Typography>
                <TextField id="outlined-basic" label="Description" color="secondary" sx={textStyle} variant="outlined" onChange={e => setDescription(e.target.value)}/>
            </Box>
            <Box sx={boxStyle}>
                <Typography sx={typoStyle}>Size</Typography>
                <Autocomplete id="free-solo-demo" freeSolo 
                options={size.map((option) => option)}
                onChange={(e, newValue) => setSize(newValue)}
                renderInput={(params) => <TextField {...params} label="Size" />}
                sx={{minWidth:'20vw', margin:'10px'}}
                />
            </Box>
            <Box sx={boxStyle}>
                <Typography sx={typoStyle}>Tags</Typography>
                <DropDown options={tags} state={ProductTags} label="Select More tags for better recommendatoin"/>
            </Box>
            <Box sx={boxStyle}>
                <Chip chipData={tagsState} state={ProductTags}/>
            </Box>
            <Box sx={boxStyle}>
                <Typography sx={typoStyle}>Select Image</Typography>
                <TextField id="outlined-basic" label="Images" color="secondary" sx={textStyle} variant="outlined" type="file" onChange={e => setImage([...image, e.target.files[0]])}/>
            </Box>
            <Button color="secondary" sx={{margin:'10px', fontSize:'25px', backgroundColor:'#9c27b0', color:'white'}} onClick={addProduct}>Add Product</Button>
        </>
    )
}

const colors = ['red', 'green', 'yellow', 'blue', 'orange'];
const size = ['xl', 'l', 's', 'm', 'xs'];
const tags = [
    "Casual", "Formal", "Partywear", "Ethnic", "Athleisure",
    "Sportswear", "Winterwear", "Summerwear", "Workout", "Trendy",
    "Vintage", "Boho", "Streetwear", "Festival", "Beachwear",
    "Kids", "Accessories", "Footwear", "Dresses", "Jeans",
    "Pants", "Skirts", "Hoodies", "T-shirts", "Sarees",
    "Kurtas", "Lehengas", "Socks", "Bags", "Scarves",
    "Watches", "Sunglasses", "Sandals", "Sneakers", "Heels",
    "Boots", "Flip Flops"
  ];
  

export default AddProduct;