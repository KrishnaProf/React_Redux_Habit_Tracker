import {createSlice} from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {
    addTodo (state, action) {
        state.push({id: Date.now(), text:action.payload, completed:false});
    },
    toggleTodo (state, action) {
        const todo = state.find(todo => todo.id === action.payload);
        if (todo) todo.completed = !todo.completed;
        
  },
    deleteTodo (state, action) {
        return state.filter(todo => todo.id !== action.payload);
    }
}});

export default todoSlice.reducer;

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;