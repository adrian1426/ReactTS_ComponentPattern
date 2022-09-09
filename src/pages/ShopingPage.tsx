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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {
          products.map((product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )))
        }
      </div>
    </div>
  );
};

export default ShopingPage;