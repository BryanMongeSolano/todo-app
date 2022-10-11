import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                id: new Date().getTime(),
                title: 'Tarea 1',
                done: false,
            },
            {
                id: new Date().getTime() * 2,
                title: 'Tarea 2',
                done: false,
            },
            {
                id: new Date().getTime() * 3,
                title: 'Tarea 3',
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
            const todo = {
                id: new Date().getTime(),
                title: action.payload,
                done: false,
            };
            state.todos.push(todo);
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
            state.form.editMode = action.payload.newState;

            if (!action.payload.newState) {
                state.form.titleInput = '';
                state.form.idInput = '';
            } else {
                state.form.titleInput = action.payload.todo.title;
                state.form.idInput = action.payload.todo.id;
            }
        },
    },
});

export const {
    deleteTask,
    toggleTask,
    addTask,
    editTitle,
    changeFormTitleInput,
    changeFormIdInput,
    toggleFormEditMode,
} = todosSlice.actions;
