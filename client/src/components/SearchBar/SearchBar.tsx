import SearchInput from '../SearchInput/SearchInput';
import { StyledSearchBar } from './style';

interface SearchBarProps {
  resultCount: number | undefined;
  setSearchTerm: (term: string) => void;
  searchTerm: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  resultCount,
  setSearchTerm,
  searchTerm,
}) => {
  return (
    <StyledSearchBar>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {resultCount === 1 ? (
        <p>{resultCount} Result</p>
      ) : resultCount ? (
        <p>{resultCount} Results</p>
      ) : (
        <p>No results</p>
      )}{' '}
    </StyledSearchBar>
  );
};

export default SearchBar;
