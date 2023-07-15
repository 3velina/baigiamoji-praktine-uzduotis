import styled from 'styled-components';

export const StyledModal = styled.dialog`
  padding: 2rem;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background: #fff;
  border-radius: 0.5rem;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border: none;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledAlertModal = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: none;
  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledMessage = styled.p`
  margin: 2.5em;
  color: #083e8a;
`;

export const Button = styled.div`
  padding: 16px 32px;
  background-color: #e4eefd;
  font-family: 'Comfortaa', cursive;
  border: none;
  cursor: pointer;
  min-width: 135px;
  border-radius: 15px;
  box-shadow: -2.5px 2.5px 12.5px -5px #8fbbf7;
  color: #083e8a;
`;
