import React from 'react'
import styles from './piece.module.css'
import PropTypes from 'prop-types'
import { DragPreviewImage, useDrag } from 'react-dnd'

function Piece({ type, symbol, x, y }) {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: 'piece', x, y },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <>
            <DragPreviewImage connect={preview} src={null} />
            <div ref={drag} className={`${styles.singlePiece} ${type}`} id={symbol} style={{ opacity: isDragging ? 0.5 : 1 }}>
                {symbol ? String.fromCharCode(symbol) : ''}
            </div>
        </>
    )
}

Piece.propTypes = {
    type: PropTypes.string,
    symbol: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
}


export default Piece