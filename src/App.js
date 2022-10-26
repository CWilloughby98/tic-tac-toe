import React, { useState, useEffect } from 'react';
import Square from './Components/Square';
import { Patterns } from './Components/Patterns';

//Testing git 2

function App() {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState('O')
  const [result, setResult] = useState({winner: 'none', state: 'none'})

  useEffect(() => {

    checkWin()

    if (player === 'X') {
      setPlayer('O')
    } else{
        setPlayer('X')
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board])
  

  useEffect(() => {
    if (result.state !== 'none') {
    alert(`Winning Player: ${result.winner} | ${result.state}`)}
  }, [result])


  const chooseSquare = (squareIndex) => {
    setBoard(board.map((value, index) => {
      if (index === squareIndex && value === '') {
        return player
        } else {
          return value
        }
      })
    )
  }

  const reset = () => {
    setBoard(['', '', '', '', '', '', '', '', ''])
    setPlayer('O')
  }


  const checkWin = () => {
    ifTied()

    Patterns.forEach((currentPattern) => {
      const player1 = board[currentPattern[0]]
      if (player1 === '') return
      let foundWinningPattern = true

      currentPattern.forEach((index) => {
        if (board[index] !== player1) {
          foundWinningPattern = false
        }
      })
      if(foundWinningPattern) {
        setResult({winner: player, state: 'Won'})
        console.log(result)
        return
      }
    })
  }

  const ifTied = () => {
    let filled = true
    board.forEach((square) => {
      if (square === ''){
        filled = false
      }
    })

    if (filled) {
      setResult({winner:'No One', state: 'Tie'})
    }
  }


  return (
    <div className="app">
      <div className='board'>
        <div className='row'>
          <Square value={board[0]} chooseSquare={() => {chooseSquare(0)}} />
          <Square value={board[1]} chooseSquare={() => {chooseSquare(1)}} />
          <Square value={board[2]} chooseSquare={() => {chooseSquare(2)}} />
        </div>
        <div className='row'>
          <Square value={board[3]} chooseSquare={() => {chooseSquare(3)}} />
          <Square value={board[4]} chooseSquare={() => {chooseSquare(4)}} />
          <Square value={board[5]} chooseSquare={() => {chooseSquare(5)}} />
        </div>
        <div className='row'>
          <Square value={board[6]} chooseSquare={() => {chooseSquare(6)}} />
          <Square value={board[7]} chooseSquare={() => {chooseSquare(7)}} />
          <Square value={board[8]} chooseSquare={() => {chooseSquare(8)}} />
        </div>
      </div>
      <button className='reset' onClick={reset}>RESET</button>
    </div>
  );
}

export default App;
