import { StyledSearchInput } from './style';

interface ISearchInputProps {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}

const SearchInput = ({ setSearchTerm, searchTerm }: ISearchInputProps) => {
  return (
    <StyledSearchInput>
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='search-icon'>
        <img src='../../../search-icon.svg' alt='Search Icon' />
      </div>
    </StyledSearchInput>
  );
};

export default SearchInput;
