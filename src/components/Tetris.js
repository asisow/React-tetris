import React from 'react';

import { createStage } from '../gameHelpers';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

import { usePlayer } from '../Hooks/usePlayer';
import { useStage } from '../Hooks/useStage';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { useState } from 'react';

const Tetris = ({ type }) => {
	const [ dropTime, setDropTime ] = useState(null);
	const [ gameOver, setGameOver ] = useState(false);

	const [ player ] = usePlayer();
	const [ stage, setStage ] = useStage(player);

	console.log('re-render');

	const movePlayer = dir => {

	}

	const startGame = () => {
		// Reset everything
		setStage(createStage())
		// resetPlayer()
	}

	const drop = () => {
		// updatePlayerPos({x: 0, y: 1б, collided: false})
	}

	const dropPlayer = () => {
		drop()
	}

	const move = ({keyCode}) => {
		if (!gameOver) {
			if (keyCode === 37) {
				movePlayer(-1)
			} else if (keyCode === 39) {
				movePlayer(1)
			} else if (keyCode = 40) {
				dropPlayer()
			}
		}
	}

	return (
		<StyledTetrisWrapper role='button' tabIndex="0" onKeyDown={e => move(e)}>
			<StyledTetris>
				<Stage stage={stage} />
				<aside>
					{gameOver ? (
						<Display gameOver={gameOver} text="Game Over" />
					) : (
						<div>
							<Display text="Score" />
							<Display text="Rows" />
							<Display text="Level" />
						</div>
					)}
					<StartButton onClick={startGame} />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default Tetris;
