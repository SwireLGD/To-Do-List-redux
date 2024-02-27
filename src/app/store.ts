import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from '../containers/ToDoList/ToDoSlice';

export const store = configureStore({
    reducer: {
        tasks: ToDoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;