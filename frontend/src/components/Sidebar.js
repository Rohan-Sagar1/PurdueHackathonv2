import React, { useState, useEffect } from 'react';
import styled from "styled-components";

function Sidebar() {
  return (
    <Nav>
    
    </Nav>
  )
}

export default Sidebar

const Nav = styled.div`
    width: 260px;
    height: 100vh;
    background-color: #f8f9fa;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    border-right: 1px solid #ddd;
`;
