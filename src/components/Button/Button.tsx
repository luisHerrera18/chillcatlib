import React from "react"; 
import './master.css';


type ButtonProps = {
  label?: string;
  mode?: 'default' | 'light' | 'dark';
}


const Button = (props: ButtonProps) => {

  const {label, mode = 'default'} = props;

  return(
    <button className={`custom-btn ${mode}`}>
      {props.label || "Button"}
    </button>
  );
}

export default Button;