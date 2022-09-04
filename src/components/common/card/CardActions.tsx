import React, { ReactNode } from 'react';
import styles from '../../../styles/styles.module.css';

interface Props {
  children: ReactNode;
};


const CardActions = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.buttonsContainer}>
      {children}
    </div>
  );
};

export default CardActions;