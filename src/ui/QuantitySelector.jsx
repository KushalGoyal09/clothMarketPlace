import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ColorToggleButton() {

  const [count, setCount] = useState(1);
  localStorage.setItem('count', count);

  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      aria-label="Platform"
      value={count}
    >
      <ToggleButton onClick={() => setCount(count-1)}><RemoveIcon /></ToggleButton>
      <ToggleButton >{count}</ToggleButton>
      <ToggleButton onClick={() => setCount(count+1)}><AddIcon /></ToggleButton>
    </ToggleButtonGroup>
  );
}