import React from 'react';
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

const TodoForm = ({ saveTodo }) => {
    const [value, setValue] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            saveTodo(value)
            setValue("")
        }}>
        <TextField variant="outlined" placeholder="Add todo" margin="normal" onChange={(e) => { setValue(e.target.value) }} value={value}/>
        </form>
    );
};

TodoForm.propTypes = {
    saveTodo: PropTypes.func
}

export default TodoForm;