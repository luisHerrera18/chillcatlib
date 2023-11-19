import React from "react"; 
type ButtonProps = {
  label: string;
}
const Button = (props: ButtonProps) => {
  return <button>
    {props.label || "Button"}
  </button>
}

export default Button;