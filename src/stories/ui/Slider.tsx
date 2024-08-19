import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
    const [value, setValue] = useState(50);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const thumbPosition = {
        left: `calc(${value}% + (${8 - value * 0.15}px))`
    };

    const sliderStyle = {
        background: `linear-gradient(to right, #4CAF50 ${value}%, #ddd ${value}%)`
    };

    return (
        <div className="slider-container">
            <div className="value-display" style={thumbPosition}>
                <div className="value-arrow"></div>
                {value}
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                style={sliderStyle}
                className="slider"
            />
        </div>
    );
};

export default Slider;
