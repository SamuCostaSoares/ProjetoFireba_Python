import { Button, Container } from "@mui/material";
import React from "react";
import { auth, provider } from "../../services/firebase";

const Login = () => {

    const handleSignIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <Container maxWidth="sm">
            <Button variant="contained" color="primary" onClick={handleSignIn} >
                Login com Google
            </Button>
        </Container>
    )
};

export default Login;
