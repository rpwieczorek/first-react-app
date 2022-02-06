import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import styles from './Card.module.scss';

const Card = props => {
  return (
    <li className={styles.card}>
      {props.title}
      <ButtonFavorite id={props.id}/>
    </li>
  );
};

export default Card;