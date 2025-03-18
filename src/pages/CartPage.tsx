import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/Cart/CartItem';
import { CartSummary } from '../components/Cart/CartSummary';
import { useCart } from '../hooks/useCart';
import { Button } from '../components/ui/button';
import { ShoppingBag } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, getCartItemCount } = useCart();
  
  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };
  
  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Cart Items ({getCartItemCount()})</h2>
            
            <div className="space-y-2">
              {cart.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
            
            <div className="mt-6">
              <Link to="/">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div>
          <CartSummary
            subtotal={getCartTotal()}
            itemCount={getCartItemCount()}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
};