import styled from 'styled-components'

const backgroundSelector = (props) => {
  const background = props.img
  return `background-image: url(${background})`
}

export const Pill = styled.div`
  border-radius: 15px;
  border: 1px solid black;
  margin-top: 1rem;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${backgroundSelector}
`
