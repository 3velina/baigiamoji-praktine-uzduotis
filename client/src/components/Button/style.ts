import styled from 'styled-components';

interface IStyledButton {
  $bgcolor: string;
  $color: string;
}

export const StyledButton = styled.button<IStyledButton>`
  padding: 16px 32px;
  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : '')};
  font-family: 'Comfortaa', cursive;
  border: none;
  cursor: pointer;
  min-width: 135px;
  border-radius: 15px;
  box-shadow: -2.5px 2.5px 12.5px -5px #8fbbf7;
  color: ${(props) => (props.$color ? props.$color : '#fff')};

  &:hover {
    background-color: #8fbbf7;
    color: #fff;
  }
`;
