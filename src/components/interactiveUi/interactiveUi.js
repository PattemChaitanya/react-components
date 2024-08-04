import React from 'react'
import "./interactiveUi.css"

const InteractiveUi = ({ children }) => {
  return (
    <div className='interactive-wrapper'>
      {children}
    </div>
  )
}

export default InteractiveUi
