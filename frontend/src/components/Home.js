import * as React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// when href is /jobs, render the Dashboard component

function Home() {
    return (
        <Container>
            <Routes>
                <Route path="/jobs" element={<Dashboard />} />
            </Routes>
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 80%;
    height: 90%;
    background-color: gray;
    position: absolute;
    right: 0;
    bottom: 0;
`;






