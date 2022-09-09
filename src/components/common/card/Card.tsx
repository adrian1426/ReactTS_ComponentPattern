import CardTitle from './CardTitle';
import styles from '../../../styles/styles.module.css';
import CardImage from './CardImage';
import CardActions from './CardActions';
import { Props } from '../../../interfaces/ChildrenInterface';

const Card = (props: Props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`${styles.productCard} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.Title = CardTitle;
Card.Image = CardImage;
Card.Actions = CardActions;

export default Card;

