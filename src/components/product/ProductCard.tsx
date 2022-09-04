import styles from '../../styles/styles.module.css';
import srcNoImage from '../../assets/no-image.jpg';
import { useProduct } from '../../hooks/useProduct';

interface Product {
  id: string;
  title: string;
  img?: string;
};

interface Props {
  product: Product;
};

const ProductCard = (props: Props) => {
  const { product: { img, title } } = props;
  const { counter, increaseCounter } = useProduct();

  const imgProduct = img ? img : srcNoImage;

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={imgProduct}
        alt={title}
      />

      <span
        className={styles.productDescription}
      >
        {title}
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