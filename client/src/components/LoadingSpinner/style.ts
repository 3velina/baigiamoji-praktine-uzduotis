import styled from 'styled-components';

interface IStyledLoadingSpinnerProps {
  $fullscreen?: boolean;
}

export const StyledLoadingSpinner = styled.div<IStyledLoadingSpinnerProps>`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 8px solid #ebf3fd;
  border-top: 8px solid #0b53b8;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
`;

export const StyledLoadingSpinnerWrapper = styled.div<IStyledLoadingSpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
