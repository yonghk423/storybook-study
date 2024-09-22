import React from 'react';

const SidePanel = () => {
    return (
        <div>
            SidePanel
        </div>
    );
};

export default SidePanel;

// import classnames from 'classnames';
// import PropTypes from 'prop-types';
// import React, { CSSProperties, useCallback, useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';

// import Icon from '../Icon';
// import Tooltip from '../Tooltip';
// import styled from 'styled-components';

// type StyleMap = {
//   open: {
//     left: { marginLeft: string };
//     right: { marginRight: string };
//   };
//   closed: {
//     left: { marginLeft: string };
//     right: { marginRight: string };
//   };
// };
// const borderSize = 4;
// const collapsedWidth = 25;
// const closeIconWidth = 30;
// const gridHorizontalPadding = 10;
// const tabSpacerWidth = 2;

// const baseClasses =
//   'transition-all duration-300 ease-in-out bg-black border-black justify-start box-content flex flex-col';

// const classesMap = {
//   open: {
//     left: `mr-1`,
//     right: `ml-1`,
//   },
//   closed: {
//     left: `mr-2 items-end`,
//     right: `ml-2 items-start`,
//   },
// };

// const openStateIconName = {
//   left: 'side-panel-close-left',
//   right: 'side-panel-close-right',
// };

// const getTabWidth = (numTabs: number) => {
//   if (numTabs < 3) {
//     return 68;
//   } else {
//     return 40;
//   }
// };

// const getGridWidth = (numTabs: number, gridAvailableWidth: number) => {
//   const spacersWidth = (numTabs - 1) * tabSpacerWidth;
//   const tabsWidth = getTabWidth(numTabs) * numTabs;

//   if (gridAvailableWidth > tabsWidth + spacersWidth) {
//     return tabsWidth + spacersWidth;
//   }

//   return gridAvailableWidth;
// };

// const getNumGridColumns = (numTabs: number, gridWidth: number) => {
//   if (numTabs === 1) {
//     return 1;
//   }

//   // Start by calculating the number of tabs assuming each tab was accompanied by a spacer.
//   const tabWidth = getTabWidth(numTabs);
//   const numTabsWithOneSpacerEach = Math.floor(gridWidth / (tabWidth + tabSpacerWidth));

//   // But there is always one less spacer than tabs, so now check if an extra tab with one less spacer fits.
//   if (
//     (numTabsWithOneSpacerEach + 1) * tabWidth + numTabsWithOneSpacerEach * tabSpacerWidth <=
//     gridWidth
//   ) {
//     return numTabsWithOneSpacerEach + 1;
//   }

//   return numTabsWithOneSpacerEach;
// };

// const getGridStyle = (
//   side: string,
//   numTabs: number = 0,
//   gridWidth: number,
//   expandedWidth: number
// ): CSSProperties => {
//   const relativePosition = Math.max(0, Math.floor(expandedWidth - gridWidth) / 2 - closeIconWidth);
//   return {
//     position: 'relative',
//     ...(side === 'left' ? { right: `${relativePosition}px` } : { left: `${relativePosition}px` }),
//     width: `${gridWidth}px`,
//   };
// };

// const getTabClassNames = (
//   numColumns: number,
//   numTabs: number,
//   tabIndex: number,
//   isActiveTab: boolean,
//   isTabDisabled: boolean
// ) =>
//   classnames('h-[28px] mb-[2px] cursor-pointer text-white bg-black', {
//     'hover:text-primary-active': !isActiveTab && !isTabDisabled,
//     'rounded-l': tabIndex % numColumns === 0,
//     'rounded-r': (tabIndex + 1) % numColumns === 0 || tabIndex === numTabs - 1,
//   });

// const getTabStyle = (numTabs: number) => {
//   return {
//     width: `${getTabWidth(numTabs)}px`,
//   };
// };

// const getTabIconClassNames = (numTabs: number, isActiveTab: boolean) => {
//   return classnames('h-full w-full flex items-center justify-center', {
//     'bg-customblue-40': isActiveTab,
//     rounded: isActiveTab,
//   });
// };
// const createStyleMap = (
//   expandedWidth: number,
//   borderSize: number,
//   collapsedWidth: number
// ): StyleMap => {
//   const collapsedHideWidth = expandedWidth - collapsedWidth - borderSize;

//   return {
//     open: {
//       left: { marginLeft: '0px' },
//       right: { marginRight: '0px' },
//     },
//     closed: {
//       left: { marginLeft: `-${collapsedHideWidth}px` },
//       right: { marginRight: `-${collapsedHideWidth}px` },
//     },
//   };
// };

// const getToolTipContent = (label: string, disabled: boolean) => {
//   return (
//     <>
//       <div>{label}</div>
//       {disabled && <div className="text-white">{'Not available based on current context'}</div>}
//     </>
//   );
// };

// const createBaseStyle = (expandedWidth: number) => {
//   return {
//     maxWidth: `${expandedWidth}px`,
//     width: `${expandedWidth}px`,
//     // To align the top of the side panel with the top of the viewport grid, use position relative and offset the
//     // top by the same top offset as the viewport grid. Also adjust the height so that there is no overflow.
//     // position: 'relative',
//     // top: '0.2%',
//     // height: '99.8%',
//   };
// };
// const SidePanel = ({
//   side,
//   className,
//   activeTabIndex: activeTabIndexProp = null,
//   tabs,
//   onOpen,
//   expandedWidth = 248,
//   onActiveTabIndexChange,
// }) => {
//   const { t } = useTranslation('SidePanel');

//   const panelExpandedWidth = side === 'left' ? 248 : 400;
//   const [panelOpen, setPanelOpen] = useState(activeTabIndexProp !== null);

//   const [activeTabIndex, setActiveTabIndex] = useState(0);

//   const styleMap = createStyleMap(panelExpandedWidth, borderSize, collapsedWidth);
//   const baseStyle = createBaseStyle(panelExpandedWidth);
//   const gridAvailableWidth = panelExpandedWidth - closeIconWidth - gridHorizontalPadding;
//   const gridWidth = getGridWidth(tabs.length, gridAvailableWidth);
//   const openStatus = panelOpen ? 'open' : 'closed';
//   const style = Object.assign({}, styleMap[openStatus][side], baseStyle);

//   useEffect(() => {
//     updatePanelOpen(!panelOpen);
//   }, []);

//   const updatePanelOpen = useCallback(
//     (panelOpen: boolean) => {
//       console.log("panelOpen" , panelOpen)
//       setPanelOpen(panelOpen);
//       if (panelOpen && onOpen) {
//         onOpen();
//       }
//     },
//     [onOpen]
//   );

//   const updateActiveTabIndex = useCallback(
//     (activeTabIndex: number) => {
//       if (activeTabIndex === null) {
//         // updatePanelOpen(false);
//         return;
//       }

//       setActiveTabIndex(activeTabIndex);
//       updatePanelOpen(true);

//       if (onActiveTabIndexChange) {
//         onActiveTabIndexChange({ activeTabIndex });
//       }
//     },
//     [onActiveTabIndexChange, updatePanelOpen]
//   );

//   useEffect(() => {
//     updateActiveTabIndex(activeTabIndexProp);
//   }, [activeTabIndexProp, updateActiveTabIndex]);

//   const getCloseStateComponent = () => {
//     const _childComponents = Array.isArray(tabs) ? tabs : [tabs];
//     return (
//       <>
//         <div
//           className={classnames(
//             'bg-secondary-dark flex h-[28px] w-full cursor-pointer items-center rounded-md',
//             side === 'left' ? 'justify-end pr-2' : 'justify-start pl-2'
//           )}
//           onClick={() => {
//             updatePanelOpen(!panelOpen);
//           }}
//           data-cy={`side-panel-header-${side}`}
//         >
//           <Icon
//             name={'navigation-panel-right-reveal'}
//             className={classnames('text-primary-active', side === 'left' && 'rotate-180 transform')}
//           />
//         </div>
//         <div className={classnames('mt-3 flex flex-col space-y-3')}>
//           {_childComponents.map((childComponent, index) => (
//             <Tooltip
//               position={side === 'left' ? 'right' : 'left'}
//               key={index}
//               content={getToolTipContent(childComponent.label, childComponent.disabled)}
//               className={classnames(
//                 'flex items-center',
//                 side === 'left' ? 'justify-end ' : 'justify-start '
//               )}
//             >
//               <div
//                 id={`${childComponent.name}-btn`}
//                 data-cy={`${childComponent.name}-btn`}
//                 className="text-primary-active hover:cursor-pointer"
//                 onClick={() => {
//                   return childComponent.disabled ? null : updateActiveTabIndex(index);
//                 }}
//               >
//                 <Icon
//                   name={childComponent.iconName}
//                   className={classnames({
//                     'text-primary-active': true,
//                     'ohif-disabled': childComponent.disabled,
//                   })}
//                   style={{
//                     width: '22px',
//                     height: '22px',
//                   }}
//                 />
//               </div>
//             </Tooltip>
//           ))}
//         </div>
//       </>
//     );
//   };

//   const getCloseIcon = () => {
//     return (
//       <div
//         className={classnames(
//           'flex h-[28px] cursor-pointer items-center justify-center',
//           side === 'left' ? 'order-last' : 'order-first'
//         )}
//         style={{ width: `${closeIconWidth}px` }}
//         onClick={() => {
//           updatePanelOpen(!panelOpen);
//         }}
//         data-cy={`side-panel-header-${side}`}
//       >
//         <Icon
//           name={openStateIconName[side]}
//           className="text-primary-active"
//         />
//       </div>
//     );
//   };

//   console.log("tabs", tabs)

//   const extendedTabs = [
//     ...tabs,
//     {
//       id: "header-panel",
//       iconName: "tab-header",
//       iconLabel: "Header",
//       label: "Header",
//       name: "headerPanel",
//       content: () => <div>Header Content</div>
//     },
//     {
//       id: "ai-panel",
//       iconName: "tab-ai",
//       iconLabel: "AI",
//       label: "AI",
//       name: "aiPanel",
//       content: () =>  <AITableContainer>
//       <TabContentContainer>
//           <SelectWrapper>
//               <SelectList
//               >
//                   <option
//                       value="tab1">ClariCT.AI</option>
//                   <option value="tab2">ClariCT.AI</option>
//                   <option value="tab3">ClariCT.AI</option>
//               </SelectList>
//           </SelectWrapper>
//           <AiPanelsTitle>Control Panels</AiPanelsTitle>

//           <TabsContentContainer
//           >
//               <TabsContentWrapper>
//                   <div className="tabsContentLeftWrapper">
//                       <div className="contentBox">
//                           <div>Output</div>
//                           {/* <Select /> */}
//                       </div>
//                       <div className="contentBox">
//                           <div>Denoise Strength</div>
//                           {/* <Select /> */}
//                       </div>
//                       <div className="contentBox">
//                           <div>Denoise Strength</div>
//                           {/* <Select /> */}
//                       </div>
//                       <div className="contentBox">
//                           <div>More option</div>
//                           {/* <Select /> */}
//                       </div>
//                   </div>
//                   <div className="tabsContentLeftWrapper">
//                       <div className="contentBox">
//                           <div>View Modes</div>
//                           {/* <Select /> */}
//                       </div>
//                       <div className="contentBox">
//                           <div>Denoise Model</div>
//                           {/* <Select /> */}
//                       </div>
//                       <div></div>
//                   </div>
//               </TabsContentWrapper>
//               <ButtonWrapper>
//                   <button className="resetButton">Reset</button>
//                   <button className="reprocessButton">Reprocess</button>
//               </ButtonWrapper>
//               <MetaDataWrapper>
//                   <div className="metaDataTitle">MetaData</div>
//                   <div className="metaDataList">
//                       <div>1</div>
//                       <div>1</div>
//                       <div>1</div>
//                       <div>1</div>
//                       <div>1</div>
//                       <div>1</div>
//                   </div>
//               </MetaDataWrapper>
//           </TabsContentContainer>
//       </TabContentContainer>
//   </AITableContainer>
//     },
//   ];
// //TODO : 순서를 바꾸면 좌측 패널 썸네일 리스트가 렌더링이 안됨 임시로 reverse로 해결
//   console.log("extendedTabs", extendedTabs)

//   const getTabGridComponent = () => {
//     const numCols = getNumGridColumns(tabs.length, gridWidth);

//     return (
//       <SidePanelContainer

//       // className={classnames('flex grow ', side === 'right' ? 'justify-start' : 'justify-end')}
//       >
//         <SidePanelWrapper

//           // className={classnames('bg-primary-dark text-primary-active flex flex-wrap')}
//           // style={getGridStyle(side, tabs.length, gridWidth, panelExpandedWidth)}
//         >
//           {extendedTabs.reverse().map((tab, tabIndex) => {
//             const { disabled } = tab;
//             return (
//               <React.Fragment key={tabIndex}>
//                 {tabIndex % numCols !== 0 && (
//                   <div
//                     className={classnames(
//                       'flex h-[28px] w-[2px] items-center bg-black',
//                       tabSpacerWidth
//                     )}
//                   >
//                     <div className="bg-primary-dark h-[20px] w-full"></div>
//                   </div>
//                 )}
//                 <Tooltip
//                   position={'bottom'}
//                   key={tabIndex}
//                   content={getToolTipContent(tab.label, disabled)}
//                 >
//                   <div
//                     className={getTabClassNames(
//                       numCols,
//                       tabs.length,
//                       tabIndex,
//                       tabIndex === activeTabIndex,
//                       disabled
//                     )}
//                     // style={getTabStyle(tabs.length)}
//                     onClick={() => {
//                       return disabled ? null : updateActiveTabIndex(tabIndex);
//                     }}
//                     // data-cy={`${tab.name}-btn`}
//                   >
//                     <div className={getTabIconClassNames(tabs.length, tabIndex === activeTabIndex)}>
//                       {/* <Icon
//                         name={tab.iconName}
//                         className={`${tab.disabled && 'ohif-disabled'}`}
//                         style={{
//                           width: '22px',
//                           height: '22px',
//                         }}
//                       ></Icon> */}
//                       {tab?.iconLabel}
//                     </div>
//                   </div>
//                 </Tooltip>
//               </React.Fragment>
//             );
//           })}
//         </SidePanelWrapper>
//       </SidePanelContainer>
//     );
//   };

//   const getOneTabComponent = () => {
//     return (
//       <div
//         className={classnames(
//           'text-primary-active flex	 grow cursor-pointer select-none justify-center self-center text-[13px]'
//         )}
//         style={{
//           ...(side === 'left'
//             ? { marginLeft: `${closeIconWidth}px` }
//             : { marginRight: `${closeIconWidth}px` }),
//         }}
//         data-cy={`${tabs[0].name}-btn`}
//         onClick={() => updatePanelOpen(!panelOpen)}
//       >
//         <span>{tabs[0].label}</span>
//       </div>
//     );
//   };

//   const getOpenStateComponent = () => {
//     return (
//       <div className="bg-primary-dark flex select-none rounded-t pt-1.5 pb-[2px]	">
//         {/* {getCloseIcon()} */}
//         {tabs.length === 1 ? getOneTabComponent() : getTabGridComponent()}
//       </div>
//     );
//   };

//   return (
//     <div
//       className={classnames(className, baseClasses, classesMap[openStatus][side])}
//       style={style}

//     >
//         <>
//           {getOpenStateComponent()}
//           {extendedTabs.map((tab, tabIndex) => {
//             if (tabIndex === activeTabIndex) {
//               return <tab.content key={tabIndex} />;
//             }
//             return null;
//           })}
//         </>
//       {/* {panelOpen ? (
//       ) : (
//         <React.Fragment>{getCloseStateComponent()}</React.Fragment>
//       )} */}
//     </div>
//   );
// };

// SidePanel.propTypes = {
//   side: PropTypes.oneOf(['left', 'right']).isRequired,
//   className: PropTypes.string,
//   activeTabIndex: PropTypes.number,
//   tabs: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         iconName: PropTypes.string.isRequired,
//         iconLabel: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         content: PropTypes.func, // TODO: Should be node, but it keeps complaining?
//       })
//     ),
//   ]),
//   onOpen: PropTypes.func,
//   onActiveTabIndexChange: PropTypes.func,
//   expandedWidth: PropTypes.number,
// };

// export default SidePanel;

// const SidePanelContainer = styled.div`
// `;

// const SidePanelWrapper = styled.div`
// display: flex;
// `
// const AIContainer = styled.div`
// background-color: red;
// height: 100%;
// `

// const AITableContainer = styled.div`
//     display: flex;
//     flex:1;
//     width: 100%;
//     height: 100%;
//     flex-direction: column;
//     background-color: #171d25;
//     color: #acafb8;
//     border: 1px solid red;
// `;



// // 전체 Tab Content를 감싸는 컨테이너 스타일
// const TabContentContainer = styled.div`
//   display: flex;
//   flex:1;
//   flex-direction: column;
//   width: 100%;
// height: 100%;
//   background-color: #171d25;
//   border: 1px solid red;

// `;

// // Select 컴포넌트를 감싸는 Wrapper 스타일
// const SelectWrapper = styled.div`
// border-bottom: 1px solid #1e242e;
// background-color: #2c3340;
// border: 1px solid red;
// display: flex;
// /* flex:1; */
// `;

// // Select 컴포넌트의 스타일
// const SelectList = styled.select`
//   width: 100px;
//   padding: 10px;
//   background-color: #3f4859;
//   width: 150px;
//   height: 40px;
//   border-radius: 0; /* border-radius 제거 */
//   border: none;
//   background-color: #3f4859;
//   color: #acafb8;
//   font-size: 10px;

// `;

// // AI Panels의 타이틀 스타일
// const AiPanelsTitle = styled.div`
//   font-size: 18px;
//   font-weight: bold;
//   color: #acafb8;
//   font-size: 11px;
//   font-weight: 500;
//   background-color: #2c3340;
//   border : 1px solid red;
// `;

// // Tabs Content 스타일
// const TabsContentContainer = styled.div`
//   background-color: #171d25;
//   display: flex;
//   flex-direction: column;
//     flex:1;
//     width: 100%;
//     height: 100%;
// `;

// // Tabs Content 내부 Wrapper 스타일
// const TabsContentWrapper = styled.div`
// width: 100%;
// height: 100%;
//   border: 1px solid red;
//   display: flex;
//   flex : 1;
//   justify-content: space-between;
//   gap: 20px;
//   font-size: 11px;
//   .tabsContentLeftWrapper {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }
// `;

// // 버튼 컨테이너 스타일
// const ButtonWrapper = styled.div`
// width: 100%;
// height: 100%;
// border: 1px solid red;
//   display: flex;
//   flex : 1;
//   justify-content: space-between;

//   .resetButton {
//     width: 110px;
//     text-align: center;
//   height: 30px;
//   padding: 5px 6px;
//   border-radius: 2px;
//   border: solid 1px #3f4859;
//   }
//   .reprocessButton {
//   text-align: center;
//     width: 110px;
//   height: 30px;
//   padding: 5px 6px;
//   border-radius: 2px;
//   background-color: #3f4859;

//     &:hover {
//       background-color: #343a40;
//     }
//   }
// `;

// // 메타데이터 컨테이너 스타일
// const MetaDataWrapper = styled.div`
// width: 100%;
// height: 100%;
// display: flex;
// flex: 1;
// font-size: 11px;
// border: 1px solid red;

//   background-color: #2c3340;

//   .metaDataTitle {
//     font-weight: bold;
//   }
//   .metaDataList {
//     display: flex;

//     div {
//       background-color: #2c3340;
//     }
//   }
// `;
