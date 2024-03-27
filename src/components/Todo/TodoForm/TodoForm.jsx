import { useState } from 'react';
import uniqid from "uniqid";
import style from './TodoForm.module.scss'

const TodoForm = ({ setTodos }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            const newTodo = { id: uniqid(), text: inputValue, isComplete: false };
            setTodos(prevTodos => [...prevTodos, newTodo]);
            setInputValue('');
        }
    };

    return (
        <div className={style.todoForm}>
            <input
                className={style.todoForm__input}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder='введіть задачу'
            />
            <button className={style.todoForm__btn} onClick={handleSubmit}>Додати задачу</button>
        </div>
    );
};

export default TodoForm;