import { pieceTypes } from '../constants/gameConstants'

let cellsPlayers = [
    { symbol: '9814', type: pieceTypes.ROOK, black: false, location: { x: 8, y: 1 } },
    { symbol: '9816', type: pieceTypes.KNIGHT, black: false, location: { x: 7, y: 1 } },
    { symbol: '9815', type: pieceTypes.BISHOP, black: false, location: { x: 6, y: 1 } },
    { symbol: '9813', type: pieceTypes.QUEEN, black: false, location: { x: 5, y: 1 } },
    { symbol: '9812', type: pieceTypes.KING, black: false, location: { x: 4, y: 1 } },
    { symbol: '9815', type: pieceTypes.BISHOP, black: false, location: { x: 3, y: 1 } },
    { symbol: '9816', type: pieceTypes.KNIGHT, black: false, location: { x: 2, y: 1 } },
    { symbol: '9814', type: pieceTypes.ROOK, black: false, location: { x: 1, y: 1 } },
    { symbol: '9817', type: pieceTypes.PAWN, black: false, location: { x: 8, y: 2 } },
    { symbol: '9817', type: pieceTypes.PAWN, black: false, location: { x: 7, y: 2 } },
    { symbol: '9817', type: pieceTypes.PAWN, black: false, location: { x: 6, y: 2 } },
    { symbol: '9817', type: pieceTypes.PAWN, black: false, location: { x: 5, y: 2 } },
    { symbol: '9817', type: pieceTypes.PAWN, black: false, location: { x: 4, y: 2 } },
    { symbol: '9817', type: pieceTypes.PAWN, black: false, location: { x: 3, y: 2 } },
    { symbol: '9817', type: pieceTypes.PAWN, black: false, location: { x: 2, y: 2 } },
    { symbol: '9817', type: pieceTypes.PAWN, black: false, location: { x: 1, y: 2 } },  // Second opponent row
    { type: pieceTypes.EMPTY, location: { x: 8, y: 3 } },
    { type: pieceTypes.EMPTY, location: { x: 7, y: 3 } },
    { type: pieceTypes.EMPTY, location: { x: 6, y: 3 } },
    { type: pieceTypes.EMPTY, location: { x: 5, y: 3 } },
    { type: pieceTypes.EMPTY, location: { x: 4, y: 3 } },
    { type: pieceTypes.EMPTY, location: { x: 3, y: 3 } },
    { type: pieceTypes.EMPTY, location: { x: 2, y: 3 } },
    { type: pieceTypes.EMPTY, location: { x: 1, y: 3 } },
    { type: pieceTypes.EMPTY, location: { x: 8, y: 4 } },
    { type: pieceTypes.EMPTY, location: { x: 7, y: 4 } },
    { type: pieceTypes.EMPTY, location: { x: 6, y: 4 } },
    { type: pieceTypes.EMPTY, location: { x: 5, y: 4 } },
    { type: pieceTypes.EMPTY, location: { x: 4, y: 4 } },
    { type: pieceTypes.EMPTY, location: { x: 3, y: 4 } },
    { type: pieceTypes.EMPTY, location: { x: 2, y: 4 } },
    { type: pieceTypes.EMPTY, location: { x: 1, y: 4 } },
    { type: pieceTypes.EMPTY, location: { x: 8, y: 5 } },
    { type: pieceTypes.EMPTY, location: { x: 7, y: 5 } },
    { type: pieceTypes.EMPTY, location: { x: 6, y: 5 } },
    { type: pieceTypes.EMPTY, location: { x: 5, y: 5 } },
    { type: pieceTypes.EMPTY, location: { x: 4, y: 5 } },
    { type: pieceTypes.EMPTY, location: { x: 3, y: 5 } },
    { type: pieceTypes.EMPTY, location: { x: 2, y: 5 } },
    { type: pieceTypes.EMPTY, location: { x: 1, y: 5 } },
    { type: pieceTypes.EMPTY, location: { x: 8, y: 6 } },
    { type: pieceTypes.EMPTY, location: { x: 7, y: 6 } },
    { type: pieceTypes.EMPTY, location: { x: 6, y: 6 } },
    { type: pieceTypes.EMPTY, location: { x: 5, y: 6 } },
    { type: pieceTypes.EMPTY, location: { x: 4, y: 6 } },
    { type: pieceTypes.EMPTY, location: { x: 3, y: 6 } },
    { type: pieceTypes.EMPTY, location: { x: 2, y: 6 } },
    { type: pieceTypes.EMPTY, location: { x: 1, y: 6 } },
    { symbol: '9823', type: pieceTypes.PAWN, black: true, location: { x: 8, y: 7 } },
    { symbol: '9823', type: pieceTypes.PAWN, black: true, location: { x: 7, y: 7 } },
    { symbol: '9823', type: pieceTypes.PAWN, black: true, location: { x: 6, y: 7 } },
    { symbol: '9823', type: pieceTypes.PAWN, black: true, location: { x: 5, y: 7 } },
    { symbol: '9823', type: pieceTypes.PAWN, black: true, location: { x: 4, y: 7 } },
    { symbol: '9823', type: pieceTypes.PAWN, black: true, location: { x: 3, y: 7 } },
    { symbol: '9823', type: pieceTypes.PAWN, black: true, location: { x: 2, y: 7 } },
    { symbol: '9823', type: pieceTypes.PAWN, black: true, location: { x: 1, y: 7 } }, // Second
    { symbol: '9820', type: pieceTypes.ROOK, black: true, location: { x: 8, y: 8 } },
    { symbol: '9822', type: pieceTypes.KNIGHT, black: true, location: { x: 7, y: 8 } },
    { symbol: '9821', type: pieceTypes.BISHOP, black: true, location: { x: 6, y: 8 } },
    { symbol: '9819', type: pieceTypes.QUEEN, black: true, location: { x: 5, y: 8 } },
    { symbol: '9818', type: pieceTypes.KING, black: true, location: { x: 4, y: 8 } },
    { symbol: '9821', type: pieceTypes.BISHOP, black: true, location: { x: 3, y: 8 } },
    { symbol: '9822', type: pieceTypes.KNIGHT, black: true, location: { x: 2, y: 8 } },
    { symbol: '9820', type: pieceTypes.ROOK, black: true, location: { x: 1, y: 8 } } // First row
]

let gameEnded = false

let lastUpdate = new Date().getTime()
let observers = []

function emitChange() {
    observers.forEach(o => o && o({ cellsPlayers, timeStamp: lastUpdate, gameEnded }))
}

export function observe(o) {
    observers.push(o)
    emitChange()

    return () => {
        observers = observers.filter(t => t !== o)
    }
}

export function canMovePiece(pieceData, toX, toY) {
    const targetCell = getCellByXandY(toX, toY)

    if(piecesFromSameTeam(pieceData, targetCell)){
        return false
    }
    
    const {x,y} = pieceData

    switch(pieceData.pieceType){
        case pieceTypes.PAWN:
            return toX === x && (toY >= y - 2 && toY <= y + 2) && !isBetweenIntersectedCellAndPlayer(x, y, toX, toY, pieceData.pieceType)
        case pieceTypes.ROOK:
            break;
        case pieceTypes.BISHOP:
            break;
        case pieceTypes.QUEEN:
            break;
        case pieceTypes.KING:
            break;
        case pieceTypes.KNIGHT:{
                const dx = toX - x
                const dy = toY - y
                return (
                    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
                    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
                )}
        default: 
            return;
    }
}

export function moveKnight(fromX, fromY, toX, toY) {
    let isWin = false
    let originCell = null
    let targetCell = null
    for (let i = 0; i < cellsPlayers.length; i++) {
        if (cellsPlayers[i].location.x === fromX && cellsPlayers[i].location.y === fromY) {
            originCell = i
        }
        if (cellsPlayers[i].location.x === toX && cellsPlayers[i].location.y === toY) {
            targetCell = i
        }
        if (originCell != null && targetCell != null) {
            break
        }
    }
    const pieceObject = { ...cellsPlayers[originCell], location: { x: toX, y: toY } }
    const emptySlotPosition = { type: pieceTypes.EMPTY, location: { x: fromX, y: fromY } }
    if(cellsPlayers[targetCell].type === pieceTypes.QUEEN){
        isWin = true;
    }
    cellsPlayers[targetCell] = pieceObject
    cellsPlayers[originCell] = emptySlotPosition
    lastUpdate = new Date().getTime()
    if(isWin) gameEnded = true
    emitChange()
}

const getCellByXandY = (x,y) => cellsPlayers.find(cell => cell.location.x === x && cell.location.y === y)
const piecesFromSameTeam = (pieceOne, pieceTwo) => pieceOne.black === pieceTwo.black
const isBetweenIntersectedCellAndPlayer = (fromX, fromY, toX, toY, pieceType) => {
    switch(pieceType){
        case pieceTypes.PAWN:{
            if(toY > fromY){
                const diff = (toY - fromY) - 1
                for(let i = 1; i <= diff; i++){
                    const checkedCell = getCellByXandY(toX, toY - i)
                    if(!isCellEmpty(checkedCell)){
                        return true
                    }
                }
            }else{
                const diff = (fromY - toY) - 1
                for(let i = 1; i <= diff; i++){
                    const checkedCell = getCellByXandY(toX, toY + i)
                    if(!isCellEmpty(checkedCell)){
                        return true
                    }
                }
            }
            return false
        }
        default:
            break;
    }
    return false
}
const isCellEmpty = (cell) => cell.type === pieceTypes.EMPTY ? true : false