import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import { LoginEmail } from '../state/atoms/auth/LoginEmail';
import { LoginPassword } from '../state/atoms/auth/LoginPassword';
import axios from 'axios';
import { backend_url } from '../BackendUrl';

const MyForm = () => {

    const [email, setEmail] = useRecoilState(LoginEmail);
    const [password, setPassword] = useRecoilState(LoginPassword);

    const handleLogin = async (e) => {
        e.preventDefault();

        const request = await axios.post(backend_url + '/login', {
            email: email,
            password: password
        });
        const response = await request.data;
        localStorage.setItem('ecomEmail', response.email);
    }

    return (
        <form>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="80vh">
            <Typography variant='h4'>Sign In</Typography>
            <TextField label="Email" variant="outlined" margin="normal" sx={{ width: '350px' }} onChange={e => setEmail(e.target.value)}/>
            <TextField label="Password" type="password" variant="outlined" margin="normal" sx={{ width: '350px' }} onChange={e => setPassword(e.target.value)}/>
            
            <Button type="submit" variant="contained" color="primary" sx={{ width: '150px', height: '50px', fontSize: '20px' }} onClick={handleLogin}>
            Submit
            </Button>
        </Box>
        </form>
    );
};

export default MyForm;
