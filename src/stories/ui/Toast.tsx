// Toast.js
import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // 3초 후에 자동으로 사라짐

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="toast">
            {message}
        </div>
    );
};

// export default Toast;

const App = () => {
    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 3000); // 3초 후에 토스트 메시지 사라짐
    };

    return (
        <div className="app">
            <button onClick={handleShowToast}>Show Toast</button>
            {showToast && <Toast message="This is a toast message!" onClose={() => setShowToast(false)} />}
        </div>
    );
};

export default App;