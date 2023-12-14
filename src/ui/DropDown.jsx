import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRecoilState } from 'recoil';

const DropDown = ({options, state, label}) => {

    const [value, setValue] = useRecoilState(state);

    const handleOnchange = (e, newValue) => {
        if (newValue in value) return;
        setValue([...value, newValue]);
    }

    return (
        <Autocomplete
            id="grouped-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={label} />}
            onChange={handleOnchange}
        />
    );
}

export default DropDown;