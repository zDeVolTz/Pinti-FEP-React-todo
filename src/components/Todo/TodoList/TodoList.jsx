import style from './TodoList.module.scss'

const TodoList = ({ todos, setTodos }) => {

    const toggleTodo = (id) => {
        setTodos(prevTodos => 
            prevTodos.map(element => 
                element.id === id ? { ...element, isComplete: !element.isComplete } : element
            )
        );
       
    };

    const sortedTodos = [...todos].sort((a, b) => {

        if (a.isComplete === b.isComplete) {
            return 0;
        } else if (a.isComplete) {
            return -1;
        } else {
            return 1;
        }
    });

    return (
        <div className={style.todoList}>
            <h2 className={style.todoList__title}>Перелік справ</h2>
            <ul className={style.todoList__items}>
                {sortedTodos.map(element => (
                    <li key={element.id} onClick={() => toggleTodo(element.id)} className={`${style.todoList__item} ${element.isComplete ? style.completed : '' }`}>
                        {element.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;