import React, {useState, Fragment} from "react";
import {Box, Paper, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Typography, Tooltip, Toolbar, AppBar, Grid} from "@mui/material";
import Logout from '@mui/icons-material/Logout';
//import {Apps} from "@material-ui/icons";

export default function Header(){
    const
        [anchorEl, setAnchorEl] = useState(null),
        open = Boolean(anchorEl),
        handleClick = (event) => {
            setAnchorEl(event.currentTarget)
        },
        handleClose = () => {
            setAnchorEl(null);
        };
    
    return(
        <Fragment>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Typography variant="h6" noWrap component="div">
                            Reobotech Tecnologia
                    </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center',justifyContent:"flex-end" }}>
                                <Tooltip title="Usuário">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                    },
                                    '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: '#900',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                    <MenuItem>
                                        <Avatar /> Conta
                                    </MenuItem>
                                    <MenuItem>
                                        <Avatar /> Configurações
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                    Logout
                                    </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
};
