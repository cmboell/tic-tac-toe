import React, { Component } from 'react';
import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min';
import Board from './Board';

export default class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            xIsNext: true,
            stepnumber: 0,
            history:[
                {squares: Array(9).fill(null)}
            ]
        }
    }
    render(){
        const histroy = this.state.history;
        const current = history[this.state.stepNumber];
        return(
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)} squares={current.squares}/>
                </div>
            </div>
        )
    }
}
