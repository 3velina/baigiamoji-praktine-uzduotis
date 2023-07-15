import styled from 'styled-components';

export const StyledTableRow = styled.div<{ isBeingDeleted: boolean }>`
  display: flex;
  margin-top: ${({ isBeingDeleted }) => (isBeingDeleted ? '30px' : '0')};
  align-items: center;
  padding: 0.25rem 0;
  position: relative;
  height: 56px;

  p {
    width: 200px;
    max-width: 200px;
    overflow: hidden;
    color: #0b53b8;
  }
  p:nth-child(4) {
    text-align: end;
    width: 60px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.75rem;
  align-items: center;
  margin-left: 1rem;
  position: absolute;
  right: 0;
`;

export const StyledTableRowInputs = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  gap: 1rem;

  input {
    width: 184px;
  }

  input[type='number'] {
    width: 60px;
  }
`;

export const DeleteConfirmation = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -30px;
  right: 0;
  padding: 10px;
  color: #0b53b8;
`;
