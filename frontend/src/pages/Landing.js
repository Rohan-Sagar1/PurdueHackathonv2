import React from "react";
import styled from "styled-components";
import TagInput from "../components/TagInput";
import "./Landing.css"

const SignUp = styled.div`
    width: 30%;
    height: 100vh;
    background-color: #f8f9fa;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    border-right: 1px solid #ddd;
`
const Box = styled.div`
    width: 25%;
    height: 80vh;
    background-color: #ffffff;
    position: fixed;
    top: 15vh;
    left: 2.5%;
    border: 1px solid #ddd;
    text-align:center;
`
const Top = styled.div`
    display : flex;
    flex-direction: row;
    width: 70%;
    height: 10vh;
    background-color: #fdfdd2;
    position: fixed;
    top: 0;
    left: 30%;
    bottom: 0;
    z-index: 999;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    vertical-align:  middle;
`;

const Title = styled.h1`
    text-align:center;
    text-decoration:underline;
`
const Name = styled.input.attrs({
    type:"text",
    id:"search",
    placeholder: "Search for ads..",
  })`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  `;

const SignUpContainer = styled.div`
  left:15%;
`

const SubmitButton = styled.button`
  margin-top: 10%;
  color: #FFFFFF;
  width: 60%;
  height: 3vh;
  background-color: #000000;
`

const Landing = () =>{
    return(
        <div>
            
        <SignUp>
            <Box>
                <Title>Sign Up</Title>
                <SignUpContainer>
                <div className="group">      
                <input type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>First Name</label>
                </div>
                <div className="group">      
                <input type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Last Name</label>
                </div>
                
                <div className="group">      
                <input type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
                </div>

                <div className="group">      
                <input type="text" required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Password</label>
                </div>

                <TagInput></TagInput>
                </SignUpContainer>
                <SubmitButton>Confirm</SubmitButton>
            </Box>
        </SignUp>

        <Top></Top>

        </div>
    );
}

export default Landing;