import { Pill, Wrapper } from './style'

function Scene({ options, setBackground, index }) {
  const { txt, img } = options

  setBackground((prev) => (prev = img))

  return (
    <Wrapper img={img}>
      <Pill index={index}>{txt}</Pill>
    </Wrapper>
  )
}

export default Scene
