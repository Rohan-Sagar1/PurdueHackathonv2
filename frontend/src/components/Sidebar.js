import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import InboxIcon from '@mui/icons-material/Inbox';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PeopleIcon from '@mui/icons-material/People';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <Nav>
        <Logo>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" alt="logo" />
        </Logo>

        <NavMenu>
            <a href="/inbox">
                <InboxIcon />
                <span>Inbox</span>
            </a>
            <a href="/jobs">
                <DynamicFeedIcon />
                <span>Jobs</span>
            </a>
            <a href="/candidates">
                <PeopleIcon />
                <span>Candidates</span>
            </a>
            <a href="/help">
                <HelpIcon />
                <span>Help</span>
            </a>
        </NavMenu>
        <SignOut>
            <a href="/signout">
                <LogoutIcon />
                <span>Log Out</span>
            </a>
        </SignOut>
    </Nav>
  )
}

export default Sidebar

const Nav = styled.div`
    width: 20%;
    height: 100vh;
    background-color: #f8f9fa;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    border-right: 1px solid #ddd;
`;

const Logo = styled.a`
    display: block;
    padding: 16px 16px 0;
    img {
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 10px 10px 0;
    }

    @media (max-width: 480px) {
        padding: 10px 10px 0;
    }
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    width: 80%;
    a {
        display: flex;
        gap: 10%;
        border-radius: 5px;
        background-color: #f8f9fa;
        text-decoration: none;
        align-items: center;
        color: gray;
        font-family: 'Roboto', sans-serif;
        padding: 0 16px;
        height: 50px;
        span {
            margin-left: 8px;
            font-size: 14px;
            font-weight: 800;
        }
        &:hover {
            background-color: #FCFDFE;
            
        }
    }
`;

const SignOut = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    padding: 20px 30px;
    width: 80%;
    a {
        display: flex;
        gap: 10%;
        border-radius: 5px;
        background-color: #f8f9fa;
        text-decoration: none;
        align-items: center;
        color: gray;
        font-family: 'Roboto', sans-serif;
        padding: 0 16px;
        height: 50px;
        span {
            margin-left: 8px;
            font-size: 14px;
            font-weight: 800;
        }
        &:hover {
            background-color: #ACABAA;
        }
    }
`;


