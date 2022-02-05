import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import { search } from '../../redux/store';
import { useSelector } from 'react-redux';
import { getSearchPhrase } from '../../redux/store';


const SearchForm = () => {
  const [searchPhrase,setSearchPhrase] = useState('');
  const dispatch = useDispatch();

  const storedSearchPhrase = useSelector(state => getSearchPhrase(state));
  //console.log(storedSearchPhrase);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(search(searchPhrase));
    setSearchPhrase('');
  };
  
  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
          <TextInput placeholder={storedSearchPhrase !== '' ? storedSearchPhrase : ''}  type="text" value={searchPhrase} onChange={e => setSearchPhrase(e.target.value)}/>
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;