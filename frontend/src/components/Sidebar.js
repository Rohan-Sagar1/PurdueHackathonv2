import React, { useState, useEffect } from 'react';
import styled from "styled-components";

function Sidebar() {
  return (
    <Nav>
        <Logo>
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
        </Logo>

        <NavMenu>
            <a href="/inbox">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" alt="logo" />
                <span>Inbox</span>
            </a>
            <a href="/jobs">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" alt="logo" />
                <span>Jobs</span>
            </a>
            <a href="/candidates">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" alt="logo" />
                <span>Candidates</span>
            </a>
            <a href="/help">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" alt="logo" />
                <span>Help</span>
            </a>
        </NavMenu>

    
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
    padding: 16px 0;
    a {
        display: flex;
        background-color: #f8f9fa;
        text-decoration: none;
        align-items: center;
        color: gray;
        font-size: 14px;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        padding: 0 16px;
        height: 40px;
        img {
            width: 20px;
            height: 20px;
        }
        span {
            margin-left: 8px;
            font-size: 14px;
            font-weight: 500;
        }
        &:hover {
            background-color: #ACABAA;
        }
    }
`;


