import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { MovieSearch, SearchBtn, SearchWrapper } from './SearchForm.styled';

const SearchForm = ({ theme, onFormSearch }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchInput.value
      .trim()
      .toLowerCase();
    onFormSearch(searchQuery);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <SearchWrapper theme={theme}>
        <MovieSearch
          theme={theme}
          name="searchInput"
          type="text"
          placeholder="Search movie..."
        />

        <SearchBtn theme={theme}>
          <SearchIcon />
        </SearchBtn>
      </SearchWrapper>
    </form>
  );
};

SearchForm.propTypes = {
  theme: PropTypes.object.isRequired,
  onFormSearch: PropTypes.func.isRequired,
};

export { SearchForm };
