import ProductCard from '../components/product/ProductCard';

const products = [
  {
    id: 'p1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
  },
  {
    id: 'p2',
    title: 'Coffee Mug 2'
  }
];

const ShopingPage = () => {
  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <ProductCard
          product={products[0]}
        />
      </div>
    </div>
  );
};

export default ShopingPage;