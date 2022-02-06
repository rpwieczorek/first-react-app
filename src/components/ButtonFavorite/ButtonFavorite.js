import {getCardById,checkIsFavorite } from '../../redux/store';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import styles from './ButtonFavorite.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';


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