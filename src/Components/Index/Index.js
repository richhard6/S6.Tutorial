import { data } from '../../assets/data'
import Scene from '../Scene/Scene'

function Index({ currentIndex, setBackground, background }) {
  const scenes = data.map((options, index) => {
    return (
      currentIndex === index && (
        <Scene
          key={index}
          options={options}
          setBackground={setBackground}
          background={background}
          index={index}
        />
      )
    )
  })

  console.log(currentIndex)
  return (
    <>
      {/*      {!isClicked &&
        data.map((info, index) => {
          return <div onClick={() => handleClick(index)}>{info.txt}</div>
        })} */}
      {scenes}
    </>
  )
}

export default Index
