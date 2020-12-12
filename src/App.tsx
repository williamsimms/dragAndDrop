import React from 'react'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <div className='empty'>
        <div className='fill' draggable='true'></div>
      </div>
      <div className='empty'></div>
      <div className='empty'></div>
      <div className='empty'></div>
      <div className='empty'></div>
    </div>
  )
}

export default App
