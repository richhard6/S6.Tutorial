import './App.css'
import { Wrapper, Button, Flex, Home } from './styles'
import { useState, useEffect } from 'react'
import Welcome from './Components/Welcome/Welcome'
import Index from './Components/Index/Index'
import { AiOutlineHome } from 'react-icons/ai'

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
    <Welcome
      setBackground={setBackground}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      isClicked={isClicked}
      setCurrentIndex={setCurrentIndex}
      setIsClicked={setIsClicked}
      currentIndex={currentIndex}
      background={background}
    />
  ) : (
    <Wrapper img={background}>
      <Flex>
        {currentIndex > 0 && (
          <Button onClick={() => setCurrentIndex((prev) => prev - 1)}>
            Previous
          </Button>
        )}
        {currentIndex < 3 && (
          <Button
            onClick={() => {
              setIsClicked(true)
              setCurrentIndex((prev) => prev + 1)
            }}
          >
            Next
          </Button>
        )}
        <Home>
          <AiOutlineHome />
        </Home>
      </Flex>

      <Index
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        setBackground={setBackground}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        background={background}
      />
    </Wrapper>
  )
}

export default App
