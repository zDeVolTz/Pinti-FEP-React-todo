import { ADD_TODO, TOGGLE_TODO } from '../utils/constans/actions';

export const addTodo = function(todo) {
    return {
        type : ADD_TODO,
        payload : todo
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};