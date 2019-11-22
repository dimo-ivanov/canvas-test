import React, { useState, useEffect } from 'react'
import { Stage, Layer } from 'react-konva'
import MyRect from './MyRect'
import CanvasImage from './CanvasImage'

function App () {
  const [rectangles, setRectangles] = useState([])
  const [x, setX] = useState(150)
  const [isMouseDown, setIsMouseDown] = useState(false)

  useEffect(() => {
    setTimeout(() => { setX(300) }, 1000)
  }, [])
  const handleClick = e => {
    console.log('handleClick', e)
  }
  const handleDragStart = e => {
    console.log('handleDragStart', e)
  }
  const handleDragEnd = e => {
    console.log('handleDragEnd', e)
  }
  const handleMouseDown = ({ evt: { x, y } }) => {
    setIsMouseDown(true)
    setRectangles(s => ([...s, { x, y, width: 1, height: 1 }]))
  }
  const handleMouseMove = ({ evt: { x, y } }) => {
    console.log('mouse MOVING')
    if (!isMouseDown) return
    console.log('mouse DOWN')
    setRectangles(s => {
      const cloneRects = [...s]
      const index = cloneRects.length - 1
      const rect = { ...cloneRects[index] }
      rect.width = x - rect.x
      rect.height = y - rect.y
      cloneRects[index] = rect
      // console.log('width, height', width, height)
      return cloneRects
    })
  }
  const handleMouseUp = ({ evt: { x, y } }) => {
    setIsMouseDown(false)
    // isMouseDown = false
    // const width = x - rectangle.x
    // const height = y - rectangle.y
    // setRectangle(s => ({ ...s, width, height }))
  }
  return (
    <Stage
      width={700}
      height={700}
      className='stage'
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragMove={e => console.log('onDragMove', e)}
      onContentMousedown={handleMouseDown}
      onContentMousemove={handleMouseMove}
      // onContent={handleMouseUp}
      onContentMouseup={handleMouseUp}
      on
    >
      {/* {console.log('rectangle', rectangle)} */}
      <Layer onDragStart={handleDragStart}>
        <MyRect />
        {rectangles.map((rectangle, index) =>
          <MyRect
            key={index}
            {...rectangle}
          />
        )}
        <CanvasImage src='https://konvajs.org/assets/yoda.jpg' x={x} />
      </Layer>
    </Stage>
  )
}

export default App
