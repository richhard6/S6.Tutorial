import './App.css'
import Scene from './Components/Scene/Scene'
import data from './assets/data.json'
import { Wrapper } from './styles'
import { useState } from 'react'
import Welcome from './Components/Welcome/Welcome'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return isVisible ? (
    <Welcome isVisible={isVisible} setIsVisible={setIsVisible} />
  ) : (
    <Wrapper>
      <div>
        Our hero was floating in outer space when in the distance he spotted a
        spaceship:
      </div>
      {data.map((options, index) => (
        <Scene key={index} options={options} />
      ))}
    </Wrapper>
  )
}

export default App
