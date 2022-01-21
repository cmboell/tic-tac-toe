import React from 'react'
//functional react component   //props is a parameter
export default function Square(props){
    //creates button           onClick to react to click 
    <button className="square" onClick={props.onClick}>
        {props.value} 
    </button>
    //props.value is caption of the button
}