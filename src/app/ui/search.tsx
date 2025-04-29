'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const debounceTimeout = useRef(null);

  // Initialize input with existing query from URL
  const initialQuery = searchParams.get('query') || '';
  const [searchTerm, setSearchTerm] = React.useState(initialQuery);

  // Debounce search updates
  const handleSearch = (term) => {
    setSearchTerm(term);

    // Clear previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set new timeout
    debounceTimeout.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      router.push(`${pathname}?${params.toString()}`);
    }, 300);
  };

  // Sync input with URL changes
  useEffect(() => {
    const query = searchParams.get('query') || '';
    setSearchTerm(query);
  }, [searchParams]);

  // Cleanup debounce timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-1 flex-shrink-0 max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <MagnifyingGlassIcon
          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
          aria-hidden="true"
        />
        <input
          id="search"
          className="block w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default Search;