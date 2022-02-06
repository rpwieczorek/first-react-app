import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import ButtonRemove from '../ButtonRemove/ButtonRemove';
import styles from './Card.module.scss';

const Card = props => {
  return (
    <li className={styles.card}>
      {props.title}
      <ul>
        <li><ButtonFavorite id={props.id}/></li>
        <li><ButtonRemove id={props.id}/></li>
      </ul>
    </li>
  );
};

export default Card;