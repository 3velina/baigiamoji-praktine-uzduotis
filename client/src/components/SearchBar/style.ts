import styled from 'styled-components';
import { BREAKPOINTS } from '../../types/enums';

export const StyledSearchBar = styled.div`
  height: 54px;
  padding-right: 1rem;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 65%;
  max-width: 1100px;
  margin-bottom: 25px;

  @media screen and (min-width: ${BREAKPOINTS.Tablet}) {
    width: 80%;
  }

  @media screen and (min-width: ${BREAKPOINTS.Desktop}) {
    margin-bottom: 10px;
    width: 100%;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    margin-top: 25px;
    margin-left: 10px;
    color: #083e8a;
  }

  div {
    flex-grow: 0.7;
    justify-content: space-evenly;
  }
`;
