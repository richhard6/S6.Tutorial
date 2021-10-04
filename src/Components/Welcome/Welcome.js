import { data } from '../../assets/data'
import Index from '../Index/Index'

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
  console.log(isVisible)
  const handleClick = (index) => {
    setCurrentIndex((prev) => (prev = index))
    setIsClicked(true)
  }
  return (
    isVisible && (
      <div>
        <h2>Welcome to the Adventure</h2>
        <button onClick={() => setIsVisible((prevState) => !prevState)}>
          Start
        </button>
        {!isClicked &&
          data.map((info, index) => {
            return <div onClick={() => handleClick(index)}>{info.txt}</div>
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
      </div>
    )
  )
}

export default Welcome
