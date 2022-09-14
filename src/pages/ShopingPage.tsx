import ProductCard from '../components/product/ProductCard';
import { Product } from '../components/product/interfaces/ProductInterface';

const products: Product[] = [
  {
    id: 'p1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
  },
  {
    id: 'p2',
    title: 'Coffee Mug 2'
  },
  {
    id: 'p3',
    title: 'Coffee Mug meme',
    img: './coffee-mug2.png'
  }
];

const ShopingPage = () => {
  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />

      <div>
        <ProductCard
          product={products[0]}
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        />

        <ProductCard
          product={products[1]}
        />
      </div>
    </div>
  );
};

export default ShopingPage;