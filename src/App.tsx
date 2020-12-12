import React, { useRef } from 'react'
import './App.scss'

const App = () => {
  const fill = useRef<any>()

  const onDragStart = (e: any) => {
    e.target.className += ' hold'
    setTimeout(() => {
      e.target.className = 'invisible'
    }, 0)
  }

  const onDragEnd = (e: any) => {
    e.target.className = 'fill'
  }

  const onDragOver = (e: any) => {
    e.preventDefault()
  }

  const onDragEnter = (e: any) => {
    e.preventDefault()
    e.target.className += ' hovered'
  }

  const onDragLeave = (e: any) => {
    e.target.className = 'empty'
  }

  function onDragDrop(e: any) {
    e.target.className = 'empty'
    e.target.append(fill.current)
  }

  return (
    <div className='app'>
      <div
        className='empty'
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDragDrop}>
        <div className='fill' draggable='true' onDragStart={onDragStart} onDragEnd={onDragEnd} ref={fill}></div>
      </div>
      <div
        className='empty'
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDragDrop}></div>
      <div
        className='empty'
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDragDrop}></div>
      <div
        className='empty'
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDragDrop}></div>
      <div
        className='empty'
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDragDrop}></div>
    </div>
  )
}

export default App
