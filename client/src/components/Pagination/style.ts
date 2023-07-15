import styled from 'styled-components';

interface IStyledPaginationNumber {
  $active: boolean;
}

export const StyledPagination = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  max-width: 1100px;
  font-weight: 400;
  border-radius: 0 0 15px 15px;

  li {
    color: #083e8a;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;
  }
`;

export const StyledPaginationPageNumber = styled.li<IStyledPaginationNumber>`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.$active ? '-1px 1px 5px -1.25px #bdd7fa' : 'none'};
  border: ${(props) => (props.$active ? 'none' : `1px solid #0b53b8`)};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.$active ? '#0b53b8' : 'none')};
    text-decoration: none;
    color: ${(props) => (props.$active ? '#fff' : '#0b53b8')};
    height: 100%;
    width: 100%;
  }
`;
