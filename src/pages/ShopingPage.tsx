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

  const onProductCountChange = (product: Product, number: number) => {
    setShopincCart(prev => {
      return {
        ...prev,
        [product.id]: { ...product, count: prev[product.id] ? prev[product.id].count + number : number }
      }
    });
  };

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
              value={shopincCart}
              onChange={onProductCountChange}
            />
          )))
        }

        <ProductCard
          product={products[0]}
        />
      </div>

      <div className="shoping-cart">{
        products.map((product => {
          if (shopincCart[product.id]?.count > 0) {
            return (
              <Cart
                key={product.id}
                product={product}
                value={shopincCart}
                onChange={onProductCountChange}
              />
            )
          }

          return null;
        }))
      }
      </div>
    </div>
  );
};

export default ShopingPage;