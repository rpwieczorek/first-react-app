import {checkIsFavorite, toggleCardFavorite } from '../../redux/cardsRedux';
import clsx from 'clsx';
import { useSelector,useDispatch } from 'react-redux';
import styles from './ButtonFavorite.module.scss';

const ButtonFavorite = props => {
  const isFavorite = useSelector(state => checkIsFavorite(state, props.id));
  const dispatch = useDispatch();
  const cardId = props.id;
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className={styles.button}>
        <span className={clsx('fa fa-star-o ', styles.icon, isFavorite && styles.active )}></span>
      </button>
    </form>    
  );
};

export default ButtonFavorite;