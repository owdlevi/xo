import React, { useState } from 'react'
import GameItem from './GameItem'


const Game = () => {
   
    const [gameItems, setGameItems ] = useState(Array(9).fill(''));
    const [turn, setTurn ] = useState('X');
    const [moves, setMoves ] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');

    const updateGame = (itemIndex) => {
        if (gameItems[itemIndex] === '') {
            let newGame = Object.assign([], gameItems, {[itemIndex]: turn});
            setGameItems(newGame);
            setMoves(moves + 1);
            if (moves > 4) checkWinner(newGame);
            if (moves >= 9) setGameOver(true);
            if (!gameOver) setTurn((turn === 'X') ? 'O' : 'X');
            
        }
        
    } 

    const newGame = () => {
        setGameItems(Array(9).fill(''));
        setTurn('X');
        setMoves(1);
        setGameOver(false);
        setWinner('');
    }

    const checkWinner = (gameArr) => {
        console.log('check winner')
        const winningPositions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        
        winningPositions.map(line => {
            const [a,b,c] = line;
            if (gameArr[a] === turn && gameArr[b] === turn && gameArr[c] === turn){
                setGameOver(true);
                setWinner(turn);
            }
        })
    }

    return (
    <div>
        <div className="Game">
            {gameItems.map( (item, index) =>  <GameItem key={index} gameItem={item} gameIndex={index} updateGame={updateGame} /> )}
        </div>
        <div className="gameDashboard">
            { (gameOver) ? <button onClick={() => newGame()}>New game</button> : '' }
            { (winner) ? `Winner is: ${winner}` : '' }
            
        </div>
    </div>
    )
}

export default Game;