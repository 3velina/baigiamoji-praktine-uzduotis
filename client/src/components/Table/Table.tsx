import { useState, useEffect } from 'react';
import useUsers from '../../hooks/useUsers';
import { IUser } from '../../types/user';
import LoadingSpinner from '../LoadingSpinner';
import Pagination from '../Pagination';
import TableHeading from '../TableHeader';
import TableRow from '../TableRow';
import { StyledTable, StyledTableContainer } from './style';
import { NoData } from './style';

interface TableProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setUsers: (users: IUser[]) => void;
}
const Table: React.FC<TableProps> = ({ searchTerm, setUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, _setUsersPerPage] = useState(7);

  const { users: userData, isLoading, isError, error } = useUsers(searchTerm);

  useEffect(() => {
    if (userData) {
      setUsers(userData);
    }
  }, [userData, setUsers]);

  if (isLoading) {
    return <LoadingSpinner $fullscreen />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentPosts = userData?.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <StyledTableContainer>
        <StyledTable>
          <TableHeading />
          {currentPosts && currentPosts.length > 0 ? (
            currentPosts.map((user: IUser, idx: number) => (
              <TableRow
                _id={user._id}
                key={`user${idx + 1}`}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                age={user.age}
              />
            ))
          ) : (
            <NoData>Registruotų vartotojų nerasta...</NoData>
          )}
        </StyledTable>
      </StyledTableContainer>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={userData && userData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Table;
