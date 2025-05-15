import React, { useState } from 'react';
import { Products } from '../Products/Products';
import ProductList from '../ProductList/ProductList';
import SearchBar from '../SearchBar/SearchBar';

// Define the shape of a single product
interface Product {
    id: number;
  name: string;
  price: number;

}

// Define the full products structure: category -> array of products
type ProductData = {
  [category: string]: Product[];
};

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = Object.entries(Products).reduce((acc, [category, items]) => {//reduce iterates through the items with its corresponding categories, one by one
       
    const matchedItems = items.filter((item) => //2.) matchedItems becomes the new array
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) //1.) from the searchbar component, return a boolean if what is searched is a part of the products array, filter returns a new array based on true/false
    );

    if (matchedItems.length > 0) { //3.) if matchedItems is not empty, it should be the value, with the corresponding category as key, in the accumulator object
      acc[category] = matchedItems;
    }
    return acc; //return the accumulated object
  }, {} as ProductData); //accumulated object is initialized here as an empty object - {}

  return (
    <div>
         <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      {/* You might want to pass filteredProducts here instead of Products */}
      {Object.entries(filteredProducts).map(([category, items]) => (
        <ProductList key={category} category={category} items={items} />
      ))}
    </div>
  );
};

export default ProductPage;
