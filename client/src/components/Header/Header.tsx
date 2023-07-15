import { useState } from 'react';
import AlertModal from '../AlertModal';
import UserFormModal from '../UserFormModal';
import { StyledHeader } from './style';
import SearchBar from '../SearchBar';

interface HeaderProps {
  resultCount: number | undefined;
  setSearchTerm: (term: string) => void;
  searchTerm: string;
}
const Header: React.FC<HeaderProps> = ({
  resultCount,
  setSearchTerm,
  searchTerm,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleUserFormSubmit = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <StyledHeader>
      <UserFormModal onSubmit={handleUserFormSubmit} />
      <SearchBar
        resultCount={resultCount}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      {showAlert && (
        <AlertModal
          text='Vartotojas pridėtas sėkmingai!'
          isOpen={showAlert}
          onClose={handleCloseAlert}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
