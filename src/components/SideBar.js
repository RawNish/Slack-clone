import React from 'react';
import styled from 'styled-components';
import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt} from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOptions from './SideBarOptions';
import { useCollection } from 'react-firebase-hooks/firestore';
import {db} from '../firebase'
// import GroupsIcon from '@material-ui/icons/GroupsIcon';
function SideBar() {
  const [channels,loading,error] = useCollection(db.collection("rooms"));
    // console.log(channels)


  return (<SideBarComponent>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Company HQ</h2>
                    <h3>
                        <FiberManualRecord/>
                        Name
                    </h3>
                </SideBarInfo>
                <CreateIcon/>
            </SideBarHeader>
            <SideBarOptions Icon={InsertComment} title="Threads"/>
            <SideBarOptions Icon={Inbox} title="Mentions and Reactions"/>
            <SideBarOptions Icon={Drafts} title="Saved Items"/>
            <SideBarOptions Icon={BookmarkBorder} title="Channel Browser"/>
            <SideBarOptions Icon={PeopleAlt} title="People and user Groups"/>
            <SideBarOptions Icon={Apps} title="Apps"/>
            <SideBarOptions Icon={FileCopy} title="File Browser"/>
            <SideBarOptions Icon={ExpandLess} title="Show Less"/>
            <hr/>
            <SideBarOptions Icon={ExpandMore} title="Channels"/>
            <hr/>
            <SideBarOptions Icon={Add} addChannelOption title="Add Channels"/>
            {channels?.docs.map((doc)=>(
                    <SideBarOptions
                    key={doc.id}
                    id={doc.id}
                    
                    title={doc.data().name}
                    />
            ))}
         </SideBarComponent>);
}

export default SideBar;

const SideBarComponent = styled.div`
color:white;
background-color:var(--slack-color);
flex:0.3;
border-top:1px solid #49274b;
max-width:260px;
margin-top:60px;

>hr{
    margin-top:8px;
    margin-bottom:8px;
    border:1px solid black;
}
`;

const SideBarHeader =styled.div`
display: flex;
border-bottom:1px solid #49274b;
padding:13px;
>.MuiSvgIcon-root{
    padding:8px;
    color:#49274b;
    font-size:18px;
    background-color:white ;
    border-radius:999px;
}
`;

const SideBarInfo =styled.div`
flex:1;

>h2{
    font-size:15px;
    font-weight:900;
    margin-bottom:5px;

}
>h3{
    display: flex;
    font-size:13px;
    font-weight:400;
    align-items:center;
}

>h3 >.MuiSvgIcon-root{
    font-size:14px;
    margin-top:1px;
    margin-right:2px;
    color:green;
}
`;
