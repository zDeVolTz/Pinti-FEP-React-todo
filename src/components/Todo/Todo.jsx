import TodoList from './TodoList';
import TodoForm from './TodoForm';
import style from './Todo.module.scss';

const Todo = () => {

    return (
            <section className={style.todoBlock}>
                <TodoForm />
                <TodoList />
            </section>
    );
};

export default Todo;