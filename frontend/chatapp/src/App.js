import React, { useEffect, useState} from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";

import './App.css';
import CircularIndeterminate from './components/Loading/loading';
import Login from './components/Login/login';
import { Container, Typography, Box } from "@mui/material";

function App() {
  const [user, loading ] = useAuthState(auth);
  useEffect(() => {
    console.log("USER:",user);
    if(user){
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL
      })
    }
  }, [user]);

  if(!user) return <Login />

  if(loading) return <CircularIndeterminate />

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <AppSidebar></AppSidebar>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#BEDDEF', height: '100vh' }} >
          <Typography variant="h1" component="div">Tela PRINCIPAL DO APP</Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;
