import React, {useState} from 'react';

export function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Enter Task'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            />
            <button className='todo-button'>Add Task</button>
        </form>
    )
}