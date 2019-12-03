import { cellsPlayers } from './gameManager'
import { pieceTypes, rookDirections } from '../constants/gameConstants'

export const getCellByXandY = (x,y) => cellsPlayers.find(cell => cell.location.x === x && cell.location.y === y)
export const piecesFromSameTeam = (pieceOne, pieceTwo) => pieceOne.black === pieceTwo.black

export const isCellEmpty = (cell) => {
    return cell ? cell.type === pieceTypes.EMPTY ? true : false : false
}
export const isCellEmptyOrWithOpponent = (cell, black) => cell.type === pieceTypes.EMPTY || cell.black === !black ? true : false

export const isDiagonalMovePossible = (x, y, toX, toY, pieceData) => {
    let isPossible = false
    let possibleDirection = null
    for(let i = 1; i < 8; i++){
        if(toX === x + i && toY === y + i && isCellEmptyOrWithOpponent(getCellByXandY(toX, toY), pieceData.black)) {
            isPossible = true
            possibleDirection = rookDirections.UP_RIGHT
        } else if (toX === x - i && toY === y - i && isCellEmptyOrWithOpponent(getCellByXandY(toX, toY), pieceData.black)) {
            isPossible = true
            possibleDirection = rookDirections.DOWN_LEFT
        } else if (toX === x - i && toY === y + i && isCellEmptyOrWithOpponent(getCellByXandY(toX, toY), pieceData.black)){
            isPossible = true
            possibleDirection = rookDirections.UP_LEFT
        } else if (toX === x + i && toY === y - i && isCellEmptyOrWithOpponent(getCellByXandY(toX, toY), pieceData.black)) {
            isPossible = true
            possibleDirection = rookDirections.DOWN_RIGHT
        }
    }
    if(isPossible){
        for(let i = 1; i < Math.abs(toX - x); i++){
            switch(possibleDirection){
                case rookDirections.UP_RIGHT:
                    if(!isCellEmpty(getCellByXandY(x + i, y + i))){
                        return false
                    }
                    break
                case rookDirections.UP_LEFT:
                    if(!isCellEmpty(getCellByXandY(x - i, y + i))){
                        return false
                    }
                    break
                case rookDirections.DOWN_RIGHT:
                    if(!isCellEmpty(getCellByXandY(x + i, y - i))){
                        return false
                    }
                    break
                case rookDirections.DOWN_LEFT:
                    if(!isCellEmpty(getCellByXandY(x - i, y - i))){
                        return false
                    }
                    break
                default:
                    break
            }
        }
    }
    return isPossible
}
        
export const isTwoStepVerticalMovePossible = (x, y, toX, toY, pieceData) => {
    return toX === x && (toY >= y - 2 && toY <= y + 2) && isVerticalMovePossible(x, y, toX, toY, pieceData)
}

export const isTwoStepHorizontalMovePossible = (x, y, toX, toY, pieceData) => {
    return toY === y && (toX >= x - 2 && toX <= x + 2) && isHorizontalMovePossible(x, y, toX, toY, pieceData)
}

export const isVerticalMoveIntercepted = (x, y, toX, toY) => {
    for(let i = 1; i < Math.abs(toY - y); i++){
        if(toY < y){
            if(!isCellEmpty(getCellByXandY(x, y - i))){
                return true
            }
        } else {
            if(!isCellEmpty(getCellByXandY(x, y + i))){
                return true
            }
        }
    }
    return false
}

export const isHorizontalMoveIntercepted = (x, y, toX, toY) => {
    for(let i = 1; i < Math.abs(toX - x); i++){
        if(toX < x){
            if(!isCellEmpty(getCellByXandY(x - i, y))){
                return true
            }
        } else {
            if(!isCellEmpty(getCellByXandY(x + 1, y))){
                return true
            }
        }
    }
    return false
}

export const isVerticalMovePossible = (x, y, toX, toY, pieceData) => {
    return toX === x && (toY > 0 && toY <= 8) && !isVerticalMoveIntercepted(x, y, toX, toY) && isCellEmptyOrWithOpponent(getCellByXandY(toX, toY), pieceData.black)
}

export const isHorizontalMovePossible = (x, y, toX, toY, pieceData) => {
    return toY === y && (toX > 0 && toX <= 8) && !isHorizontalMoveIntercepted(x, y, toX, toY) && isCellEmptyOrWithOpponent(getCellByXandY(toX, toY), pieceData.black)
}

export default {isHorizontalMovePossible, isVerticalMovePossible, isVerticalMoveIntercepted, isHorizontalMoveIntercepted, isTwoStepHorizontalMovePossible, isTwoStepVerticalMovePossible, isDiagonalMovePossible, piecesFromSameTeam, getCellByXandY, isCellEmpty}