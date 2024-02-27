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
        <div>
            <input
                type="checkbox"
                checked={task.done}
                onChange={handleStatusChange}
            />
            {task.content}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;