import React from 'react';
import styled from "styled-components"
import { Avatar } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { HelpOutline } from '@material-ui/icons';
import SideBarOptions from './SideBarOptions';

function Header() {
  return (
      <HeaderContainer>
          <HeaderLeft>
            <HeaderAvatar
            
            
            />
            <AccessTime/>
          </HeaderLeft>
          <HeaderSearch>
                <SearchIcon/>
                <input placeholder='search channel'/>
          </HeaderSearch>
          <HeaderRight>
                <HelpOutline/>
          </HeaderRight>
      </HeaderContainer>
  );
}

export default Header;

const HeaderRight = styled.div`
flex:0.3;
display:flex;
align-items:flex-end;
>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:20px;
}
`;
const HeaderContainer = styled.div`
    display:flex;
    position:fixed;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding:10px 0;
    background-color:var(--slack-color)
`;


const HeaderLeft = styled.div`
flex:0.3;
display: flex;
align-items:center;
margin-left:20px;

>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;
}
`;

const HeaderAvatar =styled(Avatar)`
cursor:pointer;
:hover{
    opacity:0.8;
}

`;
const HeaderSearch = styled.div`
flex:0.4
opacity: 1;
border-radius:6px;
text-align:center;
background-color:#421f44 ;
display:flex;
padding: 0 50px;
color:gray;
border: 1px gray solid;

>input{
    background-color:transparent ;
    border:none;
    text-align:center;
    min-width:30vw;
    outline:none;
    color:white;
}

`;