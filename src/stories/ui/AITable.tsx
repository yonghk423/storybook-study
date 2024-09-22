import React, { useState } from "react";
import styled from "styled-components";
import Select from "./Select";

const AITable = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [selectedTab, setSelectedTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <AITableContainer>
            <TabContentContainer>

                <SelectWrapper>
                    <SelectList
                    >
                        <option
                            value="tab1">ClariCT.AI</option>
                        <option value="tab2">ClariCT.AI</option>
                        <option value="tab3">ClariCT.AI</option>
                    </SelectList>
                </SelectWrapper>
                <AiPanelsTitle>Control Panels</AiPanelsTitle>

                <TabsContentContainer
                >
                    <TabsContentWrapper>
                        <div className="tabsContentLeftWrapper">
                            <div className="contentBox">
                                <div>Output</div>
                                <Select />
                            </div>
                            <div className="contentBox">
                                <div>Denoise Strength</div>
                                <Select />
                            </div>
                            <div className="contentBox">
                                <div>Denoise Strength</div>
                                <Select />
                            </div>
                            <div className="contentBox">
                                <div>More option</div>
                                <Select />
                            </div>
                        </div>
                        <div className="tabsContentLeftWrapper">
                            <div className="contentBox">
                                <div>View Modes</div>
                                <Select />
                            </div>
                            <div className="contentBox">
                                <div>Denoise Model</div>
                                <Select />
                            </div>
                            <div></div>
                        </div>
                    </TabsContentWrapper>
                    <ButtonWrapper>
                        <button className="resetButton">Reset</button>
                        <button className="reprocessButton">Reprocess</button>
                    </ButtonWrapper>
                    <MetaDataWrapper>
                        <div className="metaDataTitle">MetaData</div>
                        <div className="metaDataList">
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                        </div>
                    </MetaDataWrapper>
                </TabsContentContainer>


            </TabContentContainer>
        </AITableContainer>
    );
}

export default AITable;

const AITableContainer = styled.div`
    display: flex;
    flex:1;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: #171d25;
    color: #acafb8;
    border: 1px solid red;
`;



// 전체 Tab Content를 감싸는 컨테이너 스타일
const TabContentContainer = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  width: 100%;
height: 100%;
  background-color: #171d25;
  border: 1px solid red;

`;

// Select 컴포넌트를 감싸는 Wrapper 스타일
const SelectWrapper = styled.div`
border-bottom: 1px solid #1e242e;
background-color: #2c3340;
border: 1px solid red;
display: flex;
flex:1;
`;

// Select 컴포넌트의 스타일
const SelectList = styled.select`
  width: 100px;
  padding: 10px;
  background-color: #3f4859;
  width: 150px;
  height: 40px;
  border-radius: 0; /* border-radius 제거 */
  border: none;
  background-color: #3f4859;
  color: #acafb8;
  font-size: 10px;
 
`;

// AI Panels의 타이틀 스타일
const AiPanelsTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #acafb8;
  font-size: 11px;
  font-weight: 500;
  background-color: #2c3340;
  border : 1px solid red;
`;

// Tabs Content 스타일
const TabsContentContainer = styled.div`
  background-color: #171d25;
  display: flex;
  flex-direction: column;
    flex:1;
    width: 100%;
    height: 100%;
`;

// Tabs Content 내부 Wrapper 스타일
const TabsContentWrapper = styled.div`
width: 100%;
height: 100%;
  border: 1px solid red;
  display: flex;
  flex : 1;
  justify-content: space-between;
  gap: 20px;
  font-size: 11px;
  .tabsContentLeftWrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

// 버튼 컨테이너 스타일
const ButtonWrapper = styled.div`
width: 100%;
height: 100%;
border: 1px solid red;
  display: flex;
  flex : 1;
  justify-content: space-between;

  .resetButton {
    width: 110px;
    text-align: center;
  height: 30px;
  padding: 5px 6px;
  border-radius: 2px;
  border: solid 1px #3f4859;
  }
  .reprocessButton {
  text-align: center;
    width: 110px;
  height: 30px;
  padding: 5px 6px;
  border-radius: 2px;
  background-color: #3f4859;

    &:hover {
      background-color: #343a40;
    }
  }
`;

// 메타데이터 컨테이너 스타일
const MetaDataWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex: 1;
    border: 1px solid red;

  background-color: #2c3340;

  .metaDataTitle {
    font-weight: bold;
  }
  .metaDataList {
    display: flex;

    div {
      background-color: #2c3340;
    }
  }
`;