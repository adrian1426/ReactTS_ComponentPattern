import { useContext } from "react";
import productContext from '../../../context/productContext';
import styles from '../../../styles/styles.module.css';
import { Props } from '../../../interfaces/ChildrenInterface';

const CardTitle = (props: Props) => {
  const context = useContext(productContext);
  const { children, className } = props;

  return (
    <span
      className={`${styles.productDescription} ${className}`}
    >
      {children ? children : context.title}
    </span>
  );
};

export default CardTitle;