import React from "react";
import Board from "./Board/Board";
import './game.css';
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board routeChange={this.props.routeChange}/>
          </div>
          <div className="game-info">
            <div>{/* status*/ }</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}
  
export default Game;