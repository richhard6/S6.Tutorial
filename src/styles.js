import styled from 'styled-components'

const backgroundSelector = (props) => {
  const background = props.img
  return `background-image: url(${background})`
}

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  background-color: black;
  min-height: 100vh;

  ${backgroundSelector}
`

export const Home = styled.div`
  font-size: 2rem;
  cursor: pointer;
  margin-left: 0 auto;
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 3rem;
`

export const Button = styled.button`
  margin-bottom: 30px;
  width: 30%;
  height: 3rem;
  border-radius: 3px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  font-weight: 900;
  margin-right: 1.5rem;

  &:hover {
    background-color: cyan;
    color: white;
    font-size: 1.5rem;
    transition: font-size 1.5s ease-in-out;
  }
`
export const Title = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
`
