import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './ButtonRemove.module.scss';
import { removeCard } from '../../redux/cardsRedux';

const ButtonRemove = props => {
  const dispatch = useDispatch();
  const cardId = props.id;
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className={styles.button}>
        <span className={clsx('fa fa-trash ', styles.icon)}></span>
      </button>
    </form>    
  );
};

export default ButtonRemove;