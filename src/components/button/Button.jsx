import React from 'react'

const Button = (props) => {
  
  return (
    <div className="button">
        <p>this is a {JSON.stringify(props.name).replace(/"/g, '')}</p>
        <button className="button-button" onClick={props.onClick}>generate a random pokemon</button>
    </div>
  )
}

export default Button