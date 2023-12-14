import React from 'react';
import Slider from '@mui/material/Slider';
import { useSetRecoilState } from 'recoil';

const PriceSlider = ({sliderSelector}) => {

  const setValue = useSetRecoilState(sliderSelector);

  return (
    <>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={(e, newValue) => setValue(newValue)} />
    </>
  )
}

export default PriceSlider;