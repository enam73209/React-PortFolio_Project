import React from 'react';
import { toast } from 'react-hot-toast';


const ToastMessage = ({ message, type }) => {
    const toastOptions = {
        position: 'top-right',
        autoClose: 3000,
    };

    switch (type) {
        case 'success':
            toast.success(message, toastOptions);
            break;
        case 'error':
            toast.error(message, toastOptions);
            break;
        case 'info':
            toast.info(message, toastOptions);
            break;
        case 'warning':
            toast.warning(message, toastOptions);
            break;
        default:
            toast(message, toastOptions);
    }

    return null;
};

export default ToastMessage; // Export the component