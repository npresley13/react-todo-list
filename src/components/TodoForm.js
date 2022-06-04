import React, {useState, useEffect, useRef} from 'react';

export function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    })

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
            ref={inputRef}
            />
            <button className='todo-button'>Add Task</button>
        </form>
    )
}