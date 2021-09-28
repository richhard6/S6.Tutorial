import styled from 'styled-components'

const backgroundSelector = (props) => {
  const background = props.img
  console.log(background)
  return `background-image: url(${background})`
}

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  ${backgroundSelector}
`

export const Button = styled.button`
  margin-bottom: 30px;
  width: 30%;
`
