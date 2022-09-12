import { useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import { Product } from '../components/product/interfaces/ProductInterface';
import Cart from '../components/common/cart/Cart';

interface IProductInCart extends Product {
  count: number;
}

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
  const [shopincCart, setShopincCart] = useState<{ [key: string]: IProductInCart }>({});

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

      <div className="shoping-cart">
        <Cart
          product={products[1]}
        />
      </div>
    </div>
  );
};

export default ShopingPage;