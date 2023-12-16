import { createSlice , nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1 , text: "hello",completed: false},],
  },
  reducers: {
    addTodo: (state,action)=>{
        const todo = {
            id: nanoid(),
            text: action.payload,
            completed: false
        };
        state.todos.push(todo);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer
