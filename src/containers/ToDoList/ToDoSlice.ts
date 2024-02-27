import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { Task } from '../../types';

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: []
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axiosApi.get('/tasks.json');
    return Object.keys(response.data).map(key => ({
        id: key,
        ...response.data[key]
    }));
});

export const addTask = createAsyncThunk('tasks/addTask', async (content: string) => {
    const response = await axiosApi.post('/tasks.json', { content, done: false });
    return { id: response.data.name, content, done: false };
});

export const toggleTaskStatus = createAsyncThunk('tasks/toggleTaskStatus', async ({ id, done }: { id: string; done: boolean }) => {
    await axiosApi.patch(`/tasks/${id}.json`, { done });
    return { id, done };
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: string) => {
    await axiosApi.delete(`/tasks/${id}.json`);
    return id;
});

const ToDoSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.unshift(action.payload);
            })
            .addCase(toggleTaskStatus.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(task => task.id === action.payload.id);
                if (index !== -1) {
                    state.tasks[index].done = action.payload.done;
                }
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload);
            });
    }
});

export default ToDoSlice.reducer;