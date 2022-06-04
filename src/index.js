import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoList } from './components/TodoList';
import "./App.css";


function App() {
    return (
        <div>
            <TodoList />
        </div>
    )     
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);