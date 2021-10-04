import { data } from '../../assets/data'
import Scene from '../Scene/Scene'
import { useState } from 'react'

function Index({
  setCurrentIndex,
  currentIndex,
  setBackground,
  isClicked,
  setIsClicked,
}) {
  const scenes = data.map((options, index) => {
    return (
      currentIndex === index && (
        <Scene
          key={index}
          options={options}
          setBackground={setBackground}
          index={index}
        />
      )
    )
  })

  const handleClick = (index) => {
    setCurrentIndex((prev) => (prev = index))
    setIsClicked(true)
  }

  return (
    <>
      {!isClicked &&
        data.map((info, index) => {
          return <div onClick={() => handleClick(index)}>{info.txt}</div>
        })}
      {scenes}
    </>
  )
}

export default Index
