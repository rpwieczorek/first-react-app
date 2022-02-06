import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react/cjs/react.development';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = props => {
  const [title,setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ columnId: props.columnId, title: title , isFavorite: false}));
    setTitle('');
}
  return(
    <form className={styles.cardForm} onSubmit={handleSubmit}> 
      <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
}

export default CardForm;