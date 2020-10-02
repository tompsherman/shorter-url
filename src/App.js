import React from 'react'
import Nav from "./components/pages/Nav"
import Hero from "./components/pages/Hero"
import Short from "./components/pages/Short"
import Body from "./components/pages/Body"
import BodyBottom from './components/pages/BodyBottom'
import Footer from "./components/pages/Footer"
import styled from "styled-components"

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  background: seagreen;
`

const App = () => {
  return (
    <StyledDiv>
      <Nav />
      <Hero />
      <Short />
      <Body />
      <BodyBottom />
      <Footer />      
    </StyledDiv>
  )
}

export default App