import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Board from './components/board/board'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { observe } from './observers/observer'
import bgImage from './assets/bg2.jpg'

function App() {
  const [boardData, setBoardData] = useState(null)
  const [lastUpdate, setLastUpdate] = useState(0)
  const [isBlackPlaying, setPlayingSide] = useState(false)
  const [isGameEnded, setGameEnded] = useState(false)

  useEffect(() => observe((newData) => {
    // console.log(newData)
    if (newData.timeStamp > lastUpdate) {
      setBoardData(newData.cellsPlayers)
      setLastUpdate(newData.timeStamp)
      setPlayingSide(!isBlackPlaying)
      if(newData.gameEnded) setGameEnded(true)
    }
  }))

  return (
    <div className={styles.App} style={{backgroundImage: `url(${bgImage})`}}>
      <DndProvider backend={HTML5Backend}>
        {boardData && <Board playersData={boardData} isBlackPlaying={isBlackPlaying} isGameEnded={isGameEnded} />}
      </DndProvider>
    </div>
  );
}

export default App;
