import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    activeFilter: "all",
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ text }) => {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },

    destroy: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggle: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item
      );
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    removeAll: (state) => {
      state.items = [];
    },
  },
});

export const selectTodos = (state) => state.todo.items;
export const selectActiveFilter = (state) => state.todo.activeFilter;
export const selectFilteredTodos = (state) => {
  if (state.todo.activeFilter === "all") {
    return state.todo.items;
  } else if (state.todo.activeFilter === "active") {
    return state.todo.items.filter((item) => !item.completed); 
  } else if (state.todo.activeFilter === "completed") {
    return state.todo.items.filter((item) => item.completed);
  } 
};

export const { addTodo, destroy, toggle, changeActiveFilter, removeAll } =
  todoSlice.actions;
export default todoSlice.reducer;
