import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
function Login() {
const signIn =(e)=>{
 e.preventDefault();
 auth.signInWithPopup(provider).catch((error)=>{
     alert(error.message);
 })
}

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://brandeps.com/icon-download/S/Slack-square-icon-vector-02.svg"/>
            <h1>Login</h1>
            <Button type="submit" 
            onClick={signIn}
            >
                Sign In with Google
            </Button>
        
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
background-color: #f8f8f8;
height:100vh;
display:grid;
place-items:center;
`
;
const LoginInnerContainer = styled.div`
padding:100px;
text-align: center;
background-color: white;
border-radius:10px;
box-shadow: 0  1px 3px rgba(0,0,0,0.12), 0 1px
2px rgba(0,0,0,0.24);

>img{
   height:100px;
   object-fit: contain;
    margin-bottom:40px
}
>button{
    margin-top:10px;
    background-color:rgb(69,31,222) ;
}

`;