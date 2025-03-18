import React from 'react';
import { CartItem as CartItemType } from '../../types';
import { Button } from '../../components/ui/button';
import { Trash, Minus, Plus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ 
  item, 
  onUpdateQuantity, 
  onRemove 
}) => {
  const { product, quantity } = item;
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b gap-4">
      <div className="flex-shrink-0 h-24 w-24 bg-white p-2 rounded flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium">{product.title}</h3>
        <p className="text-sm text-gray-500">${product.price.toFixed(2)} each</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="text-right">
        <div className="font-medium">${(product.price * quantity).toFixed(2)}</div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-red-500 p-0 h-auto" 
          onClick={() => onRemove(product.id)}
        >
          <Trash className="h-4 w-4 mr-1" />
          <span>Remove</span>
        </Button>
      </div>
    </div>
  );
};