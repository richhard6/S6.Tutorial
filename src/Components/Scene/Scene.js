import { Pill, Wrapper } from './style'

function Scene({ options }) {
  return (
    <Wrapper>
      <Pill>{options}</Pill>
    </Wrapper>
  )
}

export default Scene
