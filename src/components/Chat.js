import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'
import { db } from '../firebase'
import { useSelector } from 'react-redux'
import Message from './Message'
import { useRef ,useEffect} from 'react'
import {selectRoomId}  from '../features/appSlice'
import {useCollection, useDocument} from 'react-firebase-hooks/firestore'
function Chat() {
    const chatRef=useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    );
    const [roomMessages,loading] = useCollection(
        roomId &&
        db.
          collection("rooms")
          .doc(roomId)
          .collection("messages")
          .orderBy("timestamp" , "asc")
    );
    useEffect(() => {
       chatRef.current?.scrollIntoView({
           behaviour:"smooth"
       });
    }, [roomId,loading]);

    return (<>
        <ChatContainer>
            {/* <h1>hello</h1> */}
        <>
        <Header>
            <HeaderLeft>
                <h4><strong>#{roomDetails?.data().name}</strong></h4>
                <StarBorderOutlined/>
            </HeaderLeft>
            <HeaderRight>
                <p>
                    <InfoOutlined/>Details
                </p>
            </HeaderRight>
        </Header>

        <ChatMessages>
            {roomMessages?.docs.map(doc=>{
            const {message , timestamp , user, userImg}=doc.data();
           
            return(
                <Message
                key = {doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImg={userImg}
                />
            )
           })}
           <ChatButton ref={chatRef}/>
        </ChatMessages>
        <ChatInput
        channelName={roomDetails?.data().name}
        channelId ={roomId}
        />
        </>

        </ChatContainer>
    </>
    )
}

export default Chat

const ChatContainer=styled.div`
flex:0.7;
flex-grow:1;
margin-top:60px;
width:100%;
scroll-behavior: smooth;
`

const Header = styled.div`
display: flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgray;
`;
const HeaderLeft=styled.div`

display: flex;
align-items:center;
>h4{
    display: flex;
    text-transform:lowercase;
    margin-right:10px;
}
>h4>.MuiSvgIcon-root{
    margin-left:10px;
    font-size:18px;
}



`;
const HeaderRight=styled.div`
>p{
    display:flex;
    align-items:center;
    font-size:14px;
}
>p>MuiSvgIcon-root{
    margin-right:5px !important;
    font-size:16px;
}

`;

const ChatMessages = styled.div`
overflow-y: scroll;
`;

const ChatButton= styled.div``;