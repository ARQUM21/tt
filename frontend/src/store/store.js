import { configureStore } from '@reduxjs/toolkit';
import TasksReducer from './features/TasksReducer';



export const store = configureStore({
    reducer:{
        tasks: TasksReducer,
    }
})