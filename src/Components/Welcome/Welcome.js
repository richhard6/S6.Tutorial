function Welcome({ isVisible, setIsVisible }) {
  console.log(isVisible)
  return (
    isVisible && (
      <div>
        <h2>Welcome to the Adventure</h2>
        <button onClick={() => setIsVisible((prevState) => !prevState)}>
          Start
        </button>
      </div>
    )
  )
}

export default Welcome
