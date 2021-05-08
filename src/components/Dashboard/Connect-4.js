import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css'

let winner = false;

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}
  
class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(42).fill(null),
        xIsNext: true,
      };
    }

    handleClick(i) {

      const squares = this.state.squares.slice();

      if (winner || squares[i] != null) {
        return
      }
        

      let temp = i;
      while (squares[temp] == null) {
          if (temp <= 34) {
              if (squares[temp + 7] == null) {
                  temp += 7;
              }
              else break;
          } else break;
      }


      squares[temp] = this.state.xIsNext ? 'B' : 'R';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });

      calculateWinner(squares, temp);
  }

    renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            //className = 'red' 
            onClick={() => this.handleClick(i)}
          />
        );
    }
  
    render() {
        //const winner = calculateWinner(this.state.squares, i);
        let status;
        if (winner) {
          status = 'Winner: ' + (this.state.xIsNext ? 'Red' : 'Black');
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'Black' : 'Red');
        }    

      return (
        <div>
          <h1 className="title">Welcome to Connect-4!</h1>
          <h2 className="subtitle">Click on a row to place piece. Get 4 in a row diagonally, vertically, or horizontally to win!</h2>
          <div className="status">{status}</div>
          <button onClick={refreshPage}>Refresh</button>
          <br></br>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
          </div>
          <div className="board-row">
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
          </div>
          <div className="board-row">
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
          </div>
          <div className="board-row">
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
          </div>
          <div className="board-row">
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
          </div>
          <div className="board-row">
            {this.renderSquare(35)}
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
            {this.renderSquare(40)}
            {this.renderSquare(41)}
          </div>
          <br></br>
        </div>
      );
    }
}

const refreshPage=()=> {
  window.location.reload();
}

export default class Game extends React.Component {
    render() {
      return (
        <div className="game" 
            style={{
            // position: 'absolute', left: '50%', top: '50%',
            // transform: 'translate(-50%, -50%)'
            position: 'flex',
            left: '50%'
            }}>
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{}</div>
            <ol>{}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  /*ReactDOM.render(    
    <Game />,
    document.getElementById('root')
  );
  */

function calculateWinner(squares, i) {
    if (checkDown(squares, i) ||
        checkRight(squares, i) ||
        checkLeft(squares, i) ||
        checkDiagonalUpRight(squares, i) ||
        checkDiagonalUpLeft(squares,i) ||
        checkDiagonalDownRight(squares, i) ||
        checkDiagonalDownLeft(squares, i)) {
          return true;
        }
}

function checkDown(squares, i) {
  let temp = i;
  let won = 3;
  while (squares[temp] != null) {
    if (won === 0) {
      winner = true;
      return true;
    }
    if (temp <= 34 && temp >= 0) {
        if (squares[temp + 7] != null) {
          if (squares[temp] === squares[temp + 7]) {
            temp += 7;
            won--;
          } else break
        } else break
    } else break;
  }
  return false;
}
function checkRight(squares, i) {
  let temp = i;
  let won = 3;
  while (squares[temp] != null) {
    if (won === 0) {
      winner = true;
      return true;
    }
    if (temp <= 41 && temp >= 0) {
        if (squares[temp + 1] != null) {
          if (squares[temp] === squares[temp + 1]) {
            temp += 1;
            won--;
          } else break;
        } else break;
    } else break;
  }
  return false;
}
function checkLeft(squares, i) {
  let temp = i;
  let won = 3;
  while (squares[temp] != null) {
    if (won === 0) {
      winner = true;
      return true;
    }
    if (temp <= 41 && temp >= 0) {
        if (squares[temp - 1] != null) {
          if (squares[temp] === squares[temp - 1]) {
            temp -= 1;
            won--;
          } else break;
        } else break;
    } else break;
  }
  return false;
}

function checkDiagonalUpRight(squares, i) {
  let temp = i;
  let won = 3;
  while (squares[temp] != null) {
    if (won === 0) {
      winner = true;
      return true;
    }
    if (temp <= 41 && temp >= 0) {
        if (squares[temp - 6] != null) {
          if (squares[temp] === squares[temp - 6]) {
            temp -= 6;
            won--;
          } else break;
        } else break;
    } else break;
  }
  return false;
}

function checkDiagonalUpLeft(squares, i) {
  let temp = i;
  let won = 3;
  while (squares[temp] != null) {
    if (won === 0) {
      winner = true;
      return true;
    }
    if (temp <= 41 && temp >= 0) {
        if (squares[temp - 8] != null) {
          if (squares[temp] === squares[temp - 8]) {
            temp -= 8;
            won--;
          } else break;
        } else break;
    } else break;
  }
  return false;
}

function checkDiagonalDownRight(squares, i) {
  let temp = i;
  let won = 3;
  while (squares[temp] != null) {
    if (won === 0) {
      winner = true;
      return true;
    }
    if (temp <= 41 && temp >= 0) {
        if (squares[temp + 8] != null) {
          if (squares[temp] === squares[temp + 8]) {
            temp += 8;
            won--;
          } else break;
        } else break;
    } else break;
  }
  return false;
}

function checkDiagonalDownLeft(squares, i) {
  let temp = i;
  let won = 3;
  while (squares[temp] != null) {
    if (won === 0) {
      winner = true;
      return true;
    }
    if (temp <= 41 && temp >= 0) {
        if (squares[temp + 6] != null) {
          if (squares[temp] === squares[temp + 6]) {
            temp += 6;
            won--;
          } else break;
        } else break;
    } else break;
  }
  return false;
}


const domContainer = document.createElement('div');
ReactDOM.render(<Game />, domContainer);