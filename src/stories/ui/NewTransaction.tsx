import React from 'react';
import styled from 'styled-components';


const NewTransaction = () => {
    return (

        <NewTransactionContainer>

            <NewTransactionTitle>
                New Transaction
            </NewTransactionTitle>
            <SolutionContainer>

                <SelectAiTitle>Select Ai</SelectAiTitle>
                <SolutionWrapper>
                    <div
                        className='solutionList'
                    >ClariCT.AI</div>

                    <div
                        className='solutionList'
                    >ClariCT.AI</div>

                    <div
                        className='solutionList'
                    >ClariCT.AI</div>

                    <div
                        className='solutionList'
                    >ClariCT.AI</div>

                    <div
                        className='solutionList'
                    >ClariCT.AI</div>

                    <div
                        className='solutionList'
                    >ClariCT.AI</div>

                    <div
                        className='solutionList'
                    >ClariCT.AI</div>

                    <div
                        className='solutionList'
                    >ClariCT.AI</div>
                    <div
                        className='solutionList'
                    >ClariCT.AI</div>
                    <div
                        className='solutionList'
                    >ClariCT.AI</div>

                </SolutionWrapper>
            </SolutionContainer>
            <div>
                <div>Select Input</div>
                <div>
                    series table
                </div>
            </div>
        </NewTransactionContainer>
    );
};

export default NewTransaction;

const NewTransactionContainer = styled.div`
background-color: #2c3340;
`

const NewTransactionTitle = styled.div`
border : 1px solid red;
`

const SolutionContainer = styled.div`
border : 1px solid red;
`

const SelectAiTitle = styled.div`
border : 1px solid red;
`

const SolutionWrapper = styled.div`
display :grid;
grid-template-columns: auto auto auto;
.solutionList {
  margin: 10px 15px 10px 10px;
  padding: 13px 20px 13px 15px;
  border-radius: 5px;
  background-color: #3f4859;
}
`