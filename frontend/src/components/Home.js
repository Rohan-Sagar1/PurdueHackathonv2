import * as React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Dashboard from './Dashboard'

function Home() {
  return (
    <Container>
        <Dashboard />
        


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






