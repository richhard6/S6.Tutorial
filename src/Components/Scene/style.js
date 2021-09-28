import styled from 'styled-components'

const checkIndex = (props) => {
  const index = props.index

  return `color: ${index === 2 ? 'black' : 'white'}`
}

export const Pill = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  height: 65vh;
  ${checkIndex}
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
