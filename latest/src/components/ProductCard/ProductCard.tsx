import React from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
};

type ProductCardProps = {
  product: Product;
};


const ProductCard = ({ product } : ProductCardProps) => {
  return (
    <>
     <div className="card">
      <p>{product.name}</p>
      <p>${product.price}</p>
      </div>
    </>
     
  
  );
};

export default ProductCard;