import './App.css'
import Scene from './Components/Scene/Scene'
import { data } from './assets/data'
import { Wrapper, Button } from './styles'
import { useState, useEffect } from 'react'
import Welcome from './Components/Welcome/Welcome'

function App() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [background, setBackground] = useState({})

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
      {currentIndex < 2 && (
        <Button onClick={() => setCurrentIndex((prev) => prev + 1)}>
          Next
        </Button>
      )}
      <div>
        Our hero was floating in outer space when in the distance he spotted a
        spaceship:
      </div>
      {data.map((options, index) => {
        return (
          currentIndex === index && (
            <Scene
              key={index}
              options={options}
              setBackground={setBackground}
              index={index}
            />
          )
        )
      })}
    </Wrapper>
  )
}

export default App
