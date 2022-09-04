import styles from '../../styles/styles.module.css';
import srcNoImage from '../../assets/no-image.jpg';
import { useProduct } from '../../hooks/useProduct';
import Card from '../common/card/Card';
import { ProductProvider } from '../../context/productContext';

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
    <Card>
      <ProductProvider
        value={{ imgProduct, title }}
      >
        <Card.Image />
        <Card.Title />

        <Card.Actions>
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
        </Card.Actions>
      </ProductProvider>
    </Card>
  );
};

export default ProductCard;