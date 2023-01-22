import React from 'react'
import styled from 'styled-components';


const Top = styled.div`
    display : flex;
    flex-direction: row;
    width: 80%;
    height: 10vh;
    background-color: #fdfdd2;
    position: fixed;
    top: 0;
    left: 20%;
    bottom: 0;
    z-index: 999;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    vertical-align:  middle;
`;

const Search = styled.input.attrs({
  type:"text",
  id:"search",
  placeholder: "Search for ads..",
})`
position: absolute;
left: 5%;
top: 50%;
transform: translateY(-50%);
`;

const User = styled.div`
  position: absolute;
  left: 83%;
  top: 50%;
  transform: translateY(-50%);  
  background-color: #FFFFFF;
  width: 15%;
  height: 7vh;
`;

function Header() {
  return (
    <Top>
      <Search></Search>
      <User>
        <h3>Saheer Ahmad</h3>
      </User>
    </Top>
      
  )
}

export default Header;