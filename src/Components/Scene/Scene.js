import { Pill, Wrapper } from './style'

function Scene({ options, setBackground, index, background }) {
  const { txt, img } = options

  setBackground((prev) => (prev = img))

  return (
    <Wrapper img={background}>
      <Pill index={index}>{txt}</Pill>
    </Wrapper>
  )
}

export default Scene
