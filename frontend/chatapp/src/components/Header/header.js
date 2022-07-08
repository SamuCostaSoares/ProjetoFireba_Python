import React, {useState, Fragment} from "react";
import {Box, Paper, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Typography, Tooltip} from "@mui/material";
import Logout from '@mui/icons-material/Logout';

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
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',justifyContent:"flex-end" }}>
            <Typography sx={{ minWidth: 100 }}>Financeiro</Typography>
            <Typography sx={{ minWidth: 100 }}>Controle de Vistoria</Typography>
            <Typography sx={{ minWidth: 100 }}>Projetos</Typography>
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
                    bgcolor: 'background.paper',
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
        </Fragment>
    )
};
