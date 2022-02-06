import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import {getAllFavorites} from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {
  
  const cards = useSelector(state => getAllFavorites(state));
  
  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
         { (cards.length === 0) ? <p>You don't have favorite cards!</p> : cards.map(card => <Card key={card.id} id={card.id} title={card.title} /> )}
      </article>
    </>
  );
};

export default Favorite;