import * as React from 'react'
import styled from 'styled-components'

function Card(props) {
    return (
        <Container>
            <CardBody>
                <JobTitle>{props.jobTitle}</JobTitle>
                <CompanyName>{props.companyName}</CompanyName>
                <Description>{props.description}</Description>
                <SkillTags>
                    <span>Coding</span>
                    <span>Design</span>
                    <span>Marketing</span>
                    <span>Cooking</span>
                </SkillTags>
                <Location>
                    <span>Location: </span>
                    {props.location}
                </Location>
                <SpaceRemaining>
                    <span>Space Remaining: </span>
                    {props.spaceRemaining}
                </SpaceRemaining>
                <MaxApplicants>
                    <span>Max Applicants: </span>
                    {props.maxApplicants}
                </MaxApplicants>
                <ApplyButton>Apply</ApplyButton>
            </CardBody>
        </Container>
    )
}

export default Card

const Container = styled.div`
    width: 13%;
    height: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    }
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
`;


const JobTitle = styled.div`
    font-weight: 800;
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
`;

const CompanyName = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
`;

const Description = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
`;

const Location = styled.div`
    font-weight: 400;
    color: #555;
    font-size: 14px;
    margin-bottom: 10px;
    span {
        font-weight: 500;
    }

`;

const SpaceRemaining = styled.div`
    font-weight: 400;
    color: #555;
    margin-bottom: 10px;
    font-size: 14px;
    span {
        font-weight: 500;
    }
`;

const MaxApplicants = styled.div`
    font-weight: 400;
    color: #555;
    margin-bottom: 10px;
    font-size: 14px;
    span {
        font-weight: 500;
    }
`;

const ApplyButton = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: blue;
    color: white;
    font-size: 16px;
    font-weight: 800;
    color: white;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }
`;

const SkillTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
    span {
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #eee;
        font-size: 14px;
        font-weight: 500;
        color: #555;
    }
`;





