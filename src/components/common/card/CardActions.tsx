import styles from '../../../styles/styles.module.css';
import { Props } from '../../../interfaces/ChildrenInterface';

const CardActions = (props: Props) => {
  const { children, className } = props;

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      {children}
    </div>
  );
};

export default CardActions;