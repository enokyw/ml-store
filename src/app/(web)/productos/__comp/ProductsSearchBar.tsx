'use client';

import { useState, useEffect } from 'react';

interface ProductsSearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export function ProductsSearchBar({ 
  onSearch, 
  placeholder = "Buscar productos...",
  initialValue = ""
}: ProductsSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, onSearch]);

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative w-full sm:max-w-xl">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="input w-full pl-12 pr-12 text-base rounded-full"
        />
        
        {/* Search Icon */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-[1]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-base-content/50" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-ghost btn-sm btn-circle z-[1]"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
} 