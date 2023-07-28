'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  suppliers: {
    id: string;
    price: string;
    stock: string;
    distance: string;
    supplierId: string;
  }[];
}

interface Props {
  placeholder?: string;
}

const SearchBar: React.FC<Props> = ({ placeholder = 'Search...' }) => {
  const [query, setQuery] = useState('');
  const [matchingProduct, setMatchingProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (matchingProduct) {
      // Automatically click the link when matchingProduct changes
      const link = document.getElementById('productLink');
      if (link) {
        link.click();
      }
    }
  }, [matchingProduct]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted!');
    if (query.trim()) {
      const data = require('../../../public/data/products.json');
      const products: Product[] = data.data.Product;
      const product = products.find(
        (product: Product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.id.toString() === query.trim()
      );
      setMatchingProduct(product || null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative text-gray-600 focus-within:text-gray-400 px-2 flex-grow py-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22 22l-6-6"></path>
                <circle cx="10" cy="10" r="8"></circle>
              </svg>
            </button>
          </span>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="py-2 pl-10 pr-4 text-sm text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-gray-400 hover:border-gray-400 w-full"
            placeholder={placeholder}
            style={{ width: '100%' }}
          />
        </div>
      </form>

      {matchingProduct && (
        <Link href={{pathname:`/Productdetails/${matchingProduct.id}`,query: {id: JSON.stringify(matchingProduct.id)} }} id="productLink" >
          
        </Link>
      )}
    </>
  );
};

export default SearchBar;

