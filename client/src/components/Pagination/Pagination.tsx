import { StyledPagination, StyledPaginationPageNumber } from './style';

interface IPagination {
  usersPerPage: number;
  totalUsers: number | undefined;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = ({
  usersPerPage,
  totalUsers,
  paginate,
  currentPage,
}: IPagination) => {
  const pageNumbers: number[] = [];

  if (totalUsers) {
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  // Ellipsis (...)
  let ellipsisLeft = false;
  let ellipsisRight = false;

  return (
    <StyledPagination>
      <ul>
        {pageNumbers.map((number, idx) => {
          if (
            idx === 0 ||
            idx === pageNumbers.length - 1 ||
            idx === currentPage ||
            idx === currentPage - 1 ||
            idx === currentPage - 2
          ) {
            return (
              <StyledPaginationPageNumber
                $active={idx === currentPage - 1}
                key={number}
              >
                <a onClick={() => paginate(number)} href='#'>
                  {number}
                </a>
              </StyledPaginationPageNumber>
            );
          } else if (number === 2 && currentPage > 3 && !ellipsisLeft) {
            ellipsisLeft = true;
            return (
              <li key={'ellipsis-left'} style={{ pointerEvents: 'none' }}>
                ...
              </li>
            );
          } else if (
            number === pageNumbers.length - 1 &&
            currentPage < pageNumbers.length - 2 &&
            !ellipsisRight
          ) {
            ellipsisRight = true;
            return (
              <li key={'ellipsis-right'} style={{ pointerEvents: 'none' }}>
                ...
              </li>
            );
          }
        })}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
