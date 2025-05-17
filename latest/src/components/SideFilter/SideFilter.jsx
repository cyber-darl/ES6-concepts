import React from 'react';

const SidebarFilter = ({
  brands,
  selectedBrands,
  onBrandToggle,
  clearBrandFilters,
}) => {
  return (
    <div style={{ width: '200px', padding: '1rem', borderRight: '1px solid #ccc' }}>
{/*Brands*/}
      <h3 style={{ marginTop: '2rem' }}>Brands</h3>
      {brands.map((brand, idx) => (
        <div key={`${brand}-${idx}`}>
          <label>
            <input
              type="checkbox"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => onBrandToggle(brand)}
            />
            {brand}
          </label>
        </div>
      ))}
      <div>
        <button onClick={clearBrandFilters}>Clear Brand Filters</button>
      </div>
    </div>
  );
};

export default SidebarFilter;
