import React from "react";
import Board from "./Board/Board";
import './game.css';
import Comments from "../../shared/comment/Comments";
class Game extends React.Component {
    render() {
      return (
        <>
        <div className="game">
          <div className="game-board">
            <Board routeChange={this.props.routeChange}/>
          </div>
          <div className="game-info">
            <div>{/* status*/ }</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        <Comments/>
        </>
      );
    }
}
  
export default Game;