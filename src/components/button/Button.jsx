import React from 'react'

const Button = ({ src }) => {
  return (
    <div className="button">
        <button className="button-button">generate a random pokemon</button>
        <p>{src["name"]}</p>
    </div>
  )
}

export default Button