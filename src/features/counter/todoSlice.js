import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromStorage = ()=>{
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
}

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: loadFromStorage(),
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
        searchedFor: false,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editText: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state,action)=>{
      state.todos = state.todos.filter((todo)=>todo.id!==action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    search: (state,action)=>{
      state.todos.forEach((todo)=>{
        if(todo.text.includes(action.payload) && action.payload!=""){
          todo.searchedFor = true;
        }else{
          todo.searchedFor = false;
        }
      })
    },
  },
});

export const { addTodo, toggleComplete , editText ,deleteTodo , search} = todoSlice.actions;

export default todoSlice.reducer;
