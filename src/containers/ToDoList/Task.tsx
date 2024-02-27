import React from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../../types';
import { deleteTask, toggleTaskStatus } from './ToDoSlice';
import { AppDispatch } from '../../app/store';

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const dispatch: AppDispatch = useDispatch();

    const handleStatusChange = () => {
        dispatch(toggleTaskStatus({ id: task.id, done: !task.done }));
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <div className='d-flex align-items-center mt-3 border border-1 p-2'>
            <input
                type="checkbox"
                checked={task.done}
                onChange={handleStatusChange}
                className='ms-2 me-2'
            />
            <p className='m-0 fs-5'>{task.content}</p>
            <button className='btn btn-danger ms-auto' onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;