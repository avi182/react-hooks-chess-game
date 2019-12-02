import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Board from './components/board/board'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { observe } from './observers/observer'

function App() {
  const [boardData, setBoardData] = useState(null)
  const [lastUpdate, setLastUpdate] = useState(0)

  useEffect(() => observe((newData) => {
    if (newData.timeStamp >= lastUpdate) {
      setBoardData(newData.cellsPlayers)
      setLastUpdate(newData.timeStamp)
    }
  }))

  return (
    <div className={styles.App}>
      <DndProvider backend={HTML5Backend}>
        {boardData && <Board playersData={boardData} />}
      </DndProvider>
    </div>
  );
}

export default App;
