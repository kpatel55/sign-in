import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled, alpha } from '@mui/material/styles';
import { Avatar, Button, Tooltip, Typography } from "@mui/material";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

const screens = ["About", "Blog", "Contact"];
const acountScreens = ["Profile", "Account", "Logout"]

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
}));
  
function Nav() {
    const username = useSelector((state) => state.user.value);
    const [anchorNav, setAnchorNav] = useState(null)
    const [anchorUser, setAnchorUser] = useState(null)

    const handleNavOpen = (event) => {
        setAnchorNav(event.currentTarget);
    }

    const handleNavClose = () => {
        setAnchorNav(null);
    }

    const handleUserOpen = (event) => {
        setAnchorUser(event.currentTarget);
    }

    const handleUserClose = () => {
        setAnchorUser(null);
    }

    return (
        <AppBar position="fixed">
            <Container maxWidth="l">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu-item"
                        sx={{ mr: 0, display: { xs: "none", md: "flex" } }}
                    >
                        Logo
                    </IconButton>
                    <Box sx={{ flexGrow: 0, display: {xs: "flex", md: "none"} }}>
                        <IconButton
                            size="large"
                            aria-label="user account menu"
                            aria-controls="user-menu"
                            aria-haspopup="true"
                            onClick={handleNavOpen}
                            color="inherit"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                        <Menu
                            id="menu-bar"
                            anchorEl={anchorNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorNav)}
                            onClose={handleNavClose}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {screens.map((screen) => (
                                <MenuItem key={screen} onClick={handleNavClose}>
                                    <Typography textAlign="center">{screen}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu-item"
                        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                    >
                        Logo
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: {xs: "none", md: "flex"} }}>
                        {screens.map((screen) => (
                            <Button
                                key={screen}
                                onClick={handleNavClose}
                                sx={{ my: 2, color: "#fff", display: "block" }}
                            >
                                {screen}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: {xs: "none", md: "flex"}, pr: "24px" }}>
                        <Search>
                            <SearchIconWrapper>
                                <Icon>search</Icon>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: {xs: "flex", md: "none"} }}>
                        <IconButton size="large" aria-label="search" color="inherit">
                            <Icon>search</Icon>
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Profile">
                            <IconButton onClick={handleUserOpen} sx={{ p: 0 }}>
                                <Avatar sx={{ mr: "10px" }} />
                                <Typography sx={{ color: "#fff" }}>{username}</Typography>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="user-bar"
                            anchorEl={anchorUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorUser)}
                            onClose={handleUserClose}
                        >
                            {acountScreens.map((screen) => (
                                <MenuItem key={screen} onClick={handleUserClose}>
                                    <Typography textAlign="center">{screen}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav;
