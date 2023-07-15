import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';
import GlobalStyles from './styles/GlobalStyles';
import { StyledMain, StyledSection } from './styles/UtilityStyles';
import { useState } from 'react';
import { IUser } from './types/user';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <>
      <GlobalStyles />
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        resultCount={users.length}
      />
      <StyledMain>
        <StyledSection>
          <Table
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setUsers={setUsers}
          />
        </StyledSection>
      </StyledMain>
      <Footer />
    </>
  );
};

export default App;
