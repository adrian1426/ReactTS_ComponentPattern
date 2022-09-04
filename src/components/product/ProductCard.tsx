import styles from '../../styles/styles.module.css';
import srcNoImage from '../../assets/no-image.jpg';
import { useProduct } from '../../hooks/useProduct';

const ProductCard = () => {
  const { counter, increaseCounter } = useProduct();

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