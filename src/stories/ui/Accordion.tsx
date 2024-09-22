import React, { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import Select from "./Select";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <AccordionContainer>
            <AccordionItem>
                <AccordionHeader
                    className={activeIndex === 0 ? "active" : ""}
                    onClick={() => toggleAccordion(0)}
                >
                    <AccordionTitleContainer>
                        <OptionsIconAccordionTitleWrapper>
                            {/* <OptionsIcon /> */}
                            <AccordionTitle>Options</AccordionTitle>
                        </OptionsIconAccordionTitleWrapper>
                        <StyledChevronDownIcon className="accordion-icon" />
                    </AccordionTitleContainer>
                </AccordionHeader>
                <AccordionContent className={activeIndex === 0 ? "active" : ""}>
                    <OptionContainer>
                        <OptionListWrapper>
                            <FilterWrapper>
                                <FilterTitle>Filter</FilterTitle>
                                <FilterList>
                                    <div className="ai-service">
                                        <Select />

                                    </div>
                                    <div className="transaction-date">
                                        <Select />
                                    </div>
                                    <div className="filter-data">
                                        <Select />
                                    </div>
                                </FilterList>
                            </FilterWrapper>
                            <SortWrapper>
                                <SortTitle>Sort</SortTitle>
                                <Select />
                            </SortWrapper>
                            <DataSourcesWrapper>
                                <DataSourceTitle>Datasource</DataSourceTitle>
                                <Select />
                            </DataSourcesWrapper>
                        </OptionListWrapper>
                        <ResetButtonWrapper>
                            <button>reset</button>
                        </ResetButtonWrapper>
                    </OptionContainer>
                </AccordionContent>
            </AccordionItem>
        </AccordionContainer>
    );
};

export default Accordion;

const AccordionContainer = styled.div`
  /* accordion 스타일 */
  z-index: 99;
  background-color: red;
  height: 40dvh;
`;

const AccordionItem = styled.div`
  /* accordion-item 스타일 */
`;

const AccordionHeader = styled.button`
  width: 100%;
  background-color: #2c3340;
  border: none;
  text-align: left;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  height: 30px;
  margin: 0;
  padding: 6px 20px;

  &.active .accordion-icon {
    transform: rotate(180deg);
  }
`;

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  color: #fff;
  transition: transform 0.3s ease;
  margin-right: 10px;
`;

const AccordionContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  padding: 0 20px;
  margin: 0;
  background-color: #1e2530;

  &.active {
    max-height: 74px;
  }
`;

const AccordionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const OptionsIconAccordionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AccordionTitle = styled.div`
  margin-left: 8px;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  color: #2effee;
`;

const OptionContainer = styled.div`
  padding: 10px 0px 15px;
  display: flex;
  justify-content: space-between;
`;

const OptionListWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: #acafb8;
`;

const FilterWrapper = styled.div`
  /* FilterWrapper 스타일 */
`;

const FilterTitle = styled.div`
  margin-bottom: 10px;
  width: 26px;
  height: 13px;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  color: #acafb8;
`;

const FilterList = styled.div`
  display: flex;
  gap: 10px;
`;

const SortWrapper = styled.div`
  /* SortWrapper 스타일 */
`;

const SortTitle = styled.div`
  margin-bottom: 10px;
  width: 22px;
  height: 13px;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  color: #acafb8;
`;

const DataSourcesWrapper = styled.div`
  /* DataSourcesWrapper 스타일 */
`;

const DataSourceTitle = styled.div`
  margin-bottom: 10px;
  width: 58px;
  height: 13px;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  color: #acafb8;
`;

const ResetButtonWrapper = styled.div`
  border: 1px solid red;
`;
