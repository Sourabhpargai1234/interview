import React, { useState, useRef } from 'react';
import '../App.css';

export default function ToastContainer() {
    const [toasts, setToasts] = useState([]);
    const timeoutIds = useRef({});

    const handleClose = (id) => {
        // Clear the timeout for the toast being closed
        clearTimeout(timeoutIds.current[id]);
        // Remove the toast
        setToasts(toasts => toasts.filter(toast => toast.id !== id));
        // Clean up the ref
        delete timeoutIds.current[id];
    };

    const handleClick = (message, type) => {
        const id = new Date().getTime();
        const newToast = { id, message, type };
        setToasts([...toasts, newToast]);

        // Set a timeout to automatically remove the toast after 5 seconds
        const timeoutId = setTimeout(() => {
            handleClose(id);
        }, 5000);
        // Store the timeout ID in the ref
        timeoutIds.current[id] = timeoutId;
    };

    return (
        <div>
            <div className="box">
                <div className="toast-box">
                    {toasts.map(({ id, message, type }) => (
                        <div key={id} className={`toast ${type}`}>
                            {message} <span onClick={() => handleClose(id)}>x</span>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={() => handleClick('Success', 'success')}>Success</button>
            <button onClick={() => handleClick('Error', 'error')}>Error</button>
            <button onClick={() => handleClick('Info', 'info')}>Info</button>
            <button onClick={() => handleClick('Warning', 'warning')}>Warning</button>
        </div>
    );
}
