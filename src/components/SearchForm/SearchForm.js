import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react/cjs/react.development';

const SearchForm = () => {
  const [searchFrase,setSearchFrase] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'SEARCH', payload: searchFrase});
    setSearchFrase('');
  };
  
  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
          <TextInput placeholder="Search..."  type="text" value={searchFrase} onChange={e => setSearchFrase(e.target.value)}/>
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;