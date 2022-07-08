import React, { useEffect, useState} from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import './App.css';
import CircularIndeterminate from './components/Loading/loading';
import Login from './components/Login/login';
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import checkValidUser from "./services/checkValidUser";
import Header from "./components/Header/header";

function App() {
  const 
    [user, loading ] = useAuthState(auth),
    [userAuthorized, setUserAuthorized] = useState(false);
  useEffect(() => {
    let p1 = new Promise((resolve, reject) => {
      if(user){
        db.collection("users").doc(user.uid).set({
          email: user.email,
          photoURL: user.photoURL
        });
        resolve(user.email)
      }else{
        reject("Failed")
      }
    }
    );
    p1.then((val) => {
      checkValidUser(db, val).then(ret => {
        var userPermissionCheckResult = ret;
        setUserAuthorized(userPermissionCheckResult);
      });
    })
  }, [user]);

  if(!user || !userAuthorized) return <Login />

  if(loading) return <CircularIndeterminate />

  return (
    
    <Container maxWidth="100%">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={9}>
          <Paper>PRINCIPAL</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>Bottom</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
