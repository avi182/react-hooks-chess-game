import React from 'react'
import styles from './board-cell.module.css'
import Overlay from './overlay'
import PropTypes from 'prop-types'
import { canMoveKnight, moveKnight } from '../../observers/observer'
import { useDrop } from 'react-dnd'

function BoardCell({ x, y, children }) {
    const bgColor = (x + y) % 2 === 1 ? 'white' : 'rgba(255, 0, 0, 0.219)'

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: 'piece',
        canDrop: (item) => canMoveKnight(item.x, item.y, x, y),
        drop: (item) => moveKnight(item.x, item.y, x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    })

    return (
        <>
            <div ref={drop} id={`${x}${y}`}
                style={{ 'backgroundColor': bgColor }}
                className={`${styles.SingleBoardCell}`}>
                {children}
                {isOver && !canDrop && <Overlay color="red" />}
                {!isOver && canDrop && <Overlay color="yellow" />}
                {isOver && canDrop && <Overlay color="green" />}
            </div>
        </>
    )
}

BoardCell.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
}

export default BoardCell