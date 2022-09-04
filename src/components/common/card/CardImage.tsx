import { useContext } from 'react';
import productContext from '../../../context/productContext';
import styles from '../../../styles/styles.module.css';

interface Props {
  src?: string;
  alt?: string;
};

const CardImage = (props: Props) => {
  const { src, alt } = props;
  const context = useContext(productContext);

  return (
    <img
      className={styles.productImg}
      src={src ? src : context.imgProduct}
      alt={alt ? alt : context.title}
    />
  );
};

export default CardImage;