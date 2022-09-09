import styles from '../../styles/styles.module.css';
import srcNoImage from '../../assets/no-image.jpg';
import { useProduct } from '../../hooks/useProduct';
import Card from '../common/card/Card';
import { ProductProvider } from '../../context/productContext';
import { Props } from './interfaces/ProductInterface';
import '../../styles/custom-styles.css';


const ProductCard = (props: Props) => {
  const { product: { img, title } } = props;
  const { counter, increaseCounter } = useProduct();

  const imgProduct = img ? img : srcNoImage;

  return (
    <Card className="bg-dark">
      <ProductProvider
        value={{ imgProduct, title }}
      >
        <Card.Image className='cutom-image' />
        <Card.Title className='text-white' />

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

export default ProductCard;