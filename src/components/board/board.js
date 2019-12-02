import React from 'react';
import Piece from '../piece/piece'
import BoardCell from '../board-cell/board-cell'
import styles from './board.module.css';
import PropTypes from 'prop-types'
import { pieceTypes } from '../../constants/gameConstants'

const renderSingleCelllWithParams = (pieceProps) => {
    const { x, y } = pieceProps.location
    return <BoardCell key={`${x}${y}`} x={x} y={y}>
        {pieceProps.type !== pieceTypes.EMPTY ? <Piece type={pieceProps.type} symbol={pieceProps.symbol} x={x} y={y} /> : ''}
    </BoardCell>
}

function Board({ playersData }) {
    return (
        <div className={styles.GameBoard}>
            {playersData && playersData.map(cell => renderSingleCelllWithParams(cell))}
        </div>
    )
}

Board.propTypes = {
    playersData: PropTypes.array.isRequired
}

export default Board;