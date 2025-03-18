import React from 'react';
import { Product } from '../../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-md">
      <CardHeader className="p-4">
        <div className="aspect-square h-48 mx-auto flex items-center justify-center p-2 bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <CardTitle className="text-lg mt-2 line-clamp-2">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <p className="text-sm text-gray-500 line-clamp-3 mb-2">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <Badge variant="outline" className="text-xs">{product.category}</Badge>
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{product.rating.rate} ({product.rating.count})</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        <Button onClick={() => onAddToCart(product)} size="sm">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};