// actions
export const addTodo = (todoData) => {
    return {
        type: "ADD_TODO",
        payload: todoData,
    };
};

export const removeTodo = (taskId) => {
    return {
        type: "REMOVE_TODO",
        payload: taskId,
    };
};

// reducer

let init = {
    todo: [],
};
export const todoReducer = (state = init, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todo: [...state.todo, action.payload] };
        case "REMOVE_TODO":
            return {
                ...state,
                todo: state.todo.filter(
                    (item, i) => i !== action.payload
                ),
            };
        default:
            return state;
    }
};
