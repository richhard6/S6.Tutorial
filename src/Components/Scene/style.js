import styled from 'styled-components'

/* const checkIndex = (props) => {
  const index = props.index

  return `color: ${index === 2 ? 'white' : 'black'}`
} */

export const Pill = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  height: 65vh;

  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 10vh;
  border-radius: 8px;
  background-color: #d1e8e4;
  &:hover {
    color: black;
    background-color: #c37b89;
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
