//imports for file
import React, { Component } from 'react';
import Board from './Board';

//class base component
export default class Game extends Component{
    //constructor that accepts props
    constructor(props){
        //calls props from all components
        super(props);
        //sets default states
        this.state = {
            //first player is X
            xIsNext: true,
            stepNumber: 0,
            //array that saves steps in game (9 moves)
            history:[
                {squares: Array(9).fill(null)}
            ]
        }
    }
    handleClick(i){
        //defines history and current for handleClick
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1]; //last item in history
        const squares = current.squares.slice(); //copy of squares and puts in squares
        //X turn or O turn if true x is up if false o is up
        square[i] = this.state.xIsNext?'X':'O';
        //sets new history to history
        this.setState({
            history : history.concat({
                squares : squares
            }),
            xIsNext : !this.state.xIsNext,
            stepNumber : history.length
        });
    }
    render(){
        //constant variables
        //defines history and current state of board
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        return(
            //setting up game, holds Board component and its props click and squares
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)} squares={current.squares}/>
                </div>
            </div>
        )
    }
    }

