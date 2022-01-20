import React from 'react'

export default function Square(props){
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
}