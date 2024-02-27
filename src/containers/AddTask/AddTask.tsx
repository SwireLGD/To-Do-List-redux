import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../ToDoList/ToDoSlice';
import { AppDispatch } from '../../app/store';


const AddTaskForm: React.FC = () => {
    const [content, setContent] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!content.trim()) return;
        dispatch(addTask(content));
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New task"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTaskForm;
