import styled from 'styled-components';
import { BREAKPOINTS } from '../../types/enums';

export const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 10px 15px;
  position: relative;
  overflow: hidden;
  height: 35px;
  margin-top: 25px;
  margin-left: 10px;

  @media screen and (min-width: ${BREAKPOINTS.Desktop}) {
    margin-top: 20px;
  }

  .search-icon {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 10px;
    left: 15px;
  }

  input {
    background-color: #e4eefd;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    padding-left: 42px;
    padding: 11px 4px 9px 42px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    overflow: hidden;
  }

  input::placeholder {
    color: #9b9eac;
    letter-spacing: 0.5px;
    font-family: sans-serif;
    font-weight: 300;
  }

  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 0;
    bottom: 0;
    right: 0px;
    width: 35px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #e4eefd 80%);
  }
`;
