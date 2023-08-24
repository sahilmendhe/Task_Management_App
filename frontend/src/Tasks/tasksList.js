import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './taskList.css';
import { updateTask } from './taskActions';
import TaskForm from './taskForm'

function TasksList() {
    const [tasks, setTasks] = useState([]);
    const baseURL = 'http://localhost:8080';

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get(`${baseURL}/tasks`);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await axios.delete(`${baseURL}/tasks/${taskId}`);
            await fetchTasks(); // Refresh the task list
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleCreateTask = async (newTaskData) => {
        try {
            await axios.post(`${baseURL}/tasks`, newTaskData);
            await fetchTasks(); // Refresh the task list
            closeCreateModal();
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const handleUpdateSubmit = async (updatedTaskData) => {
        try {
            await updateTask(taskToUpdate._id, updatedTaskData);
            await fetchTasks(); // Refresh the task list
            closeUpdateModal();
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleToggleComplete = async (taskId, isCompleted) => {
        try {
            await axios.patch(`${baseURL}/tasks/${taskId}`, { isCompleted });
            await fetchTasks(); // Refresh the task list
        } catch (error) {
            console.error('Error toggling task completion:', error);
        }
    };

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const openCreateModal = () => setIsCreateModalOpen(true);
    const closeCreateModal = () => setIsCreateModalOpen(false);

    const openUpdateModal = (task) => {
        setTaskToUpdate(task);
        setIsUpdateModalOpen(true);
    };
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setTaskToUpdate(null);
    };

    return (
        <div className='taskList'>
            <div className='headingAddTask'>
                <h1 className="task-list-heading">Task List</h1>
                <button className="add-task-button" onClick={openCreateModal}>
                    Add Task
                </button>
            </div>

            <div className="task-list-container">

                <ul>
                    {tasks.map((task) => (
                        <li key={task._id} className={`task ${task.isCompleted ? 'completed' : ''}`}>
                            <h3 className="task-title">{task.title}</h3>
                            <p className="task-description">{task.description}</p>
                            <div className="task-actions">
                                <button className={`action-button ${task.isCompleted ? 'undo-button' : 'complete-button'}`} onClick={() => handleToggleComplete(task._id, !task.isCompleted)}>
                                    {task.isCompleted ? 'Undo' : 'Complete'}
                                </button>
                                <button className="action-button update-button" onClick={() => openUpdateModal(task)}>
                                    Update
                                </button>
                                <button className="action-button" onClick={() => handleDeleteTask(task._id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <TaskForm
                key='taskCreate'
                isOpen={isCreateModalOpen}
                onRequestClose={closeCreateModal}
                onSubmit={handleCreateTask}
            />
            <TaskForm
                isOpen={isUpdateModalOpen}
                onRequestClose={closeUpdateModal}
                onSubmit={handleUpdateSubmit}
                initialTitle={taskToUpdate?.title || ''}
                initialDescription={taskToUpdate?.description || ''}
            />
        </div>
    );
}

export default TasksList;
