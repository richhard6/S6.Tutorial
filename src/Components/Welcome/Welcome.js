import { data } from '../../assets/data'
import Index from '../Index/Index'
import { Button, Wrapper, Title } from '../../styles'
import { Pill } from '../Scene/style'

function Welcome({
  isVisible,
  setIsVisible,
  isClicked,
  setCurrentIndex,
  setIsClicked,
  currentIndex,
  setBackground,
  background,
}) {
  const handleClick = (index) => {
    setCurrentIndex((prev) => (prev = index))
    setIsClicked(true)
    setIsVisible(false)
  }
  return (
    isVisible && (
      <Wrapper>
        <Title>Welcome to the Adventure</Title>
        <Button onClick={() => setIsVisible((prevState) => !prevState)}>
          START
        </Button>
        {!isClicked &&
          data.map((info, index) => {
            return (
              <Pill key={index} onClick={() => handleClick(index)}>
                {info.txt}
              </Pill>
            )
          })}

        {/* bug aqui */}
        {isClicked && (
          <Index
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            setBackground={setBackground}
            background={background}
          />
        )}
      </Wrapper>
    )
  )
}

export default Welcome
