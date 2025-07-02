'use client';

import { useState } from 'react';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Aquí iría la lógica de búsqueda
      console.log('Búsqueda:', searchQuery);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="join w-full">
        <input 
          className="input input-bordered join-item flex-1" 
          placeholder="¿En qué podemos ayudarte hoy?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary join-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
} 