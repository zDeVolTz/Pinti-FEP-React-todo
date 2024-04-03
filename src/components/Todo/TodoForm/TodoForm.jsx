import { useState } from 'react';
import uniqid from "uniqid";
import style from './TodoForm.module.scss'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../actions/todos.actions';

const TodoForm = () => {

    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch()

    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            const newTodo = { id: uniqid(), text: inputValue, isComplete: false };
            dispatch(addTodo(newTodo));
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