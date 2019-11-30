import React, {useState, useEffect} from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Typography from '@material-ui/core/Typography';
import styles from './App.module.css';
import { style } from '@material-ui/system';

function App() {
  const pieceTypes = {
    ROOK: 'rook', KNIGHT: 'knight', BISHOP: 'bishop', QUEEN: 'queen', KING: 'king', PAWN: 'pawn'
  }

  const renderSingleCelllWithParams = (cellLocation, cellColor, playerProps) => {
    const playerSide = playerProps.html > 9817 ? 'upteam' : 'downteam'
    return <div id={cellLocation} key={cellLocation} onClick={() => onGamePieceClicked(cellLocation)} className={`${styles.SingleBoardCell} ${cellColor} ${playerProps.id} ${playerSide}`}>{playerProps.html ? String.fromCharCode(playerProps.html) : ''}</div>
  }

  const onGamePieceClicked = (cellLocation) => {
    showPossibilitesByPieceLocation(cellLocation)
  }

  const showPossibilitesByPieceLocation = (elementId) => {
    const redBackgroundElements = document.querySelectorAll(`.${styles.optionalMoveBackground}`)
    if(redBackgroundElements.length){
      redBackgroundElements.forEach(element => {
        element.classList.remove(styles.optionalMoveBackground)
      })
    }
    const selectedElement = document.getElementById(elementId)
    if(selectedElement.innerHTML === ''){
      console.log(elementId, "No piece in this cell")
      return
    }
    const locationObject = {
      horizontal: elementId.charAt(0), 
      vertical: elementId.charAt(1),
    }
    const elementClasses = selectedElement.className.split(" ")
    const pieceType = elementClasses.find(className => 
      Object.keys(pieceTypes).indexOf(className.toUpperCase()) !== -1
    );
    const isBlackPiece = elementClasses.indexOf('upteam') !== -1
    console.log(elementId, isBlackPiece? "black" : "white", pieceType)

    const possibleMovesCells = []

    switch(pieceType){
      case pieceTypes.PAWN:
        console.log("PAWN!")
        if(isBlackPiece){
          possibleMovesCells.push(`#${locationObject.horizontal}${Number(locationObject.vertical) -1}`)
          possibleMovesCells.push(`#${locationObject.horizontal}${Number(locationObject.vertical) -2}`)
        }else{
          possibleMovesCells.push(`#${locationObject.horizontal}${Number(locationObject.vertical) + 1}`)
          possibleMovesCells.push(`#${locationObject.horizontal}${Number(locationObject.vertical) + 2}`)
        }
        break;
      default:
        console.log("UNKNOWN")
        break;
    }
    console.log(possibleMovesCells)
    if(possibleMovesCells.length){
      const possibleElements = document.querySelectorAll(possibleMovesCells.join(", "))
      possibleElements.forEach(element => {
        element.classList.add(styles.optionalMoveBackground)
      })
    }
  }
  
  const getBoardCells = () => {
    const cellsPlayers = [
      {html: '9820', id: pieceTypes.ROOK }, {html: '9822', id: pieceTypes.KNIGHT}, {html: '9821', id: pieceTypes.BISHOP}, {html: '9819', id: pieceTypes.QUEEN}, {html: '9818', id: pieceTypes.KING}, {html: '9821', id: pieceTypes.BISHOP}, {html: '9822', id: pieceTypes.KNIGHT}, {html: '9820', id: pieceTypes.ROOK}, // First row
      {html: '9823', id: pieceTypes.PAWN}, {html: '9823', id: pieceTypes.PAWN}, {html: '9823', id: pieceTypes.PAWN}, {html: '9823', id: pieceTypes.PAWN}, {html: '9823', id: pieceTypes.PAWN}, {html: '9823', id: pieceTypes.PAWN}, {html: '9823', id: pieceTypes.PAWN}, {html: '9823', id: pieceTypes.PAWN}, // Second
      '', '', '', '', '', '', '', '', 
      '', '', '', '', '', '', '', '', 
      '', '', '', '', '', '', '', '', 
      '', '', '', '', '', '', '', '',
      {html: '9817', id: pieceTypes.PAWN}, {html: '9817', id: pieceTypes.PAWN}, {html: '9817', id: pieceTypes.PAWN}, {html: '9817', id: pieceTypes.PAWN}, {html: '9817', id: pieceTypes.PAWN}, {html: '9817', id: pieceTypes.PAWN}, {html: '9817', id: pieceTypes.PAWN}, {html: '9817', id: pieceTypes.PAWN},  // Second opponent row
      {html: '9814', id: pieceTypes.ROOK}, {html: '9816', id: pieceTypes.KNIGHT}, {html: '9815', id: pieceTypes.BISHOP}, {html: '9813', id: pieceTypes.QUEEN}, {html: '9812', id: pieceTypes.KING}, {html: '9815', id: pieceTypes.BISHOP}, {html: '9816', id: pieceTypes.KNIGHT}, {html: '9814', id: pieceTypes.ROOK}
    ]
    const boardCells = 64
    const allCells = []
    let switchSides = false;
    let colNum = 8
    let rowChar = 'a'

    for(let i = 0; i < boardCells; i++){
      if(i % 8 === 0 && i !== 0){
        switchSides = !switchSides
        colNum--
        rowChar = 'a'
      }
      const cellColor =  i % 2 === 0 ? switchSides ? styles.DarkCell : styles.LightCell : switchSides ? styles.LightCell : styles.DarkCell
      allCells.push(renderSingleCelllWithParams(rowChar + colNum, cellColor, cellsPlayers[i]))
      rowChar = rowChar.substring(0, rowChar.length - 1)
      + String.fromCharCode(rowChar.charCodeAt(rowChar.length - 1) + 1)
    }
    
    return allCells
  }
  
  return (
    <div className={styles.App}>
      {/* <Typography component="h2" variant="h3">
        Chess Game
      </Typography> */}
      <div className={styles.GameBoard}>
        {getBoardCells()}
      </div>
    </div>
  );
}

export default App;
