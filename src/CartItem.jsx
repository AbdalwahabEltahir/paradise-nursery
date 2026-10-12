import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Navbar } from './ProductList';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);

  const totalQty = items.reduce((s, i) => s + i.quantity, 0);
  const totalAmount = items.reduce((s, i) => s + i.cost * i.quantity, 0);

  const increase = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const decrease = (item) => {
    if (item.quantity > 1)
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    else dispatch(removeItem(item.name));
  };

  return (
    <div>
      <Navbar onNavigate={onNavigate} />
      <div className="cart-page">
        <h2>Total plants: {totalQty}</h2>
        <h2>Total cost: ${totalAmount}</h2>

        {items.length === 0 && <p>Your cart is empty.</p>}

        {items.map((item) => (
          <div className="cart-item" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Unit price: ${item.cost}</p>
              <div className="qty-controls">
                <button onClick={() => decrease(item)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => increase(item)}>+</button>
              </div>
              <p>Subtotal: ${item.cost * item.quantity}</p>
              <button className="delete" onClick={() => dispatch(removeItem(item.name))}>
                Delete
              </button>
            </div>
          </div>
        ))}

        <div className="cart-actions">
          <button onClick={() => onNavigate('plants')}>Continue Shopping</button>
          <button onClick={() => alert('Coming Soon')}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;