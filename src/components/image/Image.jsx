import React from 'react'

const Image = (props) => {
  return (
      <div className="image">
          <img src={props.src} alt="pokemon" className="image-image" />
      </div>
  )
}

export default Image