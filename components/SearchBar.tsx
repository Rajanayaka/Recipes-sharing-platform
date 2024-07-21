import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <input
            type="text"
            placeholder="Search for recipes..."
            className="w-full p-2 border rounded"
        />
    );
};

export default SearchBar;
