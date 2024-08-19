import React, { useState } from 'react';
import './Accordion.css';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <div className="accordion-item">
                <button
                    className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(0)}
                >
                    <ChevronDownIcon className="accordion-icon" />
                    Section 1
                </button>
                <div className={`accordion-content ${activeIndex === 0 ? 'active' : ''}`}>
                    <p>This is the content of section 1.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
