import styles from '../../../styles/styles.module.css';

interface Props {
  src: string;
  alt: string;
};

const CardImage = (props: Props) => {
  const { src, alt } = props;

  return (
    <img
      className={styles.productImg}
      src={src}
      alt={alt}
    />
  );
};

export default CardImage;