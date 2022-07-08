import React, { useEffect, useState} from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";

import './App.css';
import CircularIndeterminate from './components/Loading/loading';
import Login from './components/Login/login';
import { Container, Typography, Box } from "@mui/material";
import checkValidUser from "./services/checkValidUser";

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

  console.log("userAuthorized state",userAuthorized);
  if(!user || !userAuthorized) return <Login />

  if(loading) return <CircularIndeterminate />

  return (
    <div className="App">
      {/* <AppHeader></AppHeader> */}
      {/* <AppSidebar></AppSidebar> */}
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#BEDDEF', height: '100vh' }} >
          <Typography variant="h1" component="div">Tela PRINCIPAL DO APP</Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;
