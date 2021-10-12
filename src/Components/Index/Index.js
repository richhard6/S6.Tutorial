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

  return <>{scenes}</>
}

export default Index
