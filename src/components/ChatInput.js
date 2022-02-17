import React, { useRef ,useState} from 'react'
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
const ref= firebase.firestore().collection("rooms");
function ChatInput({channelName,channelId}) {
    // const [input,setInput] = useState(" ");
    const inputRef = useRef(null);



    const sendMessage=(e)=>{
        e.preventDefault();
        
        if(!channelId){
            return false;
            // console.log("cid not ava");
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message:inputRef.current.value  ,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()   ,  
            user:"nish",
            userImg:"https://i.pinimg.com/564x/f5/23/3a/f5233afc4af9c7be02cc1c673c7c93e9.jpg"
        })
        inputRef.current.value = null;
    }

    
  return (
    <ChatInputContainer>
        <form >
            <input 
            ref={inputRef}
            placeholder ={`Message #${channelName}`}/>
            <Button hidden type='submit' onClick={sendMessage}>
                Send
            </Button>
        
        </form>
        </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius:20px;
display: flex;
justify-content:center;

> form > input{
    left:20%;
    margin-left:-60px;
    position:fixed;
    bottom:30px;
    width:100%;
    border:1px solid solid gray;
    border-radius:3px;
    outline:none;
    height:40px;
}

>form>button{
    display:none !important;
}
`;