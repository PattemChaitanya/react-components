import React from 'react'
import "./interactiveUi.css"

const InteractiveUi = ({ children, ariaLabel, role }) => {
  return (
    <section 
      className='interactive-wrapper'
      role={role || "region"}
      aria-label={ariaLabel || "Interactive UI Component"}
    >
      {children}
    </section>
  )
}

export default InteractiveUi
