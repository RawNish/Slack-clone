import React from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login';

const ref = firebase.firestore().collection("rooms")

function App() {
  const [user,loading] = useAuthState(auth)

  return (
    <div className="app">
      <Router>
        {!user ?(
          <Login/>
        ):(
        <>

          <Header/>
          <AppBody>
          <SideBar name = {"name"}/>
          <Switch>
            <Route path="/" exact>
                <Chat/>
            </Route>
          </Switch>
          </AppBody>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
export {ref};
const AppBody =styled.div`
display:flex;
height:100vh;

;`