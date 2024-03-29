import React, { useState } from 'react';
import Piece from '../piece/piece'
import BoardCell from '../board-cell/board-cell'
import styles from './board.module.css';
import PropTypes from 'prop-types'
import { pieceTypes, titles } from '../../constants/gameConstants'

const renderSingleCelllWithParams = (pieceProps, isBlackPlaying, isGameEnded) => {
    const { x, y } = pieceProps.location
    const { black } = pieceProps
    let canPlay = isGameEnded ? false : isBlackPlaying ?( black ? true : false ) : ( !black ? true : false )

    return <BoardCell key={`${x}${y}`} x={x} y={y}>
        {pieceProps.type !== pieceTypes.EMPTY ? <Piece type={pieceProps.type} symbol={pieceProps.symbol} x={x} y={y} black={black} canPlay={canPlay} /> : ''}
    </BoardCell>
}

function Board({ playersData, isBlackPlaying, isGameEnded, setGameEnded }) {
    const [playerWonByDefault, setPlayerWonByDefault] = useState(null)

    return (
        <div className={styles.BoardWrapper}>
            {!isGameEnded && <h2 className={styles.WhosPlaying}>{ isBlackPlaying ? titles.BLACK_PLAYING : titles.WHITE_PLAYING }</h2>}
            {isGameEnded && <h2 className={styles.GameEnded}>{ titles.END_GAME } {playerWonByDefault ? playerWonByDefault : !isBlackPlaying ? titles.BLACK : titles.WHITE} Won!</h2>}
            <div className={styles.GameBoard}>
                {playersData && playersData.map(cell => renderSingleCelllWithParams(cell, isBlackPlaying, isGameEnded))}
            </div>
            <div className={styles.BtnWrapper}>
                {!isGameEnded ? <div className={styles.GiveUpBtn} onClick={() => {
                    setPlayerWonByDefault(isBlackPlaying ? titles.WHITE : titles.BLACK)
                    setGameEnded(true)
                }}>Give up ({isBlackPlaying ? titles.BLACK : titles.WHITE})</div> : <></>} 
            </div>
        </div>
    )
}

Board.propTypes = {
    playersData: PropTypes.array.isRequired,
    isBlackPlaying: PropTypes.bool.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    setGameEnded: PropTypes.func
}

export default Board;