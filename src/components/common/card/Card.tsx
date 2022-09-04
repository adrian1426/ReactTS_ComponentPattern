import { ReactNode } from 'react';
import CardTitle from './CardTitle';
import styles from '../../../styles/styles.module.css';
import CardImage from './CardImage';
import CardActions from './CardActions';

interface Props {
  children: ReactNode;
};

const Card = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.productCard}>
      {children}
    </div>
  );
};

Card.Title = CardTitle;
Card.Image = CardImage;
Card.Actions = CardActions;

export default Card;

