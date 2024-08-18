import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const Table = ({
    mockData,
}) => {

    const removeDuplicates = useCallback((arr) => [...new Set(arr)], []);

    return (
        <Wrapper>
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableHeader>Patient</TableHeader>
                        <TableHeader>Study</TableHeader>
                        <TableHeader>Status</TableHeader>
                        <TableHeader>Timestamp</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockData.map((el) => {
                        return (
                            <React.Fragment key={el.key}>
                                <TableRow>
                                    <TableCell>
                                        {el.patientId} {el.patientName} {el.patientSex}
                                    </TableCell>
                                    <TableCell>
                                        {el.studyDate} {el.studyDescription}
                                    </TableCell>
                                    <TableCell>
                                        {removeDuplicates(el.statusList)?.map((status, idx) => (
                                            <div key={idx}>{status}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell>
                                        {el.studyDate}
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        )
                    })}
                </TableBody>
            </TableContainer>
        </Wrapper>
    )
}

export default Table;

const Wrapper = styled.div``

const TableContainer = styled.table`
border-collapse: separate; /* border-collapse를 separate로 변경 */
border-spacing: 0; /* 셀 간의 간격을 0으로 설정 */

`;

const TableHead = styled.thead`
`;

const TableRow = styled.tr`
&:hover {
    background-color: #fafafa;
}
`;

const TableHeader = styled.th`
padding: 16px;
background-color: #fafafa;
color: rgba(0, 0, 0, 0.88);
border-bottom : 1px solid #f0f0f0;
border-right : 1px solid #f0f0f0;
text-align: left;
&:first-child {
    border-top-left-radius: 8px;
}
&:last-child {
    border-top-right-radius: 8px;
    border-right: none;
}
`;

const TableBody = styled.tbody`
`;

const TableCell = styled.td`
border-bottom : 1px solid #f0f0f0;
padding-block: 16px;
padding-inline: 16px;
font-size: 14px;
`;

// --ant-table-header-bg: #fafafa;
// --ant-table-header-color: rgba(0, 0, 0, 0.88);
// --ant-table-header-sort-active-bg: #f0f0f0;
// --ant-table-header-sort-hover-bg: #f0f0f0;
// --ant-table-body-sort-bg: #fafafa;
// --ant-table-row-hover-bg: #fafafa;
// --ant-table-row-selected-bg: #e6f4ff;
// --ant-table-row-selected-hover-bg: #bae0ff;
// --ant-table-row-expanded-bg: rgba(0, 0, 0, 0.02);
// --ant-table-cell-padding-block: 16px;
// --ant-table-cell-padding-inline: 16px;
// --ant-table-cell-padding-block-md: 12px;
// --ant-table-cell-padding-inline-md: 8px;
// --ant-table-cell-padding-block-sm: 8px;
// --ant-table-cell-padding-inline-sm: 8px;
// --ant-table-border-color: #f0f0f0;
// --ant-table-header-border-radius: 8px;
// --ant-table-footer-bg: #fafafa;
// --ant-table-footer-color: rgba(0, 0, 0, 0.88);
// --ant-table-cell-font-size: 14px;
// --ant-table-cell-font-size-md: 14px;
// --ant-table-cell-font-size-sm: 14px;
// --ant-table-header-split-color: #f0f0f0;
// --ant-table-fixed-header-sort-active-bg: #f0f0f0;
// --ant-table-header-filter-hover-bg: rgba(0, 0, 0, 0.06);
// --ant-table-filter-dropdown-menu-bg: #ffffff;
// --ant-table-filter-dropdown-bg: #ffffff;
// --ant-table-expand-icon-bg: #ffffff;
// --ant-table-selection-column-width: 32px;
// --ant-table-sticky-scroll-bar-bg: rgba(0, 0, 0, 0.25);
// --ant-table-sticky-scroll-bar-border-radius: 100px;
// --ant-table-expand-icon-margin-top: 2.5px;
// --ant-table-header-icon-color: rgba(0, 0, 0, 0.29);
// --ant-table-header-icon-hover-color: rgba(0, 0, 0, 0.57);
// --ant-table-expand-icon-half-inner: 7px;
// --ant-table-expand-icon-size: 17px;
// --ant-table-expand-icon-scale: 0.9411764705882353;

