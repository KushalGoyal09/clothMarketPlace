import React from 'react';
import axios from 'axios'
import {TextField, Button, Box, Typography} from '@mui/material';
import { useRecoilState } from 'recoil';
import { signupEmail } from '../state/atoms/auth/SignupEmail';
import { signupPassword } from '../state/atoms/auth/SignupPassword';
import { signupusername } from '../state/atoms/auth/SignupUsername';
import { backend_url } from '../BackendUrl';

const MyForm = () => {

    const [email, setEmail] = useRecoilState(signupEmail);
    const [username, setUsername] = useRecoilState(signupusername);
    const [password, setPassword] = useRecoilState(signupPassword);

    const handleSignup = async (e) => {
        e.preventDefault();
        const signupdata = {
            email: email,
            username: username,
            password: password
        };
        const request = await axios.post(backend_url + '/signup', signupdata);
        const response = await request.data;
        console.log(response);
    }

    return (
        <form>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="80vh">
                <Typography variant='h4'>Sign Up</Typography>
                <TextField label="Userame" variant="outlined" margin="normal" sx={{ width: '350px' }} onChange={(e) => setUsername(e.target.value)}/>
                <TextField label="Email" variant="outlined" margin="normal" sx={{ width: '350px' }} onChange={e => setEmail(e.target.value)}/>
                <TextField label="Password" type="password" variant="outlined" margin="normal" sx={{ width: '350px' }} onChange={e => setPassword(e.target.value)}/>
                
                <Button type="submit" variant="contained" color="primary" sx={{ width: '150px', height: '50px', fontSize: '20px' }} onClick={handleSignup}>
                Submit
                </Button>
            </Box>
        </form>
    );
};

export default MyForm;
