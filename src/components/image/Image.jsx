import React from 'react'

const Image = ({ src }) => {
  return (
    <div className="image">
        <img src='' alt="" className="image-img" />
        <p>{src["name"]}</p>
    </div>
  )
}

export default Image