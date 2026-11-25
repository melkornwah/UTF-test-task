import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCartCount,
  selectTotalPrice,
  selectCart,
  removeFromCart,
  updateQuantity,
  clearCart
} from '../store/store';

import CartItem from './CartItem';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const cartCount = useSelector(selectCartCount);
  const totalPrice = useSelector(selectTotalPrice);

  const [isOpen, setIsOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const timerRef = useRef(null);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, delta) => {
    const item = cart.find(item => item.id === id);

    if (item === undefined) {
      return;
    }

    const newQuantity = item.quantity + delta;

    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }

    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);

    timerRef.current = setTimeout(() => {
      dispatch(clearCart());
      setIsCheckingOut(false);
      setIsOpen(false);

      alert('Заказ оформлен!');
    }, 1000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="cart">
      <button 
        className="cart-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        Корзина ({cartCount})
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Корзина</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="cart-items">
            {cart.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              cart.map(cartItem => (
                <CartItem
                  key={cartItem.id}
                  item={cartItem}
                  handleUpdateQuantity={handleUpdateQuantity}
                  handleRemoveItem={handleRemoveItem}
                />
              ))
            )}
          </div>

          <div className="cart-footer">
            <div className="total">Итого: ${totalPrice}</div>
            <button 
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={cart.length === 0 || isCheckingOut}
            >
              {isCheckingOut ? 'Оформляем...' : 'Оформить заказ'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
