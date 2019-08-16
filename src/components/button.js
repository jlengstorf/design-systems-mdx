import React from "react"

const Button = ({ text = "Submit", type = "submit", onClick = () => {} }) => (
  <button onClick={onClick} type={type}>
    {text}
  </button>
)

export default Button
