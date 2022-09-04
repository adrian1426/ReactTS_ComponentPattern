import { ReactNode } from 'react';
import styles from '../../../styles/styles.module.css';

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

export default Card;