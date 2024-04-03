import { ADD_TODO, TOGGLE_TODO } from "../utils/constans/actions";

const initialState = {
    todos: []
};

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos : state.todos.map(element => 
                    element.id === action.payload ? { ...element, isComplete: !element.isComplete } : element
                )
            }  
        default :
            return state
    } 
}
