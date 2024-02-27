import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from './ToDoSlice';
import { AppDispatch, RootState } from '../../app/store';
import TaskItem from './Task';
import Loader from '../../Components/Loader/Loader';


const TasksList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { tasks, isLoading } = useSelector((state: RootState) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TasksList;
