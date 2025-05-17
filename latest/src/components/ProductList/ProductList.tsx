import React from 'react';
import ProductCard from '../ProductCard/ProductCard';


type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
  // Add other properties your ProductCard expects
};

type ProductListProps = {
  category: string;
  items: Product[];
};


const ProductList = ({ category, items }: ProductListProps) => {
  return (
    <div>
      <div className="grid">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;