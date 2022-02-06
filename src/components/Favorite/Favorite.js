import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import {getAllFavorites} from '../../redux/cardsRedux';
import Card from '../Card/Card';

const Favorite = () => {
  
  const cards = useSelector(state => getAllFavorites(state));
  
  if (cards.length === 0) {
    return (
      <>
        <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
          <p>You don't have favorite cards!</p>
        </article>
      </>
    );
  }
  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
         {cards.map(card => <Card key={card.id} id={card.id} title={card.title} /> )}
      </article>
    </>
  );
};

export default Favorite;