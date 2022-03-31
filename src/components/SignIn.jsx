import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { setUsername } from '../userSlice';

const backgroundImage = 'https://images.unsplash.com/photo-1643327105903-107ab093a1e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'

function SignIn() {
  const navigate = useNavigate();
  const [userVal, setUserVal] = useState('');
  const [passVal, setPassVal] = useState('');
  const dispatch = useDispatch();

  const handleUsername = (event) => {
    setUserVal(event.target.value);
  }

  const handlePassword = (event) => {
    setPassVal(event.target.value);
  }

  const handleClick = () => {
    if (userVal !== '' && passVal !== '') {
        dispatch(setUsername(userVal));
        navigate("/nav")
    }
  }
  return (
    <Box>
        <Grid container sx={{ height: "100vh" }}>
            <Grid item xs={12} sm={8} md={5} sx={{bgcolor: "#fbdce4" }}>
                <Box
                    sx={{
                        my: 8,
                        textAlign: "center",
                        display: "flex",
                        flexFlow: "column wrap",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    <Typography variant="h2">Logo</Typography>
                    <br/>
                    <Paper elevation={3}
                        sx={{
                            bgcolor: "#fff",
                            textAlign: "center",
                            p: 2,
                            display: "flex",
                            flexFlow: "column wrap",
                            alignItems: "center",
                            gap: "20px",    
                        }}
                    >
                        <TextField
                            id="username"
                            label="Username"
                            value={userVal}
                            onChange={handleUsername}
                            sx={{ width: "330px" }}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            value={passVal}
                            onChange={handlePassword}
                            sx={{ width: "330px" }}
                        />
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            sx={{ width: "330px" }}
                        >
                            Log In
                        </Button>
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={false} sm={4} md={7}
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            />
        </Grid>
    </Box>
);
}

export default SignIn;
