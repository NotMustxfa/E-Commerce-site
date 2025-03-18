import React from 'react';
import { ProductFilter } from '../components/Products/ProductFilter';
import { ProductGrid } from '../components/Products/ProductGrid';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { SortOption } from '../types';

export const ProductsPage: React.FC = () => {
  const { 
    products, 
    categories, 
    isLoading, 
    currentPage, 
    setCurrentPage, 
    totalPages, 
    selectedCategory, 
    setSelectedCategory, 
    sortOption, 
    setSortOption,
    totalProducts
  } = useProducts();
  
  const { addToCart } = useCart();

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setCurrentPage(1); // Reset to first page when changing sort
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-gray-500">{totalProducts} products available</p>
      </div>
      
      <ProductFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />
      
      <ProductGrid
        products={products}
        isLoading={isLoading}
        onAddToCart={addToCart}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};