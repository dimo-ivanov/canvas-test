import React, { useState } from 'react'
import { Rect } from 'react-konva'
import Konva from 'konva'

const MyRect = ({ x = 10, y = 10, width = 50, height = 50 }) => {
  const [fillColor, setFillColor] = useState(Konva.Util.getRandomColor())
  const handleClick = () => {
    setFillColor(Konva.Util.getRandomColor())
  }

  return (
    <Rect
      draggable
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fillColor}
      onClick={handleClick}
    />
  )
}

export default MyRect
