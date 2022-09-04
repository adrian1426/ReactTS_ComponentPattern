import { useState } from 'react';
import styles from '../../styles/styles.module.css';
import srcNoImage from '../../assets/no-image.jpg';

const ProductCard = () => {
  const [counter, setCounter] = useState<number>(0);

  const increaseCounter = (value: number) => {
    setCounter(prev => Math.max(prev + value, 0));
  }

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="coffee mug"
      />

      <span
        className={styles.productDescription}
      >
        Coffee Mug
      </span>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonMinus}
          onClick={() => increaseCounter(-1)}
        >
          -
        </button>

        <div
          className={styles.countLabel}
        >
          {counter}
        </div>

        <button
          className={styles.buttonAdd}
          onClick={() => increaseCounter(1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;