import { useState } from 'react'
import Navbar from './components/Navbar'
import IntroCard from "./components/IntroCard"
import Projects from "./components/Projects"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <IntroCard />
      <Projects />
    </>
  )
}

export default App
