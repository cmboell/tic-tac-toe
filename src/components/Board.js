//imports for file
import React, { Component } from 'react';
import Square from './Square';

//class based component
export default class Board extends Component {
    //excepts index and returns a component and returns a Square value
    renderSquare(i){
        return <Square value={this.props.squares[i]} //returns
        onClick={()=>this.props.onClick(i)} //comes from parent component
        />
    }
    render() {
        return (
            //div to create board 
            //each div creates 3 squares (total 9 squares)
            <div> 
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
            //0-8 indicates square position in board
        )
    }
}