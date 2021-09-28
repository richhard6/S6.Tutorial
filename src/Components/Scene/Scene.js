import { Pill, Wrapper } from './style'

function Scene({ options, setBackground }) {
  const { txt, img } = options
  console.log(options)

  setBackground((prev) => (prev = img))

  return (
    <Wrapper img={img}>
      <Pill>{txt}</Pill>
    </Wrapper>
  )
}

export default Scene
