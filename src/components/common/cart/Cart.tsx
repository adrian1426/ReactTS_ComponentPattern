import Card from '../card/Card';
import { useProduct } from '../../../hooks/useProduct';
import srcNoImage from '../../../assets/no-image.jpg';
import styles from '../../../styles/styles.module.css';
import '../../../styles/custom-styles.css';
import { ProductProvider } from '../../../context/productContext';
import { Props } from '../../product/interfaces/ProductInterface';

const Cart = (props: Props) => {
  const { product: { img, title } } = props;
  const { counter, increaseCounter } = useProduct();

  const imgProduct = img ? img : srcNoImage;

  return (
    <Card
      className="bg-dark"
      style={{ border: '1px solid white', width: '120px' }}
    >
      <ProductProvider
        value={{ imgProduct, title }}
      >
        <Card.Image className='cutom-image' />

        <Card.Actions className='custom-actions'>
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

export default Cart;