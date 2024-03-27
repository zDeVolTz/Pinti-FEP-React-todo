import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import style from './Todo.module.scss';

const Todo = () => {

    const [todos, setTodos] = useState([]);

    return (
            <section className={style.todoBlock}>
                <TodoForm 
                    setTodos={setTodos}
                />
                <TodoList 
                    todos={todos} 
                    setTodos={setTodos} 
                />
            </section>
    );
};

export default Todo;