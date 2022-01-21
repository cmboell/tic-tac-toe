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
    
    //defines jumpTo so we can restart game or go back turns 
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0
        })
    }

    handleClick(i){
        //defines history and current for handleClick
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1]; //last item in history
        const squares = current.squares.slice(); //copy of squares and puts in squares
        //calls calculateWinner to determine winner
        const winner = calculateWinner(squares);
        //displays winner and also does not let a square with value change during game
        if(winner || squares[i]){
            return;
        }
        //X turn or O turn if true x is up if false o is up
        squares[i] = this.state.xIsNext?'X':'O';
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

        //keeps track of winner  and moves of squares/ winner
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            //if move is null says start game or go to move
            const desc = move ? 'Go to #' + move : 'Start the Game';

            //returns moves
            return (
                //implements jump 
                <li key={move}>
                    <button onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </button>
                </li>
            )
        });
        //define variable and check winner 
        let status;
        if (winner) {
            //sets status to winner if there is one
            status = 'Winner is ' + winner;
        } else if (winner == null) {
            //or tells us next player 
            status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
        }
        else{
            status = 'It is a tie'
        }

        return(
            //setting up game, holds Board component and its props click and squares
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)} squares={current.squares}/>
                </div>
                <div className ="game-info">
                    <ul>{status}</ul>
                    <ul>{moves}</ul>
                </div>
            </div>
            //game-info displays status and moves 
        )
    }
}
//function to determine winner of the game
function calculateWinner(squares){
    //path to calculate winner
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    //for loop to check squares to the lines above
    for (let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        //checks to see if squares exist or not (if an x or o is in it)
        if(squares[a] && squares[a] === squares[b] && squares[b]
            === squares[c] && squares[c]){
                return squares[a];
            }
    }
    return null;
}

