import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                id: 1,
                title: 'Tarea inicial',
                done: false,
            },
            {
                id: 2,
                title: 'Tarea inicial2',
                done: false,
            },
            {
                id: 3,
                title: 'Tarea inicial3',
                done: false,
            },
        ],
        form: {
            titleInput: '',
            idInput: '',
            editMode: false,
        },
    },
    reducers: {
        addTask: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        editTitle: (state, action) => {
            let task = state.todos.find(
                (todo) => todo.id === action.payload.id
            );
            task.title = action.payload.title;
        },
        toggleTask: (state, action) => {
            let task = state.todos.find((todo) => todo.id === action.payload);
            task.done = !task.done;
        },
        changeFormTitleInput: (state, action) => {
            state.form.titleInput = action.payload;
        },
        changeFormIdInput: (state, action) => {
            state.form.idInput = action.payload;
        },
        toggleFormEditMode: (state, action) => {
            state.form.editMode = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    deleteTask,
    toggleTask,
    addTask,
    editTitle,
    todosCount,
    pendingTodosCount,
    changeFormTitleInput,
    changeFormIdInput,
    toggleFormEditMode,
} = todosSlice.actions;
