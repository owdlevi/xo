import React from 'react';

const GameItem = (props) => {
    const color = (props.gameItem === 'X') ? 'black' : 'red';
    const gameClass = `square ${color}`;

    return (
        <div className={gameClass} onClick={() => props.updateGame(props.gameIndex)}>
            {props.gameItem}
        </div>
    )
}

export default GameItem;