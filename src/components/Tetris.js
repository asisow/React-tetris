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
	const [dropTime, setDropTime] = useState(null)
	const [gameOver, setGameOver] = useState(false)

	const [player] = usePlayer()
	const [stage, setStage] = useStage(player)

	console.log('re-render');

	return (
		<StyledTetrisWrapper>
			<StyledTetris>
				<Stage stage={stage} />
				<aside>
					<div>
						<Display text="Score" />
						<Display text="Rows" />
						<Display text="Level" />
					</div>
					<StartButton />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default Tetris;
