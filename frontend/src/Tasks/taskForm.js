import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './taskForm.css';


Modal.setAppElement('#root');

function TaskForm({ isOpen, onRequestClose, onSubmit, initialTitle, initialDescription }) {
    const [title, setTitle] = useState(initialTitle || '');
    const [description, setDescription] = useState(initialDescription || '');

    useEffect(() => {
        setTitle(initialTitle || '');
        setDescription(initialDescription || '');
    }, [initialTitle, initialDescription]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="modal-overlay"
        >
            <div className="modal-content">
                <h2 className="modal-title">{initialTitle ? 'Update Task' : 'Create Task'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="form-button submit-button">
                            {initialTitle ? 'Update' : 'Create'}
                        </button>
                        <button type="button" className="form-button cancel-button" onClick={onRequestClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default TaskForm;
