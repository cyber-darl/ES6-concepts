import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (value: string) => void;
}

{/* Passed as props from product page. onSearch is simply setSearchTerm function  */}
const SearchBar= ({ searchTerm, onSearch } : SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      style={{
        padding: '8px',
        width: '100%',
        maxWidth: '300px',
        marginBottom: '20px',
        fontSize: '16px',
      }}
    />
  );
};

export default SearchBar;
