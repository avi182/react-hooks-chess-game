import React, {useState} from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Typography from '@material-ui/core/Typography';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={(text) => {
        const trimmedText = text.trim()
        if(trimmedText.length > 0) {
          setTodos([...todos, trimmedText])
        }
      }}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
