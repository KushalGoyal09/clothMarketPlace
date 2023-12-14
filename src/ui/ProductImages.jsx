import React from 'react';
import Box from '@mui/material/Box';

import image from '../images/download.jpg';
import { useRecoilState } from 'recoil';
import { ImageToShow, ImageToShowUrl } from '../state/atoms/Product/ImageToShow';

const ProductImages = () => {
  const productImages = [image, image, image, image, image];
  const [selectedImage, setSelectedImage] = useRecoilState(ImageToShow);
  const [selectedImageUrl, setSelectedImageUrl] = useRecoilState(ImageToShowUrl);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    console.log(selectedImageUrl);
    setSelectedImageUrl(productImages[index]);
  }

  return (
    <Box width="7%" display="flex" flexDirection="column" marginTop="100px" marginLeft="50px">
      {productImages.map((imageUrl, index) => (
        <Box key={index} marginBottom="10px" border={index === selectedImage ? '2px solid black' : ''} onClick={() => handleImageClick(index)}>
          <img src={imageUrl} alt={`Product Angle ${index + 1}`} style={{ width: '100%', borderRadius: '5px' }} />
        </Box>
      ))}
    </Box>
  );
};

export default ProductImages;
