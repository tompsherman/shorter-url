import React from 'react'
import Nav from "./components/pages/Nav"
import Hero from "./components/pages/Hero"
import Short from "./components/pages/Short"
import Body from "./components/pages/Body"
import BodyBottom from './components/pages/BodyBottom'
import Footer from "./components/pages/Footer"

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Short />
      <Body />
      <BodyBottom />
      <Footer />      
    </div>
  )
}

export default App