import React, { useState } from 'react';
import { Products } from '../Products/Products';
import ProductList from '../ProductList/ProductList';
import SearchBar from '../SearchBar/SearchBar';
import SidebarFilter from '../SideFilter/SideFilter';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);

   const allItems = Object.values(Products).flat();
   //.values return values and flat() opens arrays inside of arrays to make them flat
  const allBrands = [...new Set(allItems.map((item) => item.brand))];
  //new is a keyword used to instantiatize the Set Javascript class which packs it into the array using the spread operator [...]

   const handleBrandToggle = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand) ? prevBrands.filter((b) => b !== brand) : [...prevBrands, brand]
    );
  };

   const clearBrandFilters = () => setSelectedBrands([]);
   
  // Filter products based on search term
  const filteredProducts = Object.entries(Products).reduce((acc, [category, items]) => {

    let matchedItems = items.filter((item) => { 
      // 1.) from the search bar component, return a boolean if what is searched is a part of the products array

      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()); // filter returns a new array based on boolean, it excludes false

      
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(item.brand);
      return matchesSearch && matchesBrand;
    });


    if (matchedItems.length > 0) {
     // 3.) if matchedItems is not empty, it should be the value with the corresponding category as key


      acc[category] = matchedItems;
    }

    return acc;
  }, {});


  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <SidebarFilter onBrandToggle={handleBrandToggle} brands={allBrands}  selectedBrands={selectedBrands}  clearBrandFilters={clearBrandFilters} />
      {/* You might want to pass filteredProducts here instead of Products */}
      {Object.entries(filteredProducts).map(([category, items]) => (
        <ProductList key={category} category={category} items={items} />
      ))}
    </div>
  );
};

export default ProductPage;
