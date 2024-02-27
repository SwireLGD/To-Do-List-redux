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
        <form className='d-flex justify-content-center mt-3' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New task"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className='w-75'
            />
            <button type="submit" className='btn btn-primary rounded-0'>Add</button>
        </form>
    );
};

export default AddTaskForm;
