import './App.css'
import Scene from './Components/Scene/Scene'
import { data } from './assets/data'
import { Wrapper, Button } from './styles'
import { useState, useEffect } from 'react'
import Welcome from './Components/Welcome/Welcome'
import Index from './Components/Index/Index'

function App() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [background, setBackground] = useState({})

  const [isClicked, setIsClicked] = useState(false)

  /*   const handleClick= ()=>{
    setCurrentIndex((prev) => prev + 1) 
    setIsClicked(true)}
  } */

  useEffect(() => {
    if (currentIndex < 0) setCurrentIndex((prev) => (prev = 3))
  }, [currentIndex])

  return isVisible ? (
    <Welcome isVisible={isVisible} setIsVisible={setIsVisible} />
  ) : (
    <Wrapper img={background}>
      {currentIndex > 0 && (
        <Button onClick={() => setCurrentIndex((prev) => prev - 1)}>
          Previous
        </Button>
      )}
      {currentIndex < 2 && <Button>Next</Button>}
      {currentIndex < 1 && (
        <h3>
          Our hero was floating in outer space when in the distance he spotted a
          spaceship:
        </h3>
      )}
      <Index
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        setBackground={setBackground}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
    </Wrapper>
  )
}

export default App
