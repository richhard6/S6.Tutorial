import './App.css'
import Scene from './Components/Scene/Scene'
import { data } from './assets/data'
import { Wrapper } from './styles'
import { useState, useEffect } from 'react'
import Welcome from './Components/Welcome/Welcome'

function App() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < 0) setCurrentIndex((prev) => (prev = 3))
  }, [currentIndex])

  return isVisible ? (
    <Welcome isVisible={isVisible} setIsVisible={setIsVisible} />
  ) : (
    <Wrapper>
      <div>
        Our hero was floating in outer space when in the distance he spotted a
        spaceship:
      </div>
      {data.map((options, index) => {
        console.log(index)
        return currentIndex === index && <Scene key={index} options={options} />
      })}

      {currentIndex > 0 && (
        <button onClick={() => setCurrentIndex((prev) => prev - 1)}>
          Previous
        </button>
      )}
      {currentIndex < 2 && (
        <button onClick={() => setCurrentIndex((prev) => prev + 1)}>
          Next
        </button>
      )}
    </Wrapper>
  )
}

export default App
