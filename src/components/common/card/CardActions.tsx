import styles from '../../../styles/styles.module.css';
import { Props } from '../../../interfaces/ChildrenInterface';

const CardActions = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.buttonsContainer}>
      {children}
    </div>
  );
};

export default CardActions;