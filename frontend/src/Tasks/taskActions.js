import axios from 'axios';

const baseURL = 'http://localhost:8080/tasks';

const createTask = async (task) => {
    try {
        const response = await axios.post(baseURL, task);
        return response.data;
    } catch (error) {
        throw new Error('Error creating task');
    }
};

const updateTask = async (taskId, updatedTask) => {
    try {
        const response = await axios.put(`${baseURL}/${taskId}`, updatedTask);
        return response.data;
    } catch (error) {
        throw new Error('Error updating task');
    }
};


const deleteTask = async (taskId) => {
    try {
        await axios.delete(`${baseURL}/${taskId}`);
    } catch (error) {
        throw new Error('Error deleting task');
    }
};


export { createTask, updateTask, deleteTask, baseURL };
