import React from 'react';
import styled from 'styled-components';

const Select = () => {
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
    ];

    const handleSelect = e => {
        console.log(e.target.value);
    };

    return (
        <SelectContainer>
            <SelectWrapper onChange={handleSelect}>
                {options.map(option => (
                    <SelectOptionList
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </SelectOptionList>
                ))}
            </SelectWrapper>
        </SelectContainer>
    );
};

export default Select;

// Styled-components
const SelectContainer = styled.div``;

const SelectWrapper = styled.select`
  width: 150px;
  height: 26px;
  border-radius: 0; /* border-radius 제거 */
  border: none;
  background-color: #141b26;
  color: #acafb8;
`;

const SelectOptionList = styled.option``;
