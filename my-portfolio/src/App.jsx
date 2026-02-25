import { useState } from 'react'
import Intro from "./components/Intro"
import Projects from "./components/Projects"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <Projects />
    </>
  )
}

export default App
