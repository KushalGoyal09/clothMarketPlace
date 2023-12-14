import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FilterIcon from '@mui/icons-material/Filter';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';  
import PriceSlider from './PriceSlider';
import Chip from './Chip';
import ColorSelector from './ColorSelector';
import { Slider1, Slider2 } from '../state/atoms/Filters/Slider';
import DropDown from './DropDown';
import { DropDownTags } from '../state/atoms/Filters/DropDownTags';
import { useRecoilValue } from 'recoil';

const Sidebar = () => {

    const options = ['name', 'bmaei', 'ciffg', 'disee', 'sifgf'];
    const selectedOptions = useRecoilValue(DropDownTags);
 
    return (
        <List
        sx={{
            width: 350, 
            backgroundColor: '#F0FFFF',
            borderRight: '1px solid', 
            borderColor: 'divider', 
            height: '80vh',
            color: '#1976d2', 
            marginLeft: 8, 
            marginTop: 8, 
            borderRadius: 2,
        }}
        >
        <ListItem>
            <IconButton><CurrencyRupeeIcon /></IconButton>
            <ListItemText primary='Price Range'/>
        </ListItem>
        <ListItem><ListItemText primary='From'/></ListItem>
        <ListItem>
                <PriceSlider sliderSelector={Slider1} />
        </ListItem>
        <ListItem><ListItemText primary='To'/></ListItem>
        <ListItem>
                <PriceSlider sliderSelector={Slider2}/>
        </ListItem>
        <ListItem>
            <IconButton><FilterIcon /></IconButton>
            <Typography sx={{fontSize:'20px', mx:'4'}}>Brands</Typography>
        </ListItem>
        <ListItem>
            <DropDown options={options} state={DropDownTags} label="Select Categories"/>
        </ListItem>
        <ListItem>
            <Typography>Selected Options</Typography>
        </ListItem>
        <ListItem><Chip chipData={selectedOptions} state={DropDownTags}/></ListItem>
        <ListItem>
            <ColorSelector />
        </ListItem>
        </List>
    );
};

export default Sidebar;
