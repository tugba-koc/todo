import { configureStore } from '@reduxjs/toolkit';
import toDoSlice from './todo/todoSlice';

export const store = configureStore({
    reducer: {
        todo : toDoSlice
    }
});

export default store;