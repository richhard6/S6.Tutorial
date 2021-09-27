import { Pill, Wrapper } from './style'

function Scene({ options }) {
  const { txt, img } = options
  console.log(options)

  return (
    <Wrapper img={img}>
      <Pill>{txt}</Pill>
    </Wrapper>
  )
}

export default Scene
