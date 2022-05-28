import React from 'react'

const Button = (props) => {

  const my_name = JSON.stringify(props.name).replace(/"/g, '');
  const is_vowel = "aeiou".indexOf(my_name[0]) != -1;
  
  if (!is_vowel) {
    return (
        <div className="button">
            <p>this is a {my_name}</p>
            <button className="button-button" onClick={props.onClick}>generate a random pokemon</button>
        </div>
      )
  }
  return (
    <div className="button">
        <p>this is an {my_name}</p>
        <button className="button-button" onClick={props.onClick}>generate a random pokemon</button>
    </div>
  )
}

export default Button