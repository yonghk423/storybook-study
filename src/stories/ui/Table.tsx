import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

const Table = ({ mockData }) => {
    // 상태 관리: 클릭된 행을 추적
    const [expandedRow, setExpandedRow] = useState(null);

    // 중복된 상태 제거 함수
    const removeDuplicates = useCallback((arr) => [...new Set(arr)], []);

    // 행 클릭 시 호출되는 함수
    const handleRowClick = (rowIndex) => {
        // 클릭된 행이 이미 열려있으면 닫기, 아니면 열기
        setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
    };

    return (
        <>
            <Accordion />
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
                        {mockData.map((el, index) => (
                            <React.Fragment key={el.key}>
                                <TableRow onClick={() => handleRowClick(index)}>
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
                                {/* 하위 테이블 표시 */}
                                {expandedRow === index && (
                                    <SubTableRow>
                                        <TableCell colSpan={4}>
                                            <SubTable>
                                                <tbody>
                                                    <TableRow>
                                                        <TableCell>Sub Item 1</TableCell>
                                                        <TableCell>Sub Item 2</TableCell>
                                                        <TableCell>Sub Item 3</TableCell>
                                                    </TableRow>
                                                    {/* 추가적인 하위 테이블 행을 여기 추가할 수 있습니다 */}
                                                </tbody>
                                            </SubTable>
                                        </TableCell>
                                    </SubTableRow>
                                )}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </TableContainer>
            </Wrapper>
        </>
    );
};

export default Table;

const Wrapper = styled.div``;

const TableContainer = styled.table`
    border-collapse: separate;
    border-spacing: 0;
`;

const TableHead = styled.thead``;

const TableRow = styled.tr`
    &:hover {
        background-color: #fafafa;
    }
    cursor: pointer;
`;

const TableHeader = styled.th`
    padding: 16px;
    background-color: #fafafa;
    color: rgba(0, 0, 0, 0.88);
    border-bottom: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
    text-align: left;
    &:first-child {
        border-top-left-radius: 8px;
    }
    &:last-child {
        border-top-right-radius: 8px;
        border-right: none;
    }
`;

const TableBody = styled.tbody``;

const TableCell = styled.td`
    border-bottom: 1px solid #f0f0f0;
    padding-block: 16px;
    padding-inline: 16px;
    font-size: 14px;
`;

// 하위 테이블의 행 스타일
const SubTableRow = styled.tr`
    background-color: #f9f9f9;
`;

// 하위 테이블 스타일
const SubTable = styled.table`
    width: 100%;
    background-color: #fff;
    border-collapse: collapse;
    td {
        padding: 8px;
        border: 1px solid #f0f0f0;
    }
`;
