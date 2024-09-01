import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select");

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleTriggerClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <CustomSelect className="custom-select">
            <SelectTrigger className="select-trigger" onClick={handleTriggerClick}>
                <SelectMainTitle>{selectedOption}</SelectMainTitle>
                <StyledChevronDownIcon className="chevron-icon" />
            </SelectTrigger>
            <SelectOptions className={`select-options ${isOpen ? "open" : ""}`}>
                <SelectOption
                    className="select-option"
                    onClick={() => handleOptionClick("1")}
                >
                    1
                </SelectOption>
                <SelectOption
                    className="select-option"
                    onClick={() => handleOptionClick("2")}
                >
                    2
                </SelectOption>
                <SelectOption
                    className="select-option"
                    onClick={() => handleOptionClick("3")}
                >
                    3
                </SelectOption>
                <SelectOption
                    className="select-option"
                    onClick={() => handleOptionClick("4")}
                >
                    4
                </SelectOption>
            </SelectOptions>
        </CustomSelect>
    );
};

export default Select;

const CustomSelect = styled.div`
  position: relative;
  /* position: absolute; */
  width: 150px; /* 수정된 width */
  box-sizing: border-box; /* 박스 모델 설정 */
`;

const SelectTrigger = styled.div`
  display: flex;
  align-items: center; /* 텍스트와 아이콘을 수직 중앙 정렬 */
  justify-content: space-between; /* 텍스트와 아이콘 사이 공간을 균등하게 */
  font-size: 16px;
  color: #acafb8;
  border: none; /* 테두리 제거 */
  border-radius: 4px;
  background-color: #141b26;
  padding: 5px 8px;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    /* 필요 시 호버 효과 추가 가능 */
  }
`;

const SelectMainTitle = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  color: #acafb8;
`;

const SelectOptions = styled.div`
  position: absolute;
  top: 100%; /* SelectTrigger 바로 아래에 위치하도록 설정 */
  left: 0;
  width: 100%; /* SelectTrigger의 width와 같게 설정 */
  background-color: #fff;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  /* border-radius: 4px; 옵션 리스트의 border-radius */
  max-height: 0; /* 기본 상태에서 보이지 않도록 설정 */
  overflow: hidden; /* 넘치는 내용 숨기기 */
  opacity: 0; /* 기본 상태에서 보이지 않도록 설정 */
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out; /* 애니메이션 속도 조절 */

  &.open {
    max-height: 200px; /* 최대 높이 설정 */
    opacity: 1; /* 리스트가 보이도록 설정 */
  }
`;

const SelectOption = styled.div`
  font-size: 16px;
  color: #ffffff;
  background-color: #141b26;
  border-radius: 2px;
  padding: 5px 8px; /* padding을 추가하여 클릭 영역 확장 */
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(8, 7, 7, 0.575);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  color: #fff;
`;
