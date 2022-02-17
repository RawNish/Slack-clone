import { CircularProgress } from '@material-ui/core';
import {ReactChild,useState,useEffect} from 'react';
import styled from 'styled-components';
import { Firestore } from 'firebase/firestore';
import {db,auth,provider} from '../firebase';
import { QuerySnapshot } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';


function SideBarOptions({Icon ,title,addChannelOption,id}) {

  const dispatch=useDispatch();

  const addChannel=()=>{
        const channelName= prompt("Please enter the channel name");
        
        if(channelName){

            db.collection("rooms").add({
                name:channelName,
            });
        }
    }
  const selectChannel=()=>{
        if(id){
            dispatch(enterRoom({
                roomId:id,
            }));
        }
    }


  return <SideBarOptionContainer
  onClick={addChannelOption?addChannel:selectChannel}
  >
      {Icon && <Icon fontSize ="small" style={{padding:10}}/>}
      {Icon ? <h3>{title}</h3> :(
          <SidebarOptionChannel>
            <span>#</span>{title}
          </SidebarOptionChannel>
      )}
  </SideBarOptionContainer>;
}

export default SideBarOptions;


const SideBarOptionContainer=styled.div`
display: flex;
align-items:center;
font-size:12px;
padding-left:2px;
cursor: pointer;

:hover{
    opacity:0.9;
    background-color:#340e36 ;
}
>h3{
    font-weight:500;
}
>h3>span{
    padding:15px;
}

`;

const SidebarOptionChannel =styled.h3`
padding:10px 0;
font-weight:300;
`;