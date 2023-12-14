import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image from '../images/download.jpg';
import { backend_url } from '../BackendUrl';
import { useSetRecoilState } from 'recoil';
import { CurrentProduct } from '../state/atoms/Product/CurrentProduct';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function RecipeReviewCard({publisher, name, date, description, product}) {

  const setCurrentProduct = useSetRecoilState(CurrentProduct);
  const navigate = useNavigate();

  const [inCart, setInCart] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const checkInCart = async () => {
    const request = await axios.post(backend_url + '/checkInCart', {
      token: localStorage.getItem('ecomEmail'),
      product: product
    })
    const result = await request.data;
    if (result.status === 200) {
      setInCart(true);
    } else {
      setInCart(false);
    }
    setLoading(false);
    return result;
  }

  useEffect(() => {
    checkInCart();
  }, [inCart])

  const handleClick = () => {
    localStorage.setItem('currentProduct', JSON.stringify(product));
    setCurrentProduct(product);
    navigate('/product')
  }

  const toggleCart = async () => {

    if (inCart) {
      const request = await axios.post(backend_url + '/removeFromCart', {
        token: localStorage.getItem('ecomEmail'),
        productName: name,
      })
      const result = await request.data;
      console.log(result);
      setInCart(false);
    } else {
      const request = await axios.post(backend_url + '/addToCart', {
        token: localStorage.getItem('ecomEmail'),
        productName: name,
      })
      const result = await request.data;
      console.log(result);
      setInCart(true);
    }
  }

  if (loading) return <></>;

  return (
    <Card sx={{ minWidth: 355, minHeight: 500, maxWidth: 355, backgroundColor: '#F0FFFF', borderRadius:'8px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {publisher[0].toUpperCase()} 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
        sx={{minHeight:280}}
        onClick={handleClick}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={toggleCart}>
          <FavoriteIcon sx={inCart ? {color:'red'} : {}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}