import React from 'react';
import Piece from '../piece/piece'
import BoardCell from '../board-cell/board-cell'
import styles from './board.module.css';
import PropTypes from 'prop-types'
import { pieceTypes, titles } from '../../constants/gameConstants'

const renderSingleCelllWithParams = (pieceProps, isBlackPlaying) => {
    const { x, y } = pieceProps.location
    const { black } = pieceProps
    let canPlay = isBlackPlaying ?( black ? true : false ) : ( !black ? true : false )

    return <BoardCell key={`${x}${y}`} x={x} y={y}>
        {pieceProps.type !== pieceTypes.EMPTY ? <Piece type={pieceProps.type} symbol={pieceProps.symbol} x={x} y={y} black={black} canPlay={canPlay} /> : ''}
    </BoardCell>
}

function Board({ playersData, isBlackPlaying }) {
    return (
        <div className={styles.BoardWrapper}>
            <h2 className={styles.WhosPlaying}>{ isBlackPlaying ? titles.BLACK_PLAYING : titles.WHITE_PLAYING }</h2>
            <div className={styles.GameBoard}>
                {playersData && playersData.map(cell => renderSingleCelllWithParams(cell, isBlackPlaying))}
            </div>
        </div>
    )
}

Board.propTypes = {
    playersData: PropTypes.array.isRequired,
    isBlackPlaying: PropTypes.bool.isRequired
}

export default Board;