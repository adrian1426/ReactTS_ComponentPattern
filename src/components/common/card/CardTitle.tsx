import { ReactNode } from "react";
import styles from '../../../styles/styles.module.css';

interface Props {
  children: ReactNode;
};

const CardTitle = (props: Props) => {
  const { children } = props;

  return (
    <span
      className={styles.productDescription}
    >
      {children}
    </span>
  );
};

export default CardTitle;