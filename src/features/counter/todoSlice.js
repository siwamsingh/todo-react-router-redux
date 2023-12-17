import { createSlice , nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1 , text: "hello lorem",completed: false},],
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
    toggleComplete: (state,action)=>{
      state.todos.map((todo)=> todo.id==action.payload ? todo.completed = !todo.completed : todo)
    }

  },
});

export const { addTodo,toggleComplete} = todoSlice.actions;

export default todoSlice.reducer
