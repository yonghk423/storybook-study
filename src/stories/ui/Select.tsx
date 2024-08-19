import React, { useState } from 'react';
import './Select.css';

const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select an option');

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div
            className="custom-select"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="select-trigger">
                {selectedOption}
            </div>
            {isOpen && (
                <div className="select-options">
                    <div className="select-option" onClick={() => handleOptionClick('Apple')}>Apple</div>
                    <div className="select-option" onClick={() => handleOptionClick('Banana')}>Banana</div>
                    <div className="select-option" onClick={() => handleOptionClick('Orange')}>Orange</div>
                    <div className="select-option" onClick={() => handleOptionClick('Mango')}>Mango</div>
                </div>
            )}
        </div>
    );
};

export default Select;
